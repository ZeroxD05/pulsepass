import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { PrismaClient } from "@prisma/client"
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link"

const prisma = new PrismaClient()

export default async function DashboardPage() {
  const session = await getServerSession()
  
  if (!session || !session.user?.email) {
    redirect("/login")
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      purchases: {
        include: { product: true }
      }
    }
  });

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        <header className="flex justify-between items-center bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-sm">
          <div>
            <h1 className="text-2xl font-bold mb-1 text-white">Dashboard</h1>
            <p className="text-gray-400 text-sm">Welcome back, {session.user.name}</p>
          </div>
          <LogoutButton />
        </header>

        <section className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2 text-white">My Purchases</h2>
          {user?.purchases && user.purchases.length > 0 ? (
            <ul className="flex flex-col gap-3">
              {user.purchases.map(purchase => (
                <li key={purchase.id} className="flex justify-between items-center text-sm p-3 bg-gray-950 rounded-lg border border-gray-800">
                  <div>
                    <Link href={`/product/${purchase.productId}`} className="font-medium text-blue-500 hover:underline">
                      {purchase.product.title}
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">{new Date(purchase.createdAt).toLocaleDateString()}</p>
                  </div>
                  <span className="font-medium text-gray-300">${purchase.amount.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 italic">You haven't purchased anything yet.</p>
          )}
        </section>

      </div>
    </div>
  )
}
