This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Loading States

StudioSpace uses a single, reusable loading system built with the App Router, plain CSS, and the existing theme tokens. No new dependencies were added.

### Branded skeletons

- `Skeleton` renders a theme-aware shimmer block (`light`/`dark`) using the `--muted` and `--primary` tokens defined in `globals.css`.
- `StudioCardSkeleton` matches the StudioCard layout: image, category badge, title, location, overview, price, and details link.
- `StudioGridSkeleton` renders a responsive grid of studio card skeletons.
- `BookingCardSkeleton` matches the BookingCard layout: image, title/status, date/time, hourly rate, price, and cancel action.
- `BookingListSkeleton` renders the booking card list.
- `ListingCardSkeleton` matches the ListingCard layout: image, category/price, title, location, overview, details, and action buttons.
- `ListingGridSkeleton` renders the listings grid.
- `FeaturedStudiosSkeleton` reproduces the full featured section shell (heading, copy, browse button, and card grid) while the featured studios request is in flight.

### Route-level loading UI (`loading.tsx`)

| File | Shown while loading |
| --- | --- |
| `src/app/loading.tsx` | Root route transitions, with a centered branded spinner |
| `src/app/studios/loading.tsx` | Explore Studios heading and studio card grid |
| `src/app/studios/[id]/loading.tsx` | Studio details page (header, gallery, content, booking card) |
| `src/app/studios/edit/[id]/loading.tsx` | Update studio form |
| `src/app/dashboard/loading.tsx` | Dashboard route transitions, with a centered branded spinner |
| `src/app/dashboard/my-bookings/loading.tsx` | My Bookings heading, count card, and booking cards |
| `src/app/dashboard/my-listings/loading.tsx` | My Listings heading and listing card grid |
| `src/app/dashboard/add-studio/loading.tsx` | Add Studio heading and form sections |

### Spinners

- `Spinner` is the shared branded spinner with `xs`, `sm`, `md`, and `lg` sizes.
- `PageLoader` combines the spinner with a short label for full-page/session loading states.
- `LinkPending` uses Next.js `useLinkStatus` to show a small inline spinner inside header navigation links during client-side route transitions. It is always rendered at a fixed size, so it never causes layout shift.

### Async data and form submission states

- The home page wraps the async `FeaturedStudios` section in React `Suspense` with `FeaturedStudiosSkeleton` as its fallback.
- The Add Studio page shows `PageLoader` while the auth session is being checked.
- Add Studio, Update Studio, and booking submission buttons are disabled and show a spinner while submitting.
- Login and Register show spinners during email submissions and Google OAuth redirects.
- Cancel Booking and Delete Studio actions show spinners while their requests are running.

### Accessibility and motion

- Loading containers use `aria-busy`, and status text is announced with `role="status"` and screen-reader-only labels.
- Skeleton shimmer is disabled under `prefers-reduced-motion: reduce`.

### Files created

- `src/components/shared/skeleton.tsx`
- `src/components/shared/spinner.tsx`
- `src/components/shared/link-pending.tsx`
- `src/components/studios/studio-card-skeleton.tsx`
- `src/components/home/featured-studios-skeleton.tsx`
- `src/app/dashboard/my-bookings/_component/BookingCardSkeleton.tsx`
- `src/app/dashboard/my-listings/_component/ListingCardSkeleton.tsx`
- `src/app/loading.tsx`
- `src/app/studios/loading.tsx`
- `src/app/studios/[id]/loading.tsx`
- `src/app/studios/edit/[id]/loading.tsx`
- `src/app/dashboard/loading.tsx`
- `src/app/dashboard/my-bookings/loading.tsx`
- `src/app/dashboard/my-listings/loading.tsx`
- `src/app/dashboard/add-studio/loading.tsx`

### Files modified

- `src/app/globals.css` — added the branded skeleton shimmer and reduced-motion handling.
- `src/app/page.tsx` — added a `Suspense` boundary around `FeaturedStudios`.
- `src/app/dashboard/add-studio/page.tsx` — replaced the plain session check text with `PageLoader`.
- `src/app/dashboard/add-studio/_component/FormCard.tsx` — added submit spinner and disabled state.
- `src/app/studios/edit/[id]/UpdateStudioForm.tsx` — added save spinner and disabled state.
- `src/app/dashboard/my-bookings/_component/BookingCard.tsx` — added cancel booking spinner and disabled state.
- `src/app/dashboard/my-listings/_component/ListingCard.tsx` — added delete spinner and disabled state.
- `src/app/login/page.tsx` — added login and Google OAuth submit states with spinners.
- `src/app/register/page.tsx` — added registration and Google OAuth submit states with spinners.
- `src/components/studios/studio-details-modal.tsx` — added booking submit spinner and disabled close state while submitting.
- `src/components/layout/header.tsx` — added `LinkPending` indicators to desktop and mobile navigation.

