# Sama Salalah Real Estate Booking System

Full-stack starter project for Sama Salalah Real Estate.

## Apps

- `apps/api` - Node.js + Express + Prisma + PostgreSQL backend
- `apps/web` - Next.js customer website
- `apps/admin` - Next.js admin dashboard
- `apps/mobile` - Flutter mobile app starter

## Core Features

- Buildings and units
- Photos and videos
- Daily, monthly, and yearly rentals
- Daily pricing calendar
- Booking system
- Card payment placeholders for Thawani/MyFatoorah
- WhatsApp Business API placeholder
- Admin booking management
- Accounting per unit and building
- Profit/loss reports
- July and August bookings cannot be cancelled or extended by customers

## Quick Start

```bash
npm install
cp apps/api/.env.example apps/api/.env
npm run dev
```

## Notes

This repository is a starter foundation. Payment and WhatsApp integrations are intentionally implemented as placeholders so real provider credentials can be added safely later.
