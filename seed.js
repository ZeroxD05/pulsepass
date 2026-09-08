const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding PulsePass products...");

  // Create a default seller account
  const seller = await prisma.user.upsert({
    where: { email: 'admin@pulsepass.dev' },
    update: {},
    create: {
      email: 'admin@pulsepass.dev',
      name: 'PulsePass Official',
      role: 'ADMIN',
      paypalEmail: 'admin@pulsepass.dev'
    }
  });

  const products = [
    {
      title: 'PulsePass: Base Mod',
      description: 'The complete PulsePass core. UI configuration, PC & Mobile ready, Free & Paid tiers, and 4 included themes (Summer, Halloween, Winter, PvP).',
      price: 24.99,
      category: 'Software',
      imageUrl: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1000&auto=format&fit=crop',
      sellerId: seller.id
    },
    {
      title: 'PulsePass: Monthly Templates',
      description: 'Fresh content for your server. Get new missions monthly, premium 3D items, and exclusive seasonal themes to keep your players engaged.',
      price: 9.99,
      category: 'Software',
      imageUrl: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1000&auto=format&fit=crop',
      sellerId: seller.id
    },
    {
      title: 'PulsePass: Setup Help',
      description: 'Expert setup assistance. Includes Server installation, Config troubleshooting, and a 1-on-1 Discord support session.',
      price: 50.00,
      category: 'Service',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
      sellerId: seller.id
    }
  ];

  for (const prod of products) {
    const existing = await prisma.product.findFirst({
      where: { title: prod.title }
    });

    if (!existing) {
      await prisma.product.create({
        data: prod
      });
      console.log(`Created product: ${prod.title}`);
    } else {
      console.log(`Product already exists: ${prod.title}`);
    }
  }

  console.log("Seeding completed.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
