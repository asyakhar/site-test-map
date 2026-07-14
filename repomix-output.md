This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.github/
  workflows/
    deploy.yml
app/
  advice/
    page.tsx
  fonts/
    Gilroy-Bold.woff2
    Gilroy-Extrabold.woff2
    Gilroy-Medium.woff2
    Gilroy-Regular.woff2
    SanghaKali-Regular.woff2
  map/
    page.tsx
  place/
    [id]/
      page.tsx
      PlaceDetailClient.tsx
  yakutia/
    page.tsx
  favicon.ico
  globals.css
  layout.tsx
  page.tsx
components/
  ui/
    accordion.tsx
    alert-dialog.tsx
    alert.tsx
    aspect-ratio.tsx
    avatar.tsx
    badge.tsx
    breadcrumb.tsx
    button-group.tsx
    button.tsx
    calendar.tsx
    card.tsx
    carousel.tsx
    chart.tsx
    checkbox.tsx
    collapsible.tsx
    command.tsx
    context-menu.tsx
    dialog.tsx
    drawer.tsx
    dropdown-menu.tsx
    empty.tsx
    field.tsx
    form.tsx
    hover-card.tsx
    input-group.tsx
    input-otp.tsx
    input.tsx
    item.tsx
    kbd.tsx
    label.tsx
    menubar.tsx
    navigation-menu.tsx
    pagination.tsx
    popover.tsx
    progress.tsx
    radio-group.tsx
    resizable.tsx
    scroll-area.tsx
    select.tsx
    separator.tsx
    sheet.tsx
    sidebar.tsx
    skeleton.tsx
    slider.tsx
    sonner.tsx
    spinner.tsx
    switch.tsx
    table.tsx
    tabs.tsx
    textarea.tsx
    toast.tsx
    toaster.tsx
    toggle-group.tsx
    toggle.tsx
    tooltip.tsx
    use-mobile.tsx
    use-toast.ts
  accessible-yakutia-map.tsx
  AppHeader.tsx
  ContrastToggle.tsx
  PageWrapper.tsx
  PopularPlaces.tsx
  theme-provider.tsx
  UpcomingEvents.tsx
  VisionModal.tsx
data/
  events.csv
hooks/
  use-mobile.ts
  use-toast.ts
lib/
  fetchObjects.ts
  utils.ts
public/
  data/
    events.json
    objects.json
  img/
    .gitkeep
    background_photo.png
    cut_map.png
    events-pattern.png
    eye.png
    logo_homus.png
    o_proekte.png
    placeholder.jpg
    union.png
    uzor_phon.png
    uzor.svg
  apple-icon.png
  icon-dark-32x32.png
  icon-light-32x32.png
  icon.svg
  placeholder-logo.png
  placeholder-logo.svg
  placeholder-user.jpg
  placeholder.jpg
  placeholder.svg
scripts/
  csv-to-events.js
  csv-to-objects.js
  update-photo.js
styles/
  globals.css
.gitignore
components.json
next-env.d.ts
next.config.mjs
next.config.prod.mjs
package.json
pnpm-workspace.yaml
postcss.config.mjs
README.md
tsconfig.json
tsconfig.tsbuildinfo
```

# Files

## File: app/place/[id]/page.tsx
```typescript
import { fetchObjects } from '@/lib/fetchObjects'; 


export async function generateStaticParams() {
  const objects = await fetchObjects();
  return objects.map((obj) => ({ id: obj.id }));
}


import PlaceDetailClient from './PlaceDetailClient';

export default async function PlaceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PlaceDetailClient id={id} />;
}
```

## File: components/ui/accordion.tsx
```typescript
'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

## File: components/ui/alert-dialog.tsx
```typescript
'use client'

import * as React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn('text-lg font-semibold', className)}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: 'outline' }), className)}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
```

## File: components/ui/alert.tsx
```typescript
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground',
        destructive:
          'text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
        className,
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
        className,
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
```

## File: components/ui/aspect-ratio.tsx
```typescript
'use client'

import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }
```

## File: components/ui/avatar.tsx
```typescript
'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/lib/utils'

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className,
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'bg-muted flex size-full items-center justify-center rounded-full',
        className,
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
```

## File: components/ui/badge.tsx
```typescript
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
```

## File: components/ui/breadcrumb.tsx
```typescript
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'

import { cn } from '@/lib/utils'

function Breadcrumb({ ...props }: React.ComponentProps<'nav'>) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
        className,
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn('hover:text-foreground transition-colors', className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('text-foreground font-normal', className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn('[&>svg]:size-3.5', className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
```

## File: components/ui/button-group.tsx
```typescript
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

const buttonGroupVariants = cva(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal:
          '[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none',
        vertical:
          'flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
)

function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      className={cn(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function ButtonGroupSeparator({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        'bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto',
        className,
      )}
      {...props}
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}
```

## File: components/ui/button.tsx
```typescript
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
```

## File: components/ui/calendar.tsx
```typescript
'use client'

import * as React from 'react'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react'
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant']
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn(
          'flex gap-4 flex-col md:flex-row relative',
          defaultClassNames.months,
        ),
        month: cn('flex flex-col w-full gap-4', defaultClassNames.month),
        nav: cn(
          'flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between',
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          'flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)',
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          'w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5',
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          'relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md',
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn(
          'absolute bg-popover inset-0 opacity-0',
          defaultClassNames.dropdown,
        ),
        caption_label: cn(
          'select-none font-medium',
          captionLayout === 'label'
            ? 'text-sm'
            : 'rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5',
          defaultClassNames.caption_label,
        ),
        table: 'w-full border-collapse',
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none',
          defaultClassNames.weekday,
        ),
        week: cn('flex w-full mt-2', defaultClassNames.week),
        week_number_header: cn(
          'select-none w-(--cell-size)',
          defaultClassNames.week_number_header,
        ),
        week_number: cn(
          'text-[0.8rem] select-none text-muted-foreground',
          defaultClassNames.week_number,
        ),
        day: cn(
          'relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none',
          defaultClassNames.day,
        ),
        range_start: cn(
          'rounded-l-md bg-accent',
          defaultClassNames.range_start,
        ),
        range_middle: cn('rounded-none', defaultClassNames.range_middle),
        range_end: cn('rounded-r-md bg-accent', defaultClassNames.range_end),
        today: cn(
          'bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none',
          defaultClassNames.today,
        ),
        outside: cn(
          'text-muted-foreground aria-selected:text-muted-foreground',
          defaultClassNames.outside,
        ),
        disabled: cn(
          'text-muted-foreground opacity-50',
          defaultClassNames.disabled,
        ),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') {
            return (
              <ChevronLeftIcon className={cn('size-4', className)} {...props} />
            )
          }

          if (orientation === 'right') {
            return (
              <ChevronRightIcon
                className={cn('size-4', className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn('size-4', className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70',
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
```

## File: components/ui/card.tsx
```typescript
import * as React from 'react'

import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
```

## File: components/ui/carousel.tsx
```typescript
'use client'

import * as React from 'react'
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext],
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -left-12 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -right-12 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
```

## File: components/ui/chart.tsx
```typescript
'use client'

import * as React from 'react'
import * as RechartsPrimitive from 'recharts'

import { cn } from '@/lib/utils'

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: '', dark: '.dark' } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />')
  }

  return context
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<'div'> & {
  config: ChartConfig
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >['children']
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color,
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join('\n')}
}
`,
          )
          .join('\n'),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = 'dot',
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<'div'> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: 'line' | 'dot' | 'dashed'
    nameKey?: string
    labelKey?: string
  }) {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = `${labelKey || item?.dataKey || item?.name || 'value'}`
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === 'string'
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label

    if (labelFormatter) {
      return (
        <div className={cn('font-medium', labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      )
    }

    if (!value) {
      return null
    }

    return <div className={cn('font-medium', labelClassName)}>{value}</div>
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ])

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== 'dot'

  return (
    <div
      className={cn(
        'border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl',
        className,
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || 'value'}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
          const indicatorColor = color || item.payload.fill || item.color

          return (
            <div
              key={item.dataKey}
              className={cn(
                '[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5',
                indicator === 'dot' && 'items-center',
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          'shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)',
                          {
                            'h-2.5 w-2.5': indicator === 'dot',
                            'w-1': indicator === 'line',
                            'w-0 border-[1.5px] border-dashed bg-transparent':
                              indicator === 'dashed',
                            'my-0.5': nestLabel && indicator === 'dashed',
                          },
                        )}
                        style={
                          {
                            '--color-bg': indicatorColor,
                            '--color-border': indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      'flex flex-1 justify-between leading-none',
                      nestLabel ? 'items-end' : 'items-center',
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-foreground">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className="text-foreground font-mono font-medium tabular-nums">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = 'bottom',
  nameKey,
}: React.ComponentProps<'div'> &
  Pick<RechartsPrimitive.LegendProps, 'payload' | 'verticalAlign'> & {
    hideIcon?: boolean
    nameKey?: string
  }) {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center gap-4',
        verticalAlign === 'top' ? 'pb-3' : 'pt-3',
        className,
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || 'value'}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)

        return (
          <div
            key={item.value}
            className="[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        )
      })}
    </div>
  )
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string,
) {
  if (typeof payload !== 'object' || payload === null) {
    return undefined
  }

  const payloadPayload =
    'payload' in payload &&
    typeof payload.payload === 'object' &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === 'string'
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === 'string'
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
```

## File: components/ui/checkbox.tsx
```typescript
'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
```

## File: components/ui/collapsible.tsx
```typescript
'use client'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
```

## File: components/ui/command.tsx
```typescript
'use client'

import * as React from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { SearchIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md',
        className,
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn('overflow-hidden p-0', className)}
        showCloseButton={showCloseButton}
      >
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          'placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        'max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto',
        className,
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        'text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
        className,
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn('bg-border -mx-1 h-px', className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className,
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
```

## File: components/ui/context-menu.tsx
```typescript
'use client'

import * as React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  )
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  )
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
        className,
      )}
      {...props}
    />
  )
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
          className,
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        'text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
        className,
      )}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn('bg-border -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className,
      )}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
```

## File: components/ui/dialog.tsx
```typescript
'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-lg leading-none font-semibold', className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
```

## File: components/ui/drawer.tsx
```typescript
'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

import { cn } from '@/lib/utils'

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          'group/drawer-content bg-background fixed z-50 flex h-auto flex-col',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
          'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
          className,
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
        className,
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('text-foreground font-semibold', className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
```

## File: components/ui/dropdown-menu.tsx
```typescript
'use client'

import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        'px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn('bg-border -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
        className,
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
```

## File: components/ui/empty.tsx
```typescript
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

function Empty({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty"
      className={cn(
        'flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12',
        className,
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        'flex max-w-sm flex-col items-center gap-2 text-center',
        className,
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  'flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function EmptyMedia({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-title"
      className={cn('text-lg font-medium tracking-tight', className)}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        'text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        'flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance',
        className,
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}
```

## File: components/ui/field.tsx
```typescript
'use client'

import { useMemo } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

function FieldSet({ className, ...props }: React.ComponentProps<'fieldset'>) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        'flex flex-col gap-6',
        'has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3',
        className,
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = 'legend',
  ...props
}: React.ComponentProps<'legend'> & { variant?: 'legend' | 'label' }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        'mb-3 font-medium',
        'data-[variant=legend]:text-base',
        'data-[variant=label]:text-sm',
        className,
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        'group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4',
        className,
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  'group/field flex w-full gap-3 data-[invalid=true]:text-destructive',
  {
    variants: {
      orientation: {
        vertical: ['flex-col [&>*]:w-full [&>.sr-only]:w-auto'],
        horizontal: [
          'flex-row items-center',
          '[&>[data-slot=field-label]]:flex-auto',
          'has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
        ],
        responsive: [
          'flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto',
          '@md/field-group:[&>[data-slot=field-label]]:flex-auto',
          '@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
        ],
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  },
)

function Field({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        'group/field-content flex flex-1 flex-col gap-1.5 leading-snug',
        className,
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        'group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50',
        'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4',
        'has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10',
        className,
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        'flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        'text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance',
        'last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5',
        '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        'relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2',
        className,
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="bg-background text-muted-foreground relative mx-auto block w-fit px-2"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<'div'> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors) {
      return null
    }

    if (errors.length === 1 && errors[0]?.message) {
      return errors[0].message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {errors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>,
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn('text-destructive text-sm font-normal', className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}
```

## File: components/ui/form.tsx
```typescript
'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'

import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
)

function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn('grid gap-2', className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn('data-[error=true]:text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<'p'>) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? '') : props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn('text-destructive text-sm', className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
```

## File: components/ui/hover-card.tsx
```typescript
'use client'

import * as React from 'react'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'

import { cn } from '@/lib/utils'

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
          className,
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
```

## File: components/ui/input-group.tsx
```typescript
'use client'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

function InputGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        'group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none',
        'h-9 has-[>textarea]:h-auto',

        // Variants based on alignment.
        'has-[>[data-align=inline-start]]:[&>input]:pl-2',
        'has-[>[data-align=inline-end]]:[&>input]:pr-2',
        'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3',
        'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',

        // Focus state.
        'has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]',

        // Error state.
        'has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40',

        className,
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        'inline-start':
          'order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]',
        'inline-end':
          'order-last pr-3 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]',
        'block-start':
          'order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5',
        'block-end':
          'order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5',
      },
    },
    defaultVariants: {
      align: 'inline-start',
    },
  },
)

function InputGroupAddon({
  className,
  align = 'inline-start',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('button')) {
          return
        }
        e.currentTarget.parentElement?.querySelector('input')?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  'text-sm shadow-none flex gap-2 items-center',
  {
    variants: {
      size: {
        xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
        sm: 'h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5',
        'icon-xs':
          'size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0',
        'icon-sm': 'size-8 p-0 has-[>svg]:p-0',
      },
    },
    defaultVariants: {
      size: 'xs',
    },
  },
)

function InputGroupButton({
  className,
  type = 'button',
  variant = 'ghost',
  size = 'xs',
  ...props
}: Omit<React.ComponentProps<typeof Button>, 'size'> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        'flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent',
        className,
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<'textarea'>) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        'flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent',
        className,
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}
```

## File: components/ui/input-otp.tsx
```typescript
'use client'

import * as React from 'react'
import { OTPInput, OTPInputContext } from 'input-otp'
import { MinusIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        'flex items-center gap-2 has-disabled:opacity-50',
        containerClassName,
      )}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn('flex items-center', className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        'data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
```

## File: components/ui/input.tsx
```typescript
import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
```

## File: components/ui/item.tsx
```typescript
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

function ItemGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn('group/item-group flex flex-col', className)}
      {...props}
    />
  )
}

function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn('my-0', className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  'group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a&]:hover:bg-accent/50 [a&]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border-border',
        muted: 'bg-muted/50',
      },
      size: {
        default: 'p-4 gap-4 ',
        sm: 'py-3 px-4 gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Item({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  )
}

const itemMediaVariants = cva(
  'flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image:
          'size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function ItemMedia({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        'flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none',
        className,
      )}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        'flex w-fit items-center gap-2 text-sm leading-snug font-medium',
        className,
      )}
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        'text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance',
        '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-actions"
      className={cn('flex items-center gap-2', className)}
      {...props}
    />
  )
}

function ItemHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        'flex basis-full items-center justify-between gap-2',
        className,
      )}
      {...props}
    />
  )
}

function ItemFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        'flex basis-full items-center justify-between gap-2',
        className,
      )}
      {...props}
    />
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}
```

## File: components/ui/kbd.tsx
```typescript
import { cn } from '@/lib/utils'

function Kbd({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        'bg-muted w-fit text-muted-foreground pointer-events-none inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none',
        "[&_svg:not([class*='size-'])]:size-3",
        '[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10',
        className,
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn('inline-flex items-center gap-1', className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
```

## File: components/ui/label.tsx
```typescript
'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@/lib/utils'

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Label }
```

## File: components/ui/menubar.tsx
```typescript
'use client'

import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        'bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs',
        className,
      )}
      {...props}
    />
  )
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  )
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none',
        className,
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md',
          className,
        )}
        {...props}
      />
    </MenubarPortal>
  )
}

function MenubarItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        'px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
        className,
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn('bg-border -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className,
      )}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
        className,
      )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
```

## File: components/ui/navigation-menu.tsx
```typescript
import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center',
        className,
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        'group flex flex-1 list-none items-center justify-center gap-1',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn('relative', className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1',
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), 'group', className)}
      {...props}
    >
      {children}{' '}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto',
        'group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className="absolute top-full left-0 isolate z-50 flex justify-center"
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          'origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
        className,
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
```

## File: components/ui/pagination.tsx
```typescript
import * as React from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
  React.ComponentProps<'a'>

function PaginationLink({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className,
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
```

## File: components/ui/popover.tsx
```typescript
'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import { cn } from '@/lib/utils'

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
```

## File: components/ui/progress.tsx
```typescript
'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
```

## File: components/ui/radio-group.tsx
```typescript
'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('grid gap-3', className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
```

## File: components/ui/resizable.tsx
```typescript
'use client'

import * as React from 'react'
import { GripVerticalIcon } from 'lucide-react'
import * as ResizablePrimitive from 'react-resizable-panels'

import { cn } from '@/lib/utils'

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
        className,
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        'bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90',
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
```

## File: components/ui/scroll-area.tsx
```typescript
'use client'

import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import { cn } from '@/lib/utils'

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn('relative', className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        'flex touch-none p-px transition-colors select-none',
        orientation === 'vertical' &&
          'h-full w-2.5 border-l border-l-transparent',
        orientation === 'horizontal' &&
          'h-2.5 flex-col border-t border-t-transparent',
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }
```

## File: components/ui/select.tsx
```typescript
'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'default'
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn('text-muted-foreground px-2 py-1.5 text-xs', className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
```

## File: components/ui/separator.tsx
```typescript
'use client'

import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@/lib/utils'

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        className,
      )}
      {...props}
    />
  )
}

export { Separator }
```

## File: components/ui/sheet.tsx
```typescript
'use client'

import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = 'right',
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left'
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
          side === 'right' &&
            'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
          side === 'left' &&
            'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
          side === 'top' &&
            'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
          side === 'bottom' &&
            'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('flex flex-col gap-1.5 p-4', className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn('text-foreground font-semibold', className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
```

## File: components/ui/sidebar.tsx
```typescript
'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import { PanelLeftIcon } from 'lucide-react'

import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const SIDEBAR_COOKIE_NAME = 'sidebar_state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = '16rem'
const SIDEBAR_WIDTH_MOBILE = '18rem'
const SIDEBAR_WIDTH_ICON = '3rem'
const SIDEBAR_KEYBOARD_SHORTCUT = 'b'

type SidebarContextProps = {
  state: 'expanded' | 'collapsed'
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.')
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === 'function' ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open],
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? 'expanded' : 'collapsed'

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH,
              '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            'group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full',
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = 'left',
  variant = 'sidebar',
  collapsible = 'offcanvas',
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === 'none') {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          'bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="group peer text-sidebar-foreground hidden md:block"
      data-state={state}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
          'group-data-[collapsible=offcanvas]:w-0',
          'group-data-[side=right]:rotate-180',
          variant === 'floating' || variant === 'inset'
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)',
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex',
          side === 'left'
            ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
            : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
          // Adjust the padding for floating and inset variants.
          variant === 'floating' || variant === 'inset'
            ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l',
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn('size-7', className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<'button'>) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        'hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex',
        'in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize',
        '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
        'hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full',
        '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
        '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
        className,
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<'main'>) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        'bg-background relative flex w-full flex-1 flex-col',
        'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2',
        className,
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn('bg-background h-8 w-full shadow-none', className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn('bg-sidebar-border mx-2 w-auto', className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        className,
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        'text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
        className,
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn('w-full text-sm', className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn('flex w-full min-w-0 flex-col gap-1', className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn('group/menu-item relative', className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        outline:
          'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
      },
      size: {
        default: 'h-8 text-sm',
        sm: 'h-7 text-xs',
        lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  tooltip,
  className,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : 'button'
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== 'collapsed' || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        showOnHover &&
          'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0',
        className,
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        'text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none',
        'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<'div'> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn('flex h-8 items-center gap-2 rounded-md px-2', className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            '--skeleton-width': width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        'border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn('group/menu-sub-item relative', className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = 'md',
  isActive = false,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
  size?: 'sm' | 'md'
  isActive?: boolean
}) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
        'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
        size === 'sm' && 'text-xs',
        size === 'md' && 'text-sm',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
```

## File: components/ui/skeleton.tsx
```typescript
import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-accent animate-pulse rounded-md', className)}
      {...props}
    />
  )
}

export { Skeleton }
```

## File: components/ui/slider.tsx
```typescript
'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
```

## File: components/ui/sonner.tsx
```typescript
'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner, ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
```

## File: components/ui/spinner.tsx
```typescript
import { Loader2Icon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  )
}

export { Spinner }
```

## File: components/ui/switch.tsx
```typescript
'use client'

import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '@/lib/utils'

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
```

## File: components/ui/table.tsx
```typescript
'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot="table-header"
      className={cn('[&_tr]:border-b', className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="table-body"
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
        className,
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
        className,
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
```

## File: components/ui/tabs.tsx
```typescript
'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]',
        className,
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

## File: components/ui/textarea.tsx
```typescript
import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
```

## File: components/ui/toast.tsx
```typescript
'use client'

import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className,
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive:
          'destructive group border-destructive bg-destructive text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      className,
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
```

## File: components/ui/toaster.tsx
```typescript
'use client'

import { useToast } from '@/hooks/use-toast'
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
```

## File: components/ui/toggle-group.tsx
```typescript
'use client'

import * as React from 'react'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { toggleVariants } from '@/components/ui/toggle'

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: 'default',
  variant: 'default',
})

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        'group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs',
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        'min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l',
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }
```

## File: components/ui/toggle.tsx
```typescript
'use client'

import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-9 px-2 min-w-9',
        sm: 'h-8 px-1.5 min-w-8',
        lg: 'h-10 px-2.5 min-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
```

## File: components/ui/tooltip.tsx
```typescript
'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from '@/lib/utils'

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          'bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance',
          className,
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
```

## File: components/ui/use-mobile.tsx
```typescript
import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}
```

## File: components/ui/use-toast.ts
```typescript
'use client'

// Inspired by react-hot-toast library
import * as React from 'react'

import type { ToastActionElement, ToastProps } from '@/components/ui/toast'

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType['ADD_TOAST']
      toast: ToasterToast
    }
  | {
      type: ActionType['UPDATE_TOAST']
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType['DISMISS_TOAST']
      toastId?: ToasterToast['id']
    }
  | {
      type: ActionType['REMOVE_TOAST']
      toastId?: ToasterToast['id']
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: 'REMOVE_TOAST',
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      }

    case 'DISMISS_TOAST': {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      }
    }
    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, 'id'>

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: 'UPDATE_TOAST',
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id })

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  }
}

export { useToast, toast }
```

## File: components/ContrastToggle.tsx
```typescript
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Кнопка-глаз для включения/выключения высокого контраста и крупного шрифта.
 * Такая же логика, как в шапке главной: переключает классы на <html> и
 * запоминает выбор на сессию (sessionStorage), чтобы он не сбрасывался.
 */
export default function ContrastToggle({ className = "" }: { className?: string }) {
  const basePath = process.env.NODE_ENV === "production" ? "/site-test-map" : "";
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    setHighContrast(document.documentElement.classList.contains("high-contrast"));
  }, []);

  const toggle = () => {
    const next = !highContrast;
    setHighContrast(next);
    if (next) {
      document.documentElement.classList.add("high-contrast", "large-font");
    } else {
      document.documentElement.classList.remove("high-contrast", "large-font");
    }
    try {
      sessionStorage.setItem("visionPreference", next ? "partial" : "none");
    } catch {
      /* ignore */
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className={`w-auto px-2 ${highContrast ? "text-white hover:bg-white/20" : ""} ${className}`}
      title="Версия для слабовидящих"
      aria-label="Версия для слабовидящих: высокий контраст и крупный шрифт"
      aria-pressed={highContrast}
    >
      <img
        src={`${basePath}/img/eye.png`}
        alt=""
        aria-hidden="true"
        className="h-5 w-auto object-contain dark-contrast:brightness-0 dark-contrast:invert"
      />
    </Button>
  );
}
```

## File: components/PageWrapper.tsx
```typescript
import AppHeader from "@/components/AppHeader";

interface PageWrapperProps {
  children: React.ReactNode;
  onOpenFilters?: () => void;
}

export default function PageWrapper({ children, onOpenFilters }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <AppHeader onOpenFilters={onOpenFilters} />
      <main className="container mx-auto px-4 py-12 md:py-16">
        {children}
      </main>
    </div>
  );
}
```

## File: components/PopularPlaces.tsx
```typescript
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface MapObject {
  id: string;
  name: string;
  category: string;
  description: string;
  photos: string[];
}

// Русские подписи категорий (тег на карточке)
const CATEGORY_LABELS: Record<string, string> = {
  museum: "Музей",
  hotel: "Гостиница",
  restaurant: "Ресторан",
  cafe: "Кафе",
  park: "Парк",
  theater: "Театр",
  medical: "Медицина",
  spa: "СПА/Оздоровление",
  monument: "Памятник",
  shopping: "Торговый центр",
  sports: "Спорт",
  nature: "Природа",
  culture: "Культура",
  entertainment: "Развлечения",
  education: "Образование",
};

export default function PopularPlaces() {
  const basePath = process.env.NODE_ENV === "production" ? "/site-test-map" : "";
  const [places, setPlaces] = useState<MapObject[]>([]);
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    fetch(`${basePath}/data/objects.json`)
      .then((res) => (res.ok ? res.json() : Promise.reject(`HTTP ${res.status}`)))
      .then((data: MapObject[]) => {
        // Показываем места с фотографиями (они наиболее наполнены); если таких нет — все
        const withPhotos = data.filter((o) => Array.isArray(o.photos) && o.photos.length > 0);
        setPlaces(withPhotos.length >= 3 ? withPhotos : data);
      })
      .catch((err) => console.error("Error loading data:", err));
  }, [basePath]);

  if (places.length === 0) return null;

  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[autoplay.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {places.map((obj) => (
          <CarouselItem key={obj.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <Link href={`/place/${obj.id}`} className="block h-full">
              <Card className="h-full overflow-hidden py-0 group cursor-pointer bg-[var(--color-bg-primary)] border-[var(--color-card-border)] dark-contrast:bg-gray-900 dark-contrast:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={obj.photos && obj.photos.length > 0 ? obj.photos[0] : `${basePath}/img/placeholder.jpg`}
                    alt={obj.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = `${basePath}/img/placeholder.jpg`;
                    }}
                  />
                  <Badge className="absolute top-3 right-3 bg-white/90 text-[var(--color-text-primary)] text-sm">
                    {CATEGORY_LABELS[obj.category] || obj.category}
                  </Badge>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-bold text-[clamp(1.125rem,2vw,1.25rem)] mb-2 text-[var(--color-text-primary)] dark-contrast:text-white line-clamp-1">
                    {obj.name}
                  </h3>
                  <p className="text-[clamp(0.875rem,1.5vw,1rem)] line-clamp-2 text-[var(--color-text-secondary)] dark-contrast:text-gray-300">
                    {obj.description ? obj.description.replace(/\s+/g, " ").trim() : "Подробнее об объекте на странице места."}
                  </p>
                </div>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex -left-4" />
      <CarouselNext className="hidden sm:flex -right-4" />
    </Carousel>
  );
}
```

## File: components/theme-provider.tsx
```typescript
'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

## File: components/VisionModal.tsx
```typescript
"use client";

import { useEffect, useState } from "react";
import { Eye, ScanEye, Contrast, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type VisionPreference = "none" | "full" | "partial";

const STORAGE_KEY = "visionPreference";

function applyPreference(pref: VisionPreference) {
  const root = document.documentElement;
  if (pref === "partial") {
    root.classList.add("high-contrast", "large-font");
  } else {
    root.classList.remove("high-contrast", "large-font");
  }
}

/**
 * Входное окно про нарушения зрения. Показывается один раз за сессию
 * (sessionStorage) только на главной. Два шага:
 *  1. «Есть ли у вас нарушения зрения?» → Да / Нет
 *  2. При «Да»: Полная потеря (скринридер, вид не меняем) / Частичная (контраст+шрифт)
 */
export default function VisionModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = sessionStorage.getItem(STORAGE_KEY);
    } catch {
      /* sessionStorage недоступен — просто не показываем окно */
    }
    if (!stored) {
      setStep(1);
      setOpen(true);
    }
  }, []);

  const resolve = (pref: VisionPreference) => {
    try {
      sessionStorage.setItem(STORAGE_KEY, pref);
    } catch {
      /* ignore */
    }
    applyPreference(pref);
    if (pref === "full") {
      setAnnouncement(
        "Сайт готов к работе со скринридером. Используйте команды озвучивания вашей программы для навигации."
      );
    }
    setOpen(false);
  };

  // Закрытие без явного выбора (Esc / клик вне окна) трактуем как «нет нарушений»
  const handleOpenChange = (next: boolean) => {
    if (!next) {
      let stored: string | null = null;
      try {
        stored = sessionStorage.getItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
      if (!stored) resolve("none");
      else setOpen(false);
    }
  };

  const btnBase =
    "w-full flex items-center gap-4 rounded-xl border-2 p-5 text-left transition-all " +
    "border-[var(--color-card-border)] bg-[var(--color-bg-white)] hover:border-[var(--color-accent)] " +
    "focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/40 " +
    "dark-contrast:bg-gray-900 dark-contrast:border-gray-600 dark-contrast:hover:border-white";

  return (
    <>
      {/* Живая область для озвучивания скринридером */}
      <div role="status" aria-live="polite" className="sr-only">
        {announcement}
      </div>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-lg rounded-xl bg-[var(--color-bg-primary)] border-[var(--color-card-border)] dark-contrast:bg-black dark-contrast:text-white dark-contrast:border-gray-700">
          {step === 1 ? (
            <>
              <DialogHeader className="text-left">
                <DialogTitle className="font-sangha text-2xl md:text-3xl text-[var(--color-text-primary)] dark-contrast:text-white leading-tight">
                  Есть ли у вас нарушения зрения?
                </DialogTitle>
                <DialogDescription className="text-base mt-2 text-[var(--color-text-secondary)] dark-contrast:text-gray-300">
                  Мы можем подстроить сайт под вас, чтобы им было удобнее пользоваться.
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 flex flex-col gap-3">
                <button type="button" className={btnBase} onClick={() => setStep(2)}>
                  <span className="flex size-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] dark-contrast:bg-white dark-contrast:text-black">
                    <Eye className="size-6" />
                  </span>
                  <span className="text-lg font-semibold text-[var(--color-text-primary)] dark-contrast:text-white">
                    Да
                  </span>
                </button>

                <button
                  type="button"
                  className={btnBase}
                  onClick={() => resolve("none")}
                >
                  <span className="flex size-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-green-dark)]/15 text-[var(--color-green-dark)] dark-contrast:bg-white dark-contrast:text-black">
                    <Contrast className="size-6" />
                  </span>
                  <span className="text-lg font-semibold text-[var(--color-text-primary)] dark-contrast:text-white">
                    Нет
                  </span>
                </button>
              </div>
            </>
          ) : (
            <>
              <DialogHeader className="text-left">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="mb-1 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] dark-contrast:text-gray-300 focus:outline-none focus-visible:underline"
                >
                  <ArrowLeft className="size-4" /> Назад
                </button>
                <DialogTitle className="font-sangha text-2xl md:text-3xl text-[var(--color-text-primary)] dark-contrast:text-white leading-tight">
                  Какой у вас тип нарушения?
                </DialogTitle>
                <DialogDescription className="text-base mt-2 text-[var(--color-text-secondary)] dark-contrast:text-gray-300">
                  Выберите вариант — сайт подстроится под вас.
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 flex flex-col gap-3">
                <button
                  type="button"
                  className={btnBase}
                  onClick={() => resolve("full")}
                >
                  <span className="flex size-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-green-dark)]/15 text-[var(--color-green-dark)] dark-contrast:bg-white dark-contrast:text-black">
                    <ScanEye className="size-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-lg font-semibold text-[var(--color-text-primary)] dark-contrast:text-white">
                      Полная потеря зрения
                    </span>
                    <span className="block text-sm text-[var(--color-text-secondary)] dark-contrast:text-gray-300">
                      Работа со скринридером
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className={btnBase}
                  onClick={() => resolve("partial")}
                >
                  <span className="flex size-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] dark-contrast:bg-white dark-contrast:text-black">
                    <Contrast className="size-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-lg font-semibold text-[var(--color-text-primary)] dark-contrast:text-white">
                      Частичная потеря зрения
                    </span>
                    <span className="block text-sm text-[var(--color-text-secondary)] dark-contrast:text-gray-300">
                      Применим высокий контраст и крупный шрифт
                    </span>
                  </span>
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
```

## File: data/events.csv
```
Название праздника,Дата проведения,Суть праздника,Место проведения,
День родного языка и письменности,13 февраля,"Праздник учредили его в 1996 году указом первого президента республики Михаила Николаева Дата выбрана не случайно. 3 февраля – день рождения Семена Андреевича Новгородова (1892–1924). Семен Андреевич - лингвист, уроженец Боотурусского улуса. Он разработал якутский алфавит на основе международного фонетического алфавита, и в 1917 году выпустил первый букварь. До него якутская кириллица не была унифицирована, и большинство населения оставалось неграмотным. Новый алфавит внедрили в школы в 1920–1921 годах, а с 1924 года на него перевели книгоиздание. В 2026 году мероприятия приурочены к Году культуры в Якутии и Году единства народов России.","Конкретного места проведения нет. Праздник из года в год отмечается разными событиями, но все они посвящены памяти родному языку и письменности. В 2026 году был проведен торжественный вечер в Государственном театре оперы и балета и Доме дружбы народов в Якутске, с награждением премиями имени Новгородова и других лингвистов; были проведены «Бараховские чтения» в Верхневилюйском районе. Так же 13 февраля в 2026 году запустили проект «Языковое возрождение: семьи Якутии» с участием лингвиста Дмитрия Петрова. Цель - вовлечь семьи в ежедневное общение на родных языках (юкагирском, эвенском, эвенкийском, долганском)",saha_alphabet
День народного мастера,5 марта,"Праздник появился в 2012 году по указу президента республики, а в 2026 году его отметили в десятый раз, мероприятия приурочили к Году единства народов России и Году культуры в Якутии. Праздник посвящён мастерам, которые работают с деревом, костью, металлом, берестой, создают национальную одежду и украшения. На сегодня в республике 325 человек носят почётное звание «Народный мастер Республики Саха (Якутия)» и ещё 781 имеют звание «Мастер народных художественных промыслов»",Главное событие - шествие в национальных костюмах. Оно проходит 5 марта в Якутске. В 2026 году в нём участвовали более 1200 человек из 25 районов и столицы,narodny_master
День оленевода,6 марта,"Этот профессиональный праздник учредили в 2020 году указом главы республики, а отмечать его начали с 2021 года. Основная цель — повысить престиж профессии оленевода, признать его роль как хранителя традиционного образа жизни и промыслов коренных малочисленных народов Севера. На момент празднования в 2026 году в республике насчитывалось 166,7 тысячи голов оленей. Большая часть из них (164,8 тысячи) содержится в сельхозпредприятиях, фермерских хозяйствах и у индивидуальных предпринимателей. Оленеводством занимаются в 20 районах Якутии, включая арктические территории. В отрасли задействованы 107 организаций и 13 фермерских хозяйств, а в составе оленеводческих бригад трудятся 1232 человека, из которых 997 оленеводы и 235 чумработницы",Оленьи гонки - соревнования проводят на упряжках и верхом на оленях.,den_olenevoda
День Арктики,19 марта,"Для Якутии этот день имеет особое значение. Почти половина территории республики (около 1,6 млн кв. км) относится к Арктической зоне. Сюда входят 13 районов — Абыйский, Аллаиховский, Анабарский, Булунский, Верхнеколымский, Верхоянский, Жиганский, Момский, Нижнеколымский, Оленекский, Среднеколымский, Усть-Янский и Эвено-Бытантайский . До 2019 года в этот список входило лишь пять улусов, но республика добилась расширения зоны указом президента РФ.",,arktica
День охотника,3 апреля,"В Якутии охота является основой традиционного образа жизни, которая передается из поколения в поколение. У народов Якутии искусство охоты всегда было особо почитаемо, оно часто помогала выжить в периоды, когда скот был истощен. Республика обладает крупнейшей в РФ территорией, пригодной для охоты. Общая площадь охотничьих угодий составляет более 240 млн гектаров (78,1% территории). По состоянию на 20 февраля 2026 года, более 127 тысяч якутян имеют охотничьи билеты. В арсенале охотников зарегистрировано более 165 тысяч единиц оружия, что является одним из самых высоких показателей в стране.","Празднование начинается с традиционных обрядов. В некоторых наслегах, например в Кюпцах, проводят обряд очищения дымом, обряд «Сулганни», поклонение Матери Земле и Духу Огня, а завершают всё хороводным танцем единения",ohotnik
День Республики Саха (Якутия),27 апреля,"День Республики - это главный государственный праздник Якутии, который отмечается ежегодно 27 апреля. Это официальный выходной день в регионе.
 Праздник привязан к двум важнейшим историческим событиям, произошедшим в этот день:
 1. Образование Якутской АССР (1922 год). 
 2. Принятие Конституции Республики Саха (Якутия) (1992 год)","В 2026 году: 
 Ежегодные церемонии и награждения: возложения цветов к памятникам основателям республики . На площади Республики: торжественная церемония вручения паспортов молодым активистам и знаков отличия ГТО. 
 Концерты: На главной площади и в Доме дружбы народов имени А.Е. Кулаковского прошли праздничные концерты «Республика наших сердец» и «Единая Республика» с участием более 20 артистов.
 Выставки: В историческом парке «Россия - Моя история» открылась мультимедийная выставка «Единством сильны», посвященная культуре народов Якутии . На аллее спорткомплекса «Дохсун» состоялась ярмарка мастеров народного творчества",saha
День песни,21 мая,"Праздник учрежден в 2022 году (в 2025 году впервые был отпразднован) главой республики, и является значимым событием для народов Якутии, так как республика обладает богатейшими вокальными традициями: в Якутии существует 1467 действующих вокальных коллективах при культурно-досуговых учреждениях, в которых занимаются более 18 тысяч человек. Всего в республике насчитывается около 25 тысяч исполнителей. 47 коллективов носят звание народных: 18 хоров и 29 вокальных ансамблей. Два коллектива удостоены звания «Заслуженный коллектив Российской Федерации»: Чепаринский мужской народный хор Чурапчинского района и детский ансамбль «Кэнчээри» из Усть-Алданского района.","В 2025 году площадь Орджоникидзе  прошел концерт «Песни, окрыленные Победой!», посвященный 80-летию Победы в Великой Отечественной войне",penie
День сайылыка,22 мая,"Учреждён указом главы республики в 2018 году. В переводе с якутского «сайылык» означает «летник». Это сезонное поселение, куда семьи скотоводов переезжали на лето, чтобы пасти скот на богатых пастбищах, заготавливать молоко и мясо. Как правило, сайылыки строили подальше от зимовья, ближе к местам с хорошими пастбищами, покосами, ягодными лесами, рыбными озёрами и реками. В короткое якутское лето здесь пасли скот и заготавливали сено и дрова на долгую зиму, а заодно давали отсыревшим за зиму юртам и хотонам просохнуть и проветриться.
 В старину существовали самые разные поверья: Гадание на ложке, обряд для духа хотона, кормление огня (в первый день на сайте старшие рода бросали в огонь кусочки пищи, прося у духов благословения).
 Сегодня по приезде в сайылык по-прежнему устраивают маленький Ысыах: семьи собираются вместе, старшие совершают обряд благословения и благодарят духов за пережитую зиму . Женщины готовят традиционные блюда: оладьи, саламат, утиный суп, обязательно присутствуют кумыс и мясо. Проводятся спортивные состязания: перетягивание палки, бег, борьба хапсагай.",,saylyk
День осуохая,25 мая,"Осуохай - это якутский национальный круговой танец, который сопровождается хоровым импровизационным пением . Его корни уходят в глубокую древность и связаны с религиозными верованиями древних якутов. Круговые танцы отражали культ солнца, а сакральные пение и движения изначально были восхвалением бога Айыы в образе небесного светила. Участники переплетают пальцы рук и двигаются по кругу по ходу солнца. Тексты песен, воспевают красоту мироздания, просят у божеств благословения и желают всеобщего благоденствия. Интересно, что существует несколько региональных разновидностей осуохая — якутский, усть-алданский, амгинский, олекминский, вилюйский, которые отличаются движениями и исполнением песен. Массовое исполнение осуохая сегодня - это символ сплочения и единения многонационального народа Якутии, торжества светлых начал, мира и добра.","В 2026 году: 
 в академическом театре имени П.А. Ойунского состоялось торжественное собрание с участием вице-премьера Сергея Местникова и министра культуры Афанасия Ноева, где вручили награды и благодарственные письма
  
 Массовый танец, который в 2026 году прошёл на площади Орджоникидзе в Якутске",osuohai
Ысыах (Новый год),21 июня,"Древнейший праздник встречи лета и обновления жизни. Слово «Ысыах» происходит от глагола «ыс», что означает «кропить», «окроплять» . Это связано с обрядом праздника -окроплением кумысом, который является священным напитком и символом изобилия. Название напрямую указывает на суть ритуала: жертвенное возлияние небесным божествам Айыы, от которых, по верованиям якутов, зависит благополучие людей.
 Празднование Ысыаха наполнено глубоким сакральным смыслом и состоит из нескольких обязательных этапов:
 Встреча Солнца: с первыми лучами восходящего солнца люди протягивают к нему руки, как бы набирая в ладони солнечную энергию и тепло на весь предстоящий год. Считалось, что в этот момент открывается граница между миром людей и миром божеств Айыы, и те, кто не участвовал в обряде, теряли небесную силу .
 Обряд благословения Алгыс, который проводит специально приглашенный благословитель (алгысчыт) . Он обращается к небесным божествам и духам местности с древними благословениями на якутском языке, прося ниспослать мир, благополучие и удачу всем собравшимся. 
 Ритуал окропления кумысом: используют ритуальный сосуд чорон, совершает три круга по ходу солнца, окропляя священным напитком небо, землю и огонь . Через этот акт люди вступают в диалог с божествами.
 Ещё одной частью праздника являются Спортивные состязания:
  Хапсагай - национальная борьба .
 Мас-рестлинг -перетягивание палки .
 Кылыы и Ыстанга -национальные прыжки.
 Конные скачки
   
 На Ысыах принято надевать лучшую, часто белую одежду и серебряные украшения. Праздничный костюм символизирует чистоту и защиту от злых сил. Праздничный стол обязательно изобилен. Традиционными блюдами являются отварное мясо (особенно жеребятина), саламат, оладьи, а также кумыс, который подают в больших резных кубках (чоронах).",,ysyakh
День Олонхо,25 ноября,"Олонхо - это общее название древних якутских героических сказаний, которые считаются вершиной устного народного творчества народа саха. В основе сюжетов лежит борьба богатырей из племени айыы со злыми чудовищами абаасы, защита справедливости и мирной жизни, торжество добра над злом.
  
 Средний объём одного сказания - 10-15 тысяч стихотворных строк, крупные доходят до 20 и более тысяч. Начинается Олонхо с пространного описания трёх миров (верхнего, серединного и нижнего), природы и Древа Мира - Аал Луук Мас. Сказители-олонхосуты исполняют эпос без музыкального сопровождения, чередуя речитатив (повествование) и пение (прямую речь персонажей). Каждая группа героев имеет свою тональность. в Олонхо прославляются почитание родителей, супружеская верность, смелость, а осуждаются жадность, корыстолюбие и трусость.
 В Якутии существует два праздника, связанных с эпосом: «зимний» и «летний». 25 ноября отмечают День Олонхо в честь признания ЮНЕСКО. А летом проводится Ысыах Олонхо - большой фестиваль в долине Туймаада.
  
  
 Дата 25 ноября выбрана потому, что именно в этот день в 2005 году на заседании в штаб-квартире ЮНЕСКО в Париже якутский героический эпос Олонхо был признан «Шедевром устного и нематериального культурного наследия человечества».","Всего в 2026 году в рамках Декады провели более 80 мероприятий. 
 Народные театры показывают постановки по мотивам эпоса, мастера открывают выставки традиционной культуры. В Национальной библиотеке проходят тематические книжные выставки и просветительская акция «Диктант Олонхо»",olonkho
День Хомуса,30 ноября,"Хомус – это якутский варган. Интересно, что у каждого народа он имеет своё название: у башкир — кубыз, у вьетнамцев — дан-мой, у румын — дрымба. Дата праздника выбрана неслучайно, именно 30 ноября 1990 года в Якутске открылся Музей и Центр хомуса народов мира. Становление и популяризация хомуса связаны с именем Ивана Егоровича Алексеева (Хомус Уйбаан) — учёный, филолог и энтузиаст, который в 1988 году выдвинул идею создания Музея хомуса и подарил ему свою коллекцию","В День хомуса по всей республике проходят различные мероприятия, главной площадкой которых, конечно, является сам музей хомуса народов мира. В программе — концерты варганной музыки, мастер-классы и выставки",khomus
```

## File: hooks/use-mobile.ts
```typescript
import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}
```

## File: hooks/use-toast.ts
```typescript
'use client'

// Inspired by react-hot-toast library
import * as React from 'react'

import type { ToastActionElement, ToastProps } from '@/components/ui/toast'

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType['ADD_TOAST']
      toast: ToasterToast
    }
  | {
      type: ActionType['UPDATE_TOAST']
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType['DISMISS_TOAST']
      toastId?: ToasterToast['id']
    }
  | {
      type: ActionType['REMOVE_TOAST']
      toastId?: ToasterToast['id']
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: 'REMOVE_TOAST',
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      }

    case 'DISMISS_TOAST': {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      }
    }
    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, 'id'>

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: 'UPDATE_TOAST',
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id })

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  }
}

export { useToast, toast }
```

## File: lib/utils.ts
```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## File: public/data/events.json
```json
[
  {
    "id": "evt-01",
    "name": "День родного языка и письменности",
    "dateLabel": "13 февраля",
    "month": 2,
    "day": 13,
    "description": "Праздник учредили его в 1996 году указом первого президента республики Михаила Николаева Дата выбрана не случайно. 3 февраля – день рождения Семена Андреевича Новгородова (1892–1924). Семен Андреевич - лингвист, уроженец Боотурусского улуса. Он разработал якутский алфавит на основе международного фонетического алфавита, и в 1917 году выпустил первый букварь. До него якутская кириллица не была унифицирована, и большинство населения оставалось неграмотным. Новый алфавит внедрили в школы в 1920–1921 годах, а с 1924 года на него перевели книгоиздание. В 2026 году мероприятия приурочены к Году культуры в Якутии и Году единства народов России.",
    "location": "Конкретного места проведения нет. Праздник из года в год отмечается разными событиями, но все они посвящены памяти родному языку и письменности. В 2026 году был проведен торжественный вечер в Государственном театре оперы и балета и Доме дружбы народов в Якутске, с награждением премиями имени Новгородова и других лингвистов; были проведены «Бараховские чтения» в Верхневилюйском районе. Так же 13 февраля в 2026 году запустили проект «Языковое возрождение: семьи Якутии» с участием лингвиста Дмитрия Петрова. Цель - вовлечь семьи в ежедневное общение на родных языках (юкагирском, эвенском, эвенкийском, долганском)",
    "photo": "saha_alphabet"
  },
  {
    "id": "evt-02",
    "name": "День народного мастера",
    "dateLabel": "5 марта",
    "month": 3,
    "day": 5,
    "description": "Праздник появился в 2012 году по указу президента республики, а в 2026 году его отметили в десятый раз, мероприятия приурочили к Году единства народов России и Году культуры в Якутии. Праздник посвящён мастерам, которые работают с деревом, костью, металлом, берестой, создают национальную одежду и украшения. На сегодня в республике 325 человек носят почётное звание «Народный мастер Республики Саха (Якутия)» и ещё 781 имеют звание «Мастер народных художественных промыслов»",
    "location": "Главное событие - шествие в национальных костюмах. Оно проходит 5 марта в Якутске. В 2026 году в нём участвовали более 1200 человек из 25 районов и столицы",
    "photo": "narodny_master"
  },
  {
    "id": "evt-03",
    "name": "День оленевода",
    "dateLabel": "6 марта",
    "month": 3,
    "day": 6,
    "description": "Этот профессиональный праздник учредили в 2020 году указом главы республики, а отмечать его начали с 2021 года. Основная цель — повысить престиж профессии оленевода, признать его роль как хранителя традиционного образа жизни и промыслов коренных малочисленных народов Севера. На момент празднования в 2026 году в республике насчитывалось 166,7 тысячи голов оленей. Большая часть из них (164,8 тысячи) содержится в сельхозпредприятиях, фермерских хозяйствах и у индивидуальных предпринимателей. Оленеводством занимаются в 20 районах Якутии, включая арктические территории. В отрасли задействованы 107 организаций и 13 фермерских хозяйств, а в составе оленеводческих бригад трудятся 1232 человека, из которых 997 оленеводы и 235 чумработницы",
    "location": "Оленьи гонки - соревнования проводят на упряжках и верхом на оленях.",
    "photo": "den_olenevoda"
  },
  {
    "id": "evt-04",
    "name": "День Арктики",
    "dateLabel": "19 марта",
    "month": 3,
    "day": 19,
    "description": "Для Якутии этот день имеет особое значение. Почти половина территории республики (около 1,6 млн кв. км) относится к Арктической зоне. Сюда входят 13 районов — Абыйский, Аллаиховский, Анабарский, Булунский, Верхнеколымский, Верхоянский, Жиганский, Момский, Нижнеколымский, Оленекский, Среднеколымский, Усть-Янский и Эвено-Бытантайский . До 2019 года в этот список входило лишь пять улусов, но республика добилась расширения зоны указом президента РФ.",
    "location": "",
    "photo": "arktica"
  },
  {
    "id": "evt-05",
    "name": "День охотника",
    "dateLabel": "3 апреля",
    "month": 4,
    "day": 3,
    "description": "В Якутии охота является основой традиционного образа жизни, которая передается из поколения в поколение. У народов Якутии искусство охоты всегда было особо почитаемо, оно часто помогала выжить в периоды, когда скот был истощен. Республика обладает крупнейшей в РФ территорией, пригодной для охоты. Общая площадь охотничьих угодий составляет более 240 млн гектаров (78,1% территории). По состоянию на 20 февраля 2026 года, более 127 тысяч якутян имеют охотничьи билеты. В арсенале охотников зарегистрировано более 165 тысяч единиц оружия, что является одним из самых высоких показателей в стране.",
    "location": "Празднование начинается с традиционных обрядов. В некоторых наслегах, например в Кюпцах, проводят обряд очищения дымом, обряд «Сулганни», поклонение Матери Земле и Духу Огня, а завершают всё хороводным танцем единения",
    "photo": "ohotnik"
  },
  {
    "id": "evt-06",
    "name": "День Республики Саха (Якутия)",
    "dateLabel": "27 апреля",
    "month": 4,
    "day": 27,
    "description": "День Республики - это главный государственный праздник Якутии, который отмечается ежегодно 27 апреля. Это официальный выходной день в регионе.\nПраздник привязан к двум важнейшим историческим событиям, произошедшим в этот день:\n1. Образование Якутской АССР (1922 год).\n2. Принятие Конституции Республики Саха (Якутия) (1992 год)",
    "location": "В 2026 году:\nЕжегодные церемонии и награждения: возложения цветов к памятникам основателям республики . На площади Республики: торжественная церемония вручения паспортов молодым активистам и знаков отличия ГТО.\nКонцерты: На главной площади и в Доме дружбы народов имени А.Е. Кулаковского прошли праздничные концерты «Республика наших сердец» и «Единая Республика» с участием более 20 артистов.\nВыставки: В историческом парке «Россия - Моя история» открылась мультимедийная выставка «Единством сильны», посвященная культуре народов Якутии . На аллее спорткомплекса «Дохсун» состоялась ярмарка мастеров народного творчества",
    "photo": "saha"
  },
  {
    "id": "evt-07",
    "name": "День песни",
    "dateLabel": "21 мая",
    "month": 5,
    "day": 21,
    "description": "Праздник учрежден в 2022 году (в 2025 году впервые был отпразднован) главой республики, и является значимым событием для народов Якутии, так как республика обладает богатейшими вокальными традициями: в Якутии существует 1467 действующих вокальных коллективах при культурно-досуговых учреждениях, в которых занимаются более 18 тысяч человек. Всего в республике насчитывается около 25 тысяч исполнителей. 47 коллективов носят звание народных: 18 хоров и 29 вокальных ансамблей. Два коллектива удостоены звания «Заслуженный коллектив Российской Федерации»: Чепаринский мужской народный хор Чурапчинского района и детский ансамбль «Кэнчээри» из Усть-Алданского района.",
    "location": "В 2025 году площадь Орджоникидзе прошел концерт «Песни, окрыленные Победой!», посвященный 80-летию Победы в Великой Отечественной войне",
    "photo": "penie"
  },
  {
    "id": "evt-08",
    "name": "День сайылыка",
    "dateLabel": "22 мая",
    "month": 5,
    "day": 22,
    "description": "Учреждён указом главы республики в 2018 году. В переводе с якутского «сайылык» означает «летник». Это сезонное поселение, куда семьи скотоводов переезжали на лето, чтобы пасти скот на богатых пастбищах, заготавливать молоко и мясо. Как правило, сайылыки строили подальше от зимовья, ближе к местам с хорошими пастбищами, покосами, ягодными лесами, рыбными озёрами и реками. В короткое якутское лето здесь пасли скот и заготавливали сено и дрова на долгую зиму, а заодно давали отсыревшим за зиму юртам и хотонам просохнуть и проветриться.\nВ старину существовали самые разные поверья: Гадание на ложке, обряд для духа хотона, кормление огня (в первый день на сайте старшие рода бросали в огонь кусочки пищи, прося у духов благословения).\nСегодня по приезде в сайылык по-прежнему устраивают маленький Ысыах: семьи собираются вместе, старшие совершают обряд благословения и благодарят духов за пережитую зиму . Женщины готовят традиционные блюда: оладьи, саламат, утиный суп, обязательно присутствуют кумыс и мясо. Проводятся спортивные состязания: перетягивание палки, бег, борьба хапсагай.",
    "location": "",
    "photo": "saylyk"
  },
  {
    "id": "evt-09",
    "name": "День осуохая",
    "dateLabel": "25 мая",
    "month": 5,
    "day": 25,
    "description": "Осуохай - это якутский национальный круговой танец, который сопровождается хоровым импровизационным пением . Его корни уходят в глубокую древность и связаны с религиозными верованиями древних якутов. Круговые танцы отражали культ солнца, а сакральные пение и движения изначально были восхвалением бога Айыы в образе небесного светила. Участники переплетают пальцы рук и двигаются по кругу по ходу солнца. Тексты песен, воспевают красоту мироздания, просят у божеств благословения и желают всеобщего благоденствия. Интересно, что существует несколько региональных разновидностей осуохая — якутский, усть-алданский, амгинский, олекминский, вилюйский, которые отличаются движениями и исполнением песен. Массовое исполнение осуохая сегодня - это символ сплочения и единения многонационального народа Якутии, торжества светлых начал, мира и добра.",
    "location": "В 2026 году:\nв академическом театре имени П.А. Ойунского состоялось торжественное собрание с участием вице-премьера Сергея Местникова и министра культуры Афанасия Ноева, где вручили награды и благодарственные письма\nМассовый танец, который в 2026 году прошёл на площади Орджоникидзе в Якутске",
    "photo": "osuohai"
  },
  {
    "id": "evt-10",
    "name": "Ысыах (Новый год)",
    "dateLabel": "21 июня",
    "month": 6,
    "day": 21,
    "description": "Древнейший праздник встречи лета и обновления жизни. Слово «Ысыах» происходит от глагола «ыс», что означает «кропить», «окроплять» . Это связано с обрядом праздника -окроплением кумысом, который является священным напитком и символом изобилия. Название напрямую указывает на суть ритуала: жертвенное возлияние небесным божествам Айыы, от которых, по верованиям якутов, зависит благополучие людей.\nПразднование Ысыаха наполнено глубоким сакральным смыслом и состоит из нескольких обязательных этапов:\nВстреча Солнца: с первыми лучами восходящего солнца люди протягивают к нему руки, как бы набирая в ладони солнечную энергию и тепло на весь предстоящий год. Считалось, что в этот момент открывается граница между миром людей и миром божеств Айыы, и те, кто не участвовал в обряде, теряли небесную силу .\nОбряд благословения Алгыс, который проводит специально приглашенный благословитель (алгысчыт) . Он обращается к небесным божествам и духам местности с древними благословениями на якутском языке, прося ниспослать мир, благополучие и удачу всем собравшимся.\nРитуал окропления кумысом: используют ритуальный сосуд чорон, совершает три круга по ходу солнца, окропляя священным напитком небо, землю и огонь . Через этот акт люди вступают в диалог с божествами.\nЕщё одной частью праздника являются Спортивные состязания:\nХапсагай - национальная борьба .\nМас-рестлинг -перетягивание палки .\nКылыы и Ыстанга -национальные прыжки.\nКонные скачки\nНа Ысыах принято надевать лучшую, часто белую одежду и серебряные украшения. Праздничный костюм символизирует чистоту и защиту от злых сил. Праздничный стол обязательно изобилен. Традиционными блюдами являются отварное мясо (особенно жеребятина), саламат, оладьи, а также кумыс, который подают в больших резных кубках (чоронах).",
    "location": "",
    "photo": "ysyakh"
  },
  {
    "id": "evt-11",
    "name": "День Олонхо",
    "dateLabel": "25 ноября",
    "month": 11,
    "day": 25,
    "description": "Олонхо - это общее название древних якутских героических сказаний, которые считаются вершиной устного народного творчества народа саха. В основе сюжетов лежит борьба богатырей из племени айыы со злыми чудовищами абаасы, защита справедливости и мирной жизни, торжество добра над злом.\nСредний объём одного сказания - 10-15 тысяч стихотворных строк, крупные доходят до 20 и более тысяч. Начинается Олонхо с пространного описания трёх миров (верхнего, серединного и нижнего), природы и Древа Мира - Аал Луук Мас. Сказители-олонхосуты исполняют эпос без музыкального сопровождения, чередуя речитатив (повествование) и пение (прямую речь персонажей). Каждая группа героев имеет свою тональность. в Олонхо прославляются почитание родителей, супружеская верность, смелость, а осуждаются жадность, корыстолюбие и трусость.\nВ Якутии существует два праздника, связанных с эпосом: «зимний» и «летний». 25 ноября отмечают День Олонхо в честь признания ЮНЕСКО. А летом проводится Ысыах Олонхо - большой фестиваль в долине Туймаада.\nДата 25 ноября выбрана потому, что именно в этот день в 2005 году на заседании в штаб-квартире ЮНЕСКО в Париже якутский героический эпос Олонхо был признан «Шедевром устного и нематериального культурного наследия человечества».",
    "location": "Всего в 2026 году в рамках Декады провели более 80 мероприятий.\nНародные театры показывают постановки по мотивам эпоса, мастера открывают выставки традиционной культуры. В Национальной библиотеке проходят тематические книжные выставки и просветительская акция «Диктант Олонхо»",
    "photo": "olonkho"
  },
  {
    "id": "evt-12",
    "name": "День Хомуса",
    "dateLabel": "30 ноября",
    "month": 11,
    "day": 30,
    "description": "Хомус – это якутский варган. Интересно, что у каждого народа он имеет своё название: у башкир — кубыз, у вьетнамцев — дан-мой, у румын — дрымба. Дата праздника выбрана неслучайно, именно 30 ноября 1990 года в Якутске открылся Музей и Центр хомуса народов мира. Становление и популяризация хомуса связаны с именем Ивана Егоровича Алексеева (Хомус Уйбаан) — учёный, филолог и энтузиаст, который в 1988 году выдвинул идею создания Музея хомуса и подарил ему свою коллекцию",
    "location": "В День хомуса по всей республике проходят различные мероприятия, главной площадкой которых, конечно, является сам музей хомуса народов мира. В программе — концерты варганной музыки, мастер-классы и выставки",
    "photo": "khomus"
  }
]
```

## File: public/img/.gitkeep
```
# Placeholder for images
# Add your actual images here or the app will use picsum.photos placeholders
```

## File: public/icon.svg
```xml
<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @media (prefers-color-scheme: light) {
      .background { fill: black; }
      .foreground { fill: white; }
    }
    @media (prefers-color-scheme: dark) {
      .background { fill: white; }
      .foreground { fill: black; }
    }
  </style>
  <g clip-path="url(#clip0_7960_43945)">
    <rect class="background" width="180" height="180" rx="37" />
    <g style="transform: scale(95%); transform-origin: center">
      <path class="foreground"
        d="M101.141 53H136.632C151.023 53 162.689 64.6662 162.689 79.0573V112.904H148.112V79.0573C148.112 78.7105 148.098 78.3662 148.072 78.0251L112.581 112.898C112.701 112.902 112.821 112.904 112.941 112.904H148.112V126.672H112.941C98.5504 126.672 86.5638 114.891 86.5638 100.5V66.7434H101.141V100.5C101.141 101.15 101.191 101.792 101.289 102.422L137.56 66.7816C137.255 66.7563 136.945 66.7434 136.632 66.7434H101.141V53Z" />
      <path class="foreground"
        d="M65.2926 124.136L14 66.7372H34.6355L64.7495 100.436V66.7372H80.1365V118.47C80.1365 126.278 70.4953 129.958 65.2926 124.136Z" />
    </g>
  </g>
  <defs>
    <clipPath id="clip0_7960_43945">
      <rect width="180" height="180" fill="white" />
    </clipPath>
  </defs>
</svg>
```

## File: public/placeholder-logo.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="215" height="48" fill="none"><path fill="#000" d="M57.588 9.6h6L73.828 38h-5.2l-2.36-6.88h-11.36L52.548 38h-5.2l10.24-28.4Zm7.16 17.16-4.16-12.16-4.16 12.16h8.32Zm23.694-2.24c-.186-1.307-.706-2.32-1.56-3.04-.853-.72-1.866-1.08-3.04-1.08-1.68 0-2.986.613-3.92 1.84-.906 1.227-1.36 2.947-1.36 5.16s.454 3.933 1.36 5.16c.934 1.227 2.24 1.84 3.92 1.84 1.254 0 2.307-.373 3.16-1.12.854-.773 1.387-1.867 1.6-3.28l5.12.24c-.186 1.68-.733 3.147-1.64 4.4-.906 1.227-2.08 2.173-3.52 2.84-1.413.667-2.986 1-4.72 1-2.08 0-3.906-.453-5.48-1.36-1.546-.907-2.76-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84 0-2.24.427-4.187 1.28-5.84.88-1.68 2.094-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.68 0 3.227.32 4.64.96 1.414.64 2.56 1.56 3.44 2.76.907 1.2 1.454 2.6 1.64 4.2l-5.12.28Zm11.486-7.72.12 3.4c.534-1.227 1.307-2.173 2.32-2.84 1.04-.693 2.267-1.04 3.68-1.04 1.494 0 2.76.387 3.8 1.16 1.067.747 1.827 1.813 2.28 3.2.507-1.44 1.294-2.52 2.36-3.24 1.094-.747 2.414-1.12 3.96-1.12 1.414 0 2.64.307 3.68.92s1.84 1.52 2.4 2.72c.56 1.2.84 2.667.84 4.4V38h-4.96V25.92c0-1.813-.293-3.187-.88-4.12-.56-.96-1.413-1.44-2.56-1.44-.906 0-1.68.213-2.32.64-.64.427-1.133 1.053-1.48 1.88-.32.827-.48 1.84-.48 3.04V38h-4.56V25.92c0-1.2-.133-2.213-.4-3.04-.24-.827-.626-1.453-1.16-1.88-.506-.427-1.133-.64-1.88-.64-.906 0-1.68.227-2.32.68-.64.427-1.133 1.053-1.48 1.88-.32.827-.48 1.827-.48 3V38h-4.96V16.8h4.48Zm26.723 10.6c0-2.24.427-4.187 1.28-5.84.854-1.68 2.067-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.84 0 3.494.413 4.96 1.24 1.467.827 2.64 2.08 3.52 3.76.88 1.653 1.347 3.693 1.4 6.12v1.32h-15.08c.107 1.813.614 3.227 1.52 4.24.907.987 2.134 1.48 3.68 1.48.987 0 1.88-.253 2.68-.76a4.803 4.803 0 0 0 1.84-2.2l5.08.36c-.64 2.027-1.84 3.64-3.6 4.84-1.733 1.173-3.733 1.76-6 1.76-2.08 0-3.906-.453-5.48-1.36-1.573-.907-2.786-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84Zm15.16-2.04c-.213-1.733-.76-3.013-1.64-3.84-.853-.827-1.893-1.24-3.12-1.24-1.44 0-2.6.453-3.48 1.36-.88.88-1.44 2.12-1.68 3.72h9.92ZM163.139 9.6V38h-5.04V9.6h5.04Zm8.322 7.2.24 5.88-.64-.36c.32-2.053 1.094-3.56 2.32-4.52 1.254-.987 2.787-1.48 4.6-1.48 2.32 0 4.107.733 5.36 2.2 1.254 1.44 1.88 3.387 1.88 5.84V38h-4.96V25.92c0-1.253-.12-2.28-.36-3.08-.24-.8-.64-1.413-1.2-1.84-.533-.427-1.253-.64-2.16-.64-1.44 0-2.573.48-3.4 1.44-.8.933-1.2 2.307-1.2 4.12V38h-4.96V16.8h4.48Zm30.003 7.72c-.186-1.307-.706-2.32-1.56-3.04-.853-.72-1.866-1.08-3.04-1.08-1.68 0-2.986.613-3.92 1.84-.906 1.227-1.36 2.947-1.36 5.16s.454 3.933 1.36 5.16c.934 1.227 2.24 1.84 3.92 1.84 1.254 0 2.307-.373 3.16-1.12.854-.773 1.387-1.867 1.6-3.28l5.12.24c-.186 1.68-.733 3.147-1.64 4.4-.906 1.227-2.08 2.173-3.52 2.84-1.413.667-2.986 1-4.72 1-2.08 0-3.906-.453-5.48-1.36-1.546-.907-2.76-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84 0-2.24.427-4.187 1.28-5.84.88-1.68 2.094-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.68 0 3.227.32 4.64.96 1.414.64 2.56 1.56 3.44 2.76.907 1.2 1.454 2.6 1.64 4.2l-5.12.28Zm11.443 8.16V38h-5.6v-5.32h5.6Z"/><path fill="#171717" fill-rule="evenodd" d="m7.839 40.783 16.03-28.054L20 6 0 40.783h7.839Zm8.214 0H40L27.99 19.894l-4.02 7.032 3.976 6.914H20.02l-3.967 6.943Z" clip-rule="evenodd"/></svg>
```

## File: public/placeholder.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" fill="none"><rect width="1200" height="1200" fill="#EAEAEA" rx="3"/><g opacity=".5"><g opacity=".5"><path fill="#FAFAFA" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/></g><path stroke="url(#a)" stroke-width="2.418" d="M0-1.209h553.581" transform="scale(1 -1) rotate(45 1163.11 91.165)"/><path stroke="url(#b)" stroke-width="2.418" d="M404.846 598.671h391.726"/><path stroke="url(#c)" stroke-width="2.418" d="M599.5 795.742V404.017"/><path stroke="url(#d)" stroke-width="2.418" d="m795.717 796.597-391.441-391.44"/><path fill="#fff" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/><g clip-path="url(#e)"><path fill="#666" fill-rule="evenodd" d="M616.426 586.58h-31.434v16.176l3.553-3.554.531-.531h9.068l.074-.074 8.463-8.463h2.565l7.18 7.181V586.58Zm-15.715 14.654 3.698 3.699 1.283 1.282-2.565 2.565-1.282-1.283-5.2-5.199h-6.066l-5.514 5.514-.073.073v2.876a2.418 2.418 0 0 0 2.418 2.418h26.598a2.418 2.418 0 0 0 2.418-2.418v-8.317l-8.463-8.463-7.181 7.181-.071.072Zm-19.347 5.442v4.085a6.045 6.045 0 0 0 6.046 6.045h26.598a6.044 6.044 0 0 0 6.045-6.045v-7.108l1.356-1.355-1.282-1.283-.074-.073v-17.989h-38.689v23.43l-.146.146.146.147Z" clip-rule="evenodd"/></g><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/></g><defs><linearGradient id="a" x1="554.061" x2="-.48" y1=".083" y2=".087" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="796.912" x2="404.507" y1="599.963" y2="599.965" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="c" x1="600.792" x2="600.794" y1="403.677" y2="796.082" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="d" x1="404.85" x2="796.972" y1="403.903" y2="796.02" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><clipPath id="e"><path fill="#fff" d="M581.364 580.535h38.689v38.689h-38.689z"/></clipPath></defs></svg>
```

## File: scripts/csv-to-events.js
```javascript
// scripts/csv-to-events.js
// Конвертация data/events.csv -> public/data/events.json.
// Запуск:  node scripts/csv-to-events.js
// (по умолчанию читает data/events.csv, пишет public/data/events.json)

const fs = require('fs');
const path = require('path');

const CSV_PATH = process.argv[2] || path.join(__dirname, '../data/events.csv');
const OUT_PATH = process.argv[3] || path.join(__dirname, '../public/data/events.json');

// --- Парсер CSV (RFC4180: кавычки, экранированные кавычки, переводы строк внутри ячеек) ---
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\r') { /* skip */ }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else field += c;
    }
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}

// Индексы колонок (5-я колонка — базовое имя файла фото, напр. "ysyakh")
const COL = { name: 0, date: 1, description: 2, location: 3, photo: 4 };

// Русские месяцы -> номер
const MONTHS = {
  'января': 1, 'февраля': 2, 'марта': 3, 'апреля': 4, 'мая': 5, 'июня': 6,
  'июля': 7, 'августа': 8, 'сентября': 9, 'октября': 10, 'ноября': 11, 'декабря': 12,
};

// "13 февраля" -> { day: 13, month: 2 }
function parseRuDate(s) {
  const m = String(s).trim().toLowerCase().match(/(\d{1,2})\s+([а-яё]+)/);
  if (!m) return { day: null, month: null };
  return { day: parseInt(m[1], 10), month: MONTHS[m[2]] || null };
}

// Аккуратная очистка многострочного текста: обрезаем пробелы у строк,
// убираем пустые строки, схлопываем двойные пробелы. Переносы строк сохраняем
// (для читаемых абзацев/списков в модальном окне).
function cleanMultiline(s) {
  return String(s || '')
    .replace(/\r/g, '')
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trim())
    .filter((line) => line.length > 0)
    .join('\n')
    .trim();
}

// --- Основной прогон ---
const raw = fs.readFileSync(CSV_PATH, 'utf8');
const rows = parseCSV(raw).filter((r) => (r[COL.name] || '').trim() !== '');
rows.shift(); // заголовок

const events = rows.map((r, idx) => {
  const name = (r[COL.name] || '').trim();
  const dateRaw = (r[COL.date] || '').trim();
  const { day, month } = parseRuDate(dateRaw);
  return {
    id: 'evt-' + String(idx + 1).padStart(2, '0'),
    name,
    dateLabel: dateRaw,           // "13 февраля" — для показа в модальном окне
    month,                        // 1..12 — для сортировки/формата DD.MM
    day,                          // 1..31
    description: cleanMultiline(r[COL.description]),
    location: cleanMultiline(r[COL.location]),
    photo: (r[COL.photo] || '').trim(),  // базовое имя файла фото (без расширения); файл кладётся в public/img/events/<photo>.jpg
  };
});

fs.writeFileSync(OUT_PATH, JSON.stringify(events, null, 2), 'utf8');

console.log(`\n✅ Готово: ${events.length} событий -> ${path.relative(process.cwd(), OUT_PATH)}`);
const noDate = events.filter((e) => !e.month || !e.day);
if (noDate.length) {
  console.log(`\n⚠️  Не удалось разобрать дату (${noDate.length}):`);
  noDate.forEach((e) => console.log(`  ${e.id}  "${e.name}"  ("${e.dateLabel}")`));
}
```

## File: scripts/csv-to-objects.js
```javascript
// scripts/csv-to-objects.js
// Одноразовая конвертация таблицы "Таблица на карту - Лист1.csv" в public/data/objects.json.
// Новая модель данных: текст-по-категориям доступности (а не булевы галочки).

const fs = require('fs');
const path = require('path');

const CSV_PATH =
  process.argv[2] ||
  path.join(process.env.USERPROFILE || process.env.HOME, 'Downloads', 'Таблица на карту - Лист1.csv');
const OUT_PATH = process.argv[3] || path.join(__dirname, '../public/data/objects.json');
const OLD_JSON_PATH = path.join(__dirname, '../public/data/objects.json');

// --- Парсер CSV (RFC4180: кавычки, экранированные кавычки, переводы строк внутри ячеек) ---
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\r') { /* skip */ }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else field += c;
    }
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}

// Индексы колонок в таблице
const COL = {
  name: 0, type: 1, address: 2, description: 3, workingHours: 4,
  mobility: 5, vision_impaired: 6, hearing_impaired: 7, deaf_mute: 8,
  dietary: 9, cardiovascular: 10, respiratory: 11, mental: 12,
  family: 13, ethnomedicine: 14, health: 15,
  contraindications: 16, tickets: 17, benefits: 18,
  website: 19, phone: 20, yandexMap: 21, coordinates: 22, notes: 23,
};

// Ключи доступности (совпадают с id слоёв/фильтров на карте)
const ACCESS_KEYS = [
  'mobility', 'vision_impaired', 'hearing_impaired', 'deaf_mute',
  'dietary', 'cardiovascular', 'respiratory', 'mental',
  'family', 'ethnomedicine', 'health',
];

// Категория ("Тип организации" -> слаг с иконкой). Порядок важен.
const CATEGORY_RULES = [
  [/театр|филармони|эстрад/i, 'theater'],
  [/цирк/i, 'entertainment'],
  [/зоопарк/i, 'nature'],
  [/ресторан/i, 'restaurant'],
  [/кофейн|кафе/i, 'cafe'],
  [/медицин|реабилитац|диспансер|больниц|оздоровительн|поликлиник/i, 'medical'],
  // Музей проверяем раньше "образования": в типах вроде "Музей, культурно-образовательный..."
  // и "музейный комплекс" ключевым является музейная функция.
  [/музей|сокровищниц|галере|выставочн|хомус/i, 'museum'],
  [/университет|образовательн|коррекционн|школ|институт/i, 'education'],
  [/туристическ|усадьба|база отдыха|старый город/i, 'entertainment'],
  [/дом дружбы|национальн|культурно|прикладн/i, 'culture'],
  [/историческ|этнографическ/i, 'culture'],
];
function detectCategory(type) {
  const t = (type || '').toLowerCase();
  for (const [re, slug] of CATEGORY_RULES) if (re.test(t)) return slug;
  return 'culture';
}

// Очистка ячейки
function clean(s) {
  return (s || '').replace(/\r/g, '').trim();
}

// Однострочная очистка (для названия/адреса — схлопываем переносы строк)
function oneLine(s) {
  return clean(s).replace(/\s*\n\s*/g, ' ').replace(/\s+/g, ' ').trim();
}

// Пустая/незначимая ячейка?
function isEmptyCell(s) {
  const v = clean(s).toLowerCase();
  return v === '' || v === '-' || v === '—' || v === 'ь' || v === 'нет' || v === 'н/д';
}

// Отрицательная (не является реальной "фичей" для фильтра, но текст можно показать)
function isNonFeature(s) {
  const v = clean(s).toLowerCase();
  return (
    v.startsWith('профильного отделения нет') ||
    v.startsWith('медицинское учреждение. профильного отделения нет') ||
    v.startsWith('не оказывает народную медицину') ||
    v.startsWith('специальных программ нет') ||
    v.startsWith('не предназначено') ||
    v === 'государственное учреждение'
  );
}

// Координаты: из ячейки координат, иначе из ссылки Яндекса (ll=lon,lat)
function parseCoordinates(coordCell, yandexCell) {
  const m = clean(coordCell).match(/(-?\d{1,3}\.\d{3,})\s*,\s*(-?\d{1,3}\.\d{3,})/);
  if (m) return [parseFloat(m[1]), parseFloat(m[2])];
  const ll = clean(yandexCell).match(/ll=(-?\d{1,3}\.\d+)(?:%2C|,)(-?\d{1,3}\.\d+)/i);
  if (ll) return [parseFloat(ll[2]), parseFloat(ll[1])]; // ll = lon,lat -> [lat, lon]
  return null;
}

// URL или пусто
function asUrl(s) {
  const v = clean(s);
  if (!v) return undefined;
  if (/^https?:\/\//i.test(v)) return v;
  if (/^www\./i.test(v)) return 'https://' + v;
  return undefined; // текстовое название без ссылки — не используем как href
}

// Телефон: берём первую строку, убираем ведущую подпись ("Телефон:", "тел.:" и т.п.)
function asPhone(s) {
  const v = clean(s);
  if (!v) return undefined;
  const first = v.split(/\n/)[0].trim();
  const stripped = first.replace(/^\s*(телефон[ыа]?|тел\.?|моб\.?|контакты?|номер)\s*:?\s*/i, '').trim();
  return (stripped || first) || undefined;
}

// --- Перенос фото из старого objects.json по совпадению названий ---
function normalizeName(s) {
  return clean(s).toLowerCase().replace(/[«»"'().,]/g, ' ').replace(/\s+/g, ' ').trim();
}
// Частые слова названий, по которым нельзя надёжно сопоставлять объекты
const STOP = new Set([
  'республики', 'республиканский', 'саха', 'якутия', 'якутии', 'якутск', 'якутский',
  'государственный', 'государственное', 'государственная', 'национальный', 'национального',
  'национальная', 'центр', 'центра', 'музей', 'музея', 'имени', 'народов', 'народного',
  'культуры', 'россии', 'комплекс', 'учреждение', 'бюджетное', 'город', 'история', 'истории',
]);
function tokens(s) {
  return normalizeName(s).split(' ').filter((w) => w.length >= 5 && !STOP.has(w));
}
function buildPhotoMatcher() {
  let old = [];
  try { old = JSON.parse(fs.readFileSync(OLD_JSON_PATH, 'utf8')); } catch { old = []; }
  const entries = old
    .filter((o) => Array.isArray(o.photos) && o.photos.length)
    .map((o) => ({ name: o.name, tok: new Set(tokens(o.name)), photos: o.photos }));
  return function matchPhotos(newName) {
    const nt = new Set(tokens(newName));
    let best = null, bestScore = 0;
    for (const e of entries) {
      let score = 0;
      for (const w of nt) if (e.tok.has(w)) score++;
      if (score > bestScore) { bestScore = score; best = e; }
    }
    return bestScore >= 1 ? { photos: best.photos, from: best.name } : null;
  };
}

// --- Основной прогон ---
const raw = fs.readFileSync(CSV_PATH, 'utf8');
const rows = parseCSV(raw).filter((r) => clean(r[COL.name]) !== '');
const header = rows.shift(); // заголовок
const matchPhotos = buildPhotoMatcher();

const objects = [];
const missingCoords = [];
const photoReport = [];

rows.forEach((r, idx) => {
  const name = oneLine(r[COL.name]);
  const id = 'obj-' + String(idx + 1).padStart(2, '0');
  const category = detectCategory(r[COL.type]);

  const accessibility = {};
  const layers = ['inclusive'];
  for (const key of ACCESS_KEYS) {
    const cell = clean(r[COL[key]]);
    if (isEmptyCell(cell)) continue;
    // Текст доступности — в одну строку (переносы из таблицы схлопываем)
    accessibility[key] = oneLine(cell);
    if (!isNonFeature(cell)) layers.push(key);
  }

  const coordinates = parseCoordinates(r[COL.coordinates], r[COL.yandexMap]);
  if (!coordinates) missingCoords.push(`${id}  ${name}`);

  const photoMatch = matchPhotos(name);
  const photos = photoMatch ? photoMatch.photos : [];
  if (photoMatch) photoReport.push(`${id}  "${name}"  <=  "${photoMatch.from}"`);

  const contacts = {};
  const phone = asPhone(r[COL.phone]);
  const website = asUrl(r[COL.website]);
  const yandexMap = asUrl(r[COL.yandexMap]);
  if (phone) contacts.phone = phone;
  if (website) contacts.website = website;
  if (yandexMap) contacts.yandexMap = yandexMap;

  const obj = { id, name, category, layers, coordinates };
  const address = oneLine(r[COL.address]);
  const workingHours = clean(r[COL.workingHours]);
  const description = clean(r[COL.description]);
  const contraindications = clean(r[COL.contraindications]);
  const tickets = clean(r[COL.tickets]);
  const benefits = clean(r[COL.benefits]);
  const notes = clean(r[COL.notes]);

  if (address) obj.address = address;
  if (workingHours) obj.workingHours = workingHours;
  obj.description = description;
  obj.accessibility = accessibility;
  if (contraindications && !isEmptyCell(contraindications)) obj.contraindications = contraindications;
  if (tickets && !isEmptyCell(tickets)) obj.tickets = tickets;
  if (benefits && !isEmptyCell(benefits)) obj.benefits = benefits;
  if (notes && !isEmptyCell(notes)) obj.notes = notes;
  obj.photos = photos;
  obj.contacts = contacts;

  objects.push(obj);
});

fs.writeFileSync(OUT_PATH, JSON.stringify(objects, null, 2), 'utf8');

console.log(`\nГотово: ${objects.length} объектов -> ${path.relative(process.cwd(), OUT_PATH)}`);
console.log(`\nПеренос фото (${photoReport.length}):`);
photoReport.forEach((l) => console.log('  ' + l));
console.log(`\n!Нет координат (${missingCoords.length}) — впишите вручную в objects.json:`);
missingCoords.forEach((l) => console.log('  ' + l));
```

## File: scripts/update-photo.js
```javascript
// scripts/generate-github-links.js
const fs = require('fs');
const path = require('path');

// === НАСТРОЙКИ ===
const GITHUB_USERNAME = 'asyakhar';
const REPO_NAME = 'yakutia-images';
const BRANCH = 'main';

// Путь к objects.json в вашем проекте
const OBJECTS_JSON_PATH = path.join(__dirname, '../public/data/objects.json');

// === СООТВЕТСТВИЕ ID → ПАПКИ (ВСЕ 31 ОБЪЕКТ) ===
const ID_MAPPING = {
  // Музеи
  "obj-01": "museum/arheology-etno-museum",
  "obj-03": "museum/mammoth-museum",
  "obj-04": "museum/treasury",
  "obj-05": "museum/yaroslavsky-museum",
  "obj-08": "museum/khomus-museum",
  "obj-09": "museum/national-art-museum",
  "obj-24": "museum/foreign-art-gallery",
  "obj-28": "museum/music-museum",

  // Театры
  "obj-16": "theater/opera-theater",
  "obj-17": "theater/sakha-theater",
  "obj-18": "theater/philharmonic",
  "obj-19": "theater/estrada-theater",
  "obj-30": "theater/circus",

  // Туристические комплексы
  "obj-02": "tourism/permafrost-kingdom",
  "obj-07": "tourism/old-town",
  "obj-10": "tourism/atlasov-estate",
  "obj-11": "tourism/simekh",
  "obj-23": "tourism/history-park",
  "obj-29": "tourism/friendship-house",

  // Медицина
  "obj-13": "health/medical-center",
  "obj-14": "health/yarmiac",
  "obj-15": "health/oncology-center",
  "obj-20": "health/raduga-center",
  "obj-21": "health/rehabilitation-center",

  // Образование
  "obj-06": "education/permafrost-institute",
  "obj-12": "education/svfu",
  "obj-22": "education/adaptive-school",

  // Рестораны и кафе
  "obj-25": "food/avrora-restaurant",
  "obj-26": "food/green-city-restaurant",
  "obj-27": "food/coffeeshop-company",

  // Природа
  "obj-31": "nature/orto-doydu-zoo",
};

// === КАКИЕ ФАЙЛЫ ЕСТЬ В ПАПКЕ (вы указываете вручную) ===
// Если вы знаете, какие файлы есть в каждой папке на GitHub
const PHOTO_FILES = {
  "museum/arheology-etno-museum": ["main.jpg"],
  "museum/mammoth-museum": ["main.jpeg"],
  "museum/treasury": ["main.jpg"],
  "museum/yaroslavsky-museum": ["main.jpg"],
  "museum/khomus-museum": ["main.jpg"],
  "museum/national-art-museum": ["main.jpg"],
  "museum/foreign-art-gallery": ["main.jpeg"],
  "museum/music-museum": ["main.jpg"],
  "theater/opera-theater": ["main.jpg"],
  "theater/sakha-theater": ["main.jpg"],
  "theater/philharmonic": ["main.png"],
  "theater/estrada-theater": ["main.jpeg"],
  "theater/circus": ["main.jpg"],
  "tourism/permafrost-kingdom": ["main.jpg"],
  "tourism/old-town": ["main.jpeg"],
  "tourism/atlasov-estate": ["main.jpg"],
  "tourism/simekh": ["main.jpg"],
  "tourism/history-park": ["main.jpg"],
  "tourism/friendship-house": ["main.jpeg"],
  "health/medical-center": ["main.jpg"],
  "health/yarmiac": ["main.jpeg"],
  "health/oncology-center": ["main.jpeg"],
  "health/raduga-center": ["main.jpg"],
  "health/rehabilitation-center": ["main.jpeg"],
  "education/permafrost-institute": ["main.jpg"],
  "education/svfu": ["main.jpg"],
  "education/adaptive-school": ["main.jpg"],
  "food/avrora-restaurant": ["main.jpeg"],
  "food/green-city-restaurant": ["main.jpeg"],
  "food/coffeeshop-company": ["main.jpeg"],
  "nature/orto-doydu-zoo": ["main.jpg"],
};

function getGitHubRawUrl(folderPath, filename) {
  return `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/${BRANCH}/${folderPath}/${filename}`;
}

async function main() {
  console.log('🚀 Начинаем генерацию ссылок на GitHub...');
  
  if (!fs.existsSync(OBJECTS_JSON_PATH)) {
    console.error(`❌ objects.json не найден: ${OBJECTS_JSON_PATH}`);
    return;
  }
  
  const objects = JSON.parse(fs.readFileSync(OBJECTS_JSON_PATH, 'utf8'));
  console.log(`📄 Найдено ${objects.length} объектов в objects.json`);
  
  let updatedCount = 0;
  let totalObjects = objects.length;
  
  for (const obj of objects) {
    const folderPath = ID_MAPPING[obj.id];
    
    if (!folderPath) {
      console.log(`⚠️ Нет соответствия для ${obj.id} (${obj.name}), пропускаем`);
      continue;
    }
    
    const files = PHOTO_FILES[folderPath] || [];
    
    if (files.length === 0) {
      console.log(`⚠️ Нет файлов для ${obj.id} (${obj.name}) в папке ${folderPath}`);
      continue;
    }
    
    const newPhotos = files.map(file => getGitHubRawUrl(folderPath, file));
    obj.photos = newPhotos;
    updatedCount++;
    console.log(`✅ ${obj.id} (${obj.name}): ${newPhotos.length} фото`);
  }
  
  fs.writeFileSync(OBJECTS_JSON_PATH, JSON.stringify(objects, null, 2));
  console.log(`\n🎉 Готово! Обновлено ${updatedCount} объектов из ${totalObjects}`);
}

main().catch(console.error);
```

## File: .gitignore
```
# v0 sandbox internal files
__v0_runtime_loader.js
__v0_devtools.tsx
__v0_jsx-dev-runtime.ts
.snowflake/
.v0-trash/
.vercel/

# Environment variables
.env*.local

# Common ignores
node_modules
.next/
.DS_Store
.vercel
```

## File: components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

## File: next.config.prod.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Включает экспорт статического HTML
  basePath: '/site-test-map', // Указывает имя вашего репозитория для путей страниц
  images: {
    unoptimized: true,  // GitHub Pages не поддерживает оптимизацию изображений Next.js
  },
  trailingSlash: true,  // Рекомендуется для GitHub Pages
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
```

## File: postcss.config.mjs
```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
```

## File: app/map/page.tsx
```typescript
"use client"

import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
// Удаляем импорт Header
// import Header from "@/components/AppHeader"

const AccessibleYakutiaMap = dynamic(
  () => import("@/components/accessible-yakutia-map"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen w-full items-center justify-center bg-[var(--color-bg-primary)]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[var(--color-accent)] border-t-transparent" />
          <p className="text-lg text-[var(--color-text-primary)]">Загрузка карты...</p>
        </div>
      </div>
    ),
  }
)

export default function MapPage() {
  const router = useRouter()

  const handlePlaceSelect = (id: string) => {
    router.push(`/place/${id}`)
  }

  return (
    // Убираем flex-col и Header, карта должна занимать весь экран
    <div className="h-screen w-full overflow-hidden bg-[var(--color-bg-primary)]">
      <AccessibleYakutiaMap onPlaceSelect={handlePlaceSelect} />
    </div>
  )
}
```

## File: components/UpcomingEvents.tsx
```typescript
"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface EventItem {
  id: string;
  name: string;
  dateLabel: string;
  month: number | null;
  day: number | null;
  description: string;
  location: string;
  /** Базовое имя файла фото (без расширения); файл в public/img/events/<photo>.jpg */
  photo: string;
}

// month/day -> "13.02"
function shortDate(e: EventItem): string {
  if (!e.month || !e.day) return "";
  return `${String(e.day).padStart(2, "0")}.${String(e.month).padStart(2, "0")}`;
}

// Сортировка по кругу от сегодняшней даты: сначала ближайшие предстоящие,
// затем — по хронологии дальше (годовые праздники повторяются каждый год).
function sortUpcomingFirst(events: EventItem[]): EventItem[] {
  const now = new Date();
  const todayKey = (now.getMonth() + 1) * 100 + now.getDate();
  const score = (e: EventItem) => {
    if (!e.month || !e.day) return Number.MAX_SAFE_INTEGER; // без даты — в конец
    const k = e.month * 100 + e.day;
    return k >= todayKey ? k : k + 1300; // прокрутка на следующий год
  };
  return [...events].sort((a, b) => score(a) - score(b));
}

export default function UpcomingEvents() {
  const basePath = process.env.NODE_ENV === "production" ? "/site-test-map" : "";
  const [events, setEvents] = useState<EventItem[]>([]);
  const [selected, setSelected] = useState<EventItem | null>(null);

  useEffect(() => {
    fetch(`${basePath}/data/events.json`)
      .then((res) => (res.ok ? res.json() : Promise.reject(`HTTP ${res.status}`)))
      .then((data: EventItem[]) => setEvents(data))
      .catch((err) => console.error("Error loading events:", err));
  }, [basePath]);

  const sorted = useMemo(() => sortUpcomingFirst(events), [events]);

  if (events.length === 0) return null;

  return (
    <>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="-ml-4">
          {sorted.map((event) => (
            <CarouselItem key={event.id} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
              <div className="relative aspect-[11/10] overflow-hidden rounded-3xl shadow-md">
                {/* Фото события (public/img/events/<photo>.jpg); пока файла нет — заглушка */}
                <img
  src={event.photo ? `https://raw.githubusercontent.com/asyakhar/yakutia-images/e0c4feb0ec5f84087a12417ce81037948d9c9561/events/${event.photo}.jpg` : `${basePath}/img/placeholder.jpg`}
  alt=""
  className="w-full h-full object-cover"
  onError={(e) => {
    e.currentTarget.src = `${basePath}/img/placeholder.jpg`;
  }}
/>
                {/* Затемнение фото + градиент снизу для читаемости текста */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Дата — сверху справа */}
                <span className="absolute top-4 right-4 text-2xl md:text-3xl font-extrabold text-white drop-shadow-md">
                  {shortDate(event)}
                </span>

                {/* Название + кнопка — снизу */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-md line-clamp-2">
                    {event.name}
                  </h3>
                  <button
                    onClick={() => setSelected(event)}
                    className="mt-3 inline-flex items-center rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#1B3A5C] shadow hover:bg-white transition-colors"
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-4" />
        <CarouselNext className="hidden sm:flex -right-4" />
      </Carousel>

      {/* Модальное окно с подробной информацией (как в «Практических советах») */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-[var(--color-bg-white)] border-[var(--color-card-border)] p-0 gap-0 dark-contrast:bg-black dark-contrast:text-white dark-contrast:border-gray-700">
          {selected && (
            <>
              <DialogHeader className="p-6 md:p-8 border-b bg-[var(--color-accent-light)]/40 dark-contrast:bg-gray-900 text-left space-y-2">
                <div className="flex items-center gap-2 text-[var(--color-accent-dark)] dark-contrast:text-white font-semibold">
                  <CalendarDays className="size-5" />
                  <span>{selected.dateLabel}</span>
                </div>
                <DialogTitle className="font-sangha text-3xl md:text-4xl text-[var(--color-text-primary)] dark-contrast:text-white leading-tight">
                  {selected.name}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Подробная информация о празднике: {selected.name}
                </DialogDescription>
              </DialogHeader>

              <div className="p-6 md:p-8 space-y-6">
                {selected.description && (
                  <div>
                    <h3 className="font-bold text-lg text-[var(--color-green-dark)] dark-contrast:text-white mb-2">
                      О празднике
                    </h3>
                    <p className="text-[var(--color-text-primary)] dark-contrast:text-gray-200 leading-relaxed whitespace-pre-line">
                      {selected.description}
                    </p>
                  </div>
                )}
                {selected.location && (
                  <div>
                    <h3 className="font-bold text-lg text-[var(--color-green-dark)] dark-contrast:text-white mb-2 flex items-center gap-2">
                      <MapPin className="size-5 text-[var(--color-accent)]" />
                      Где и как отмечают
                    </h3>
                    <p className="text-[var(--color-text-primary)] dark-contrast:text-gray-200 leading-relaxed whitespace-pre-line">
                      {selected.location}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
```

## File: lib/fetchObjects.ts
```typescript
import fs from 'fs';
import path from 'path';

export interface MapObject {
  id: string;
  name: string;
  category: string;
  layers: string[];
  /** [широта, долгота]; null, если координаты не заданы (не показывается на карте) */
  coordinates: [number, number] | null;
  address?: string;
  workingHours?: string;
  description: string;
  /** Текст по категориям доступности; ключи совпадают с id слоёв/фильтров */
  accessibility: Record<string, string>;
  contraindications?: string;
  tickets?: string;
  benefits?: string;
  notes?: string;
  photos: string[];
  contacts: {
    phone?: string;
    website?: string;
    yandexMap?: string;
  };
}

export async function fetchObjects(): Promise<MapObject[]> {
  // Просто читаем файл напрямую — работает и в dev, и в production
  const filePath = path.join(process.cwd(), 'public', 'data', 'objects.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}
```

## File: public/img/uzor.svg
```xml
<svg width="1922" height="52" viewBox="0 0 1922 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.5836 44.4833L25.0393 37.4833M16.2502 12.7339C19.0934 14.4088 21.4217 16.3422 23.3149 18.6499C25.6254 21.4664 27.2877 24.8405 28.4464 28.9833C29.6414 33.2554 30.3009 38.3449 30.5836 44.4833C23.7026 43.2675 18.4576 41.488 14.4169 38.8476C12.0099 37.2748 10.0302 35.3965 8.38651 33.1499M0.750244 6.81662L10.1227 18.6499M16.2502 12.7339C14.4265 11.6594 12.391 10.6913 10.1227 9.79885C7.35723 8.71082 4.24578 7.73524 0.750244 6.81662C1.23925 11.2325 1.8176 15.1585 2.56581 18.6499C3.12828 21.2746 3.78674 23.6538 4.5754 25.8109C5.60067 28.6152 6.84599 31.0443 8.38651 33.1499M25.0393 37.4833L14.4169 38.8476M25.0393 37.4833L20.4191 31.6499M25.0393 37.4833L28.4464 28.9833M20.4191 31.6499L8.38651 33.1499M20.4191 31.6499L15.0069 24.8166M20.4191 31.6499L23.3149 18.6499M15.0069 24.8166L4.5754 25.8109M15.0069 24.8166L10.1227 18.6499M15.0069 24.8166L16.2502 12.7339M10.1227 18.6499H2.56581M10.1227 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M30.4165 44.4837L35.9917 37.4837M44.8299 12.7343C41.9709 14.4093 39.6295 16.3426 37.7258 18.6504C35.4024 21.4668 33.7308 24.8409 32.5656 28.9837C31.364 33.2558 30.7008 38.3453 30.4165 44.4837C37.336 43.2679 42.6102 41.4884 46.6735 38.848M60.4165 6.81702L50.9917 18.6504M0.41652 6.81702H60.4165C59.9248 11.2329 59.3432 15.1589 58.5908 18.6504C58.0252 21.2751 57.363 23.6542 56.57 25.8113C55.539 28.6157 54.2867 31.0448 52.7376 33.1504M44.8299 12.7343C46.6638 11.6598 48.7107 10.6917 50.9917 9.79926C53.7726 8.71123 56.9014 7.73565 60.4165 6.81702M35.9917 37.4837L46.6735 38.848M35.9917 37.4837L40.6377 31.6504M35.9917 37.4837L32.5656 28.9837M46.6735 38.848C49.094 37.2752 51.0847 35.3969 52.7376 33.1504M40.6377 31.6504L52.7376 33.1504M40.6377 31.6504L46.0802 24.817M40.6377 31.6504L37.7258 18.6504M46.0802 24.817L56.57 25.8113M46.0802 24.817L50.9917 18.6504M46.0802 24.817L44.8299 12.7343M50.9917 18.6504H58.5908M50.9917 18.6504V9.79926M0.41652 0.650359H60.4165M0.41652 44.4837H60.4165M60.4165 50.817H0.41652" stroke="#7F715A" stroke-width="1.3"/>
<path d="M30.5836 44.4833L25.0393 37.4833M16.2502 12.7339C19.0934 14.4088 21.4217 16.3422 23.3149 18.6499C25.6254 21.4664 27.2877 24.8405 28.4464 28.9833C29.6414 33.2554 30.3009 38.3449 30.5836 44.4833C23.7026 43.2675 18.4576 41.488 14.4169 38.8476C12.0099 37.2748 10.0302 35.3965 8.38651 33.1499M0.750244 6.81662L10.1227 18.6499M16.2502 12.7339C14.4265 11.6594 12.391 10.6913 10.1227 9.79885C7.35723 8.71082 4.24578 7.73524 0.750244 6.81662C1.23925 11.2325 1.8176 15.1585 2.56581 18.6499C3.12828 21.2746 3.78674 23.6538 4.5754 25.8109C5.60067 28.6152 6.84599 31.0443 8.38651 33.1499M25.0393 37.4833L14.4169 38.8476M25.0393 37.4833L20.4191 31.6499M25.0393 37.4833L28.4464 28.9833M20.4191 31.6499L8.38651 33.1499M20.4191 31.6499L15.0069 24.8166M20.4191 31.6499L23.3149 18.6499M15.0069 24.8166L4.5754 25.8109M15.0069 24.8166L10.1227 18.6499M15.0069 24.8166L16.2502 12.7339M10.1227 18.6499H2.56581M10.1227 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M30.4165 44.4837L35.9917 37.4837M44.8299 12.7343C41.9709 14.4093 39.6295 16.3426 37.7258 18.6504C35.4024 21.4668 33.7308 24.8409 32.5656 28.9837C31.364 33.2558 30.7008 38.3453 30.4165 44.4837C37.336 43.2679 42.6102 41.4884 46.6735 38.848M60.4165 6.81702L50.9917 18.6504M0.41652 6.81702H60.4165C59.9248 11.2329 59.3432 15.1589 58.5908 18.6504C58.0252 21.2751 57.363 23.6542 56.57 25.8113C55.539 28.6157 54.2867 31.0448 52.7376 33.1504M44.8299 12.7343C46.6638 11.6598 48.7107 10.6917 50.9917 9.79926C53.7726 8.71123 56.9014 7.73565 60.4165 6.81702M35.9917 37.4837L46.6735 38.848M35.9917 37.4837L40.6377 31.6504M35.9917 37.4837L32.5656 28.9837M46.6735 38.848C49.094 37.2752 51.0847 35.3969 52.7376 33.1504M40.6377 31.6504L52.7376 33.1504M40.6377 31.6504L46.0802 24.817M40.6377 31.6504L37.7258 18.6504M46.0802 24.817L56.57 25.8113M46.0802 24.817L50.9917 18.6504M46.0802 24.817L44.8299 12.7343M50.9917 18.6504H58.5908M50.9917 18.6504V9.79926M0.41652 0.650359H60.4165M0.41652 44.4837H60.4165M60.4165 50.817H0.41652" stroke="#7F715A" stroke-width="1.3"/>
<path d="M270.583 44.4833L265.039 37.4833M256.25 12.7339C259.093 14.4088 261.421 16.3422 263.314 18.6499C265.625 21.4664 267.287 24.8405 268.446 28.9833C269.641 33.2554 270.3 38.3449 270.583 44.4833C263.702 43.2675 258.457 41.488 254.416 38.8476C252.009 37.2748 250.03 35.3965 248.386 33.1499M240.75 6.81662L250.122 18.6499M256.25 12.7339C254.426 11.6594 252.391 10.6913 250.122 9.79885C247.357 8.71082 244.245 7.73524 240.75 6.81662C241.239 11.2325 241.817 15.1585 242.565 18.6499C243.128 21.2746 243.786 23.6538 244.575 25.8109C245.6 28.6152 246.846 31.0443 248.386 33.1499M265.039 37.4833L254.416 38.8476M265.039 37.4833L260.419 31.6499M265.039 37.4833L268.446 28.9833M260.419 31.6499L248.386 33.1499M260.419 31.6499L255.006 24.8166M260.419 31.6499L263.314 18.6499M255.006 24.8166L244.575 25.8109M255.006 24.8166L250.122 18.6499M255.006 24.8166L256.25 12.7339M250.122 18.6499H242.565M250.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M270.416 44.4837L275.991 37.4837M284.829 12.7343C281.97 14.4093 279.629 16.3426 277.725 18.6504C275.402 21.4668 273.73 24.8409 272.565 28.9837C271.363 33.2558 270.7 38.3453 270.416 44.4837C277.335 43.2679 282.61 41.4884 286.673 38.848M300.416 6.81702L290.991 18.6504M240.416 6.81702H300.416C299.924 11.2329 299.343 15.1589 298.59 18.6504C298.025 21.2751 297.363 23.6542 296.569 25.8113C295.538 28.6157 294.286 31.0448 292.737 33.1504M284.829 12.7343C286.663 11.6598 288.71 10.6917 290.991 9.79926C293.772 8.71123 296.901 7.73565 300.416 6.81702M275.991 37.4837L286.673 38.848M275.991 37.4837L280.637 31.6504M275.991 37.4837L272.565 28.9837M286.673 38.848C289.093 37.2752 291.084 35.3969 292.737 33.1504M280.637 31.6504L292.737 33.1504M280.637 31.6504L286.08 24.817M280.637 31.6504L277.725 18.6504M286.08 24.817L296.569 25.8113M286.08 24.817L290.991 18.6504M286.08 24.817L284.829 12.7343M290.991 18.6504H298.59M290.991 18.6504V9.79926M240.416 0.650359H300.416M240.416 44.4837H300.416M300.416 50.817H240.416" stroke="#7F715A" stroke-width="1.3"/>
<path d="M510.583 44.4833L505.039 37.4833M496.25 12.7339C499.093 14.4088 501.421 16.3422 503.314 18.6499C505.625 21.4664 507.287 24.8405 508.446 28.9833C509.641 33.2554 510.3 38.3449 510.583 44.4833C503.702 43.2675 498.457 41.488 494.416 38.8476C492.009 37.2748 490.03 35.3965 488.386 33.1499M480.75 6.81662L490.122 18.6499M496.25 12.7339C494.426 11.6594 492.391 10.6913 490.122 9.79885C487.357 8.71082 484.245 7.73524 480.75 6.81662C481.239 11.2325 481.817 15.1585 482.565 18.6499C483.128 21.2746 483.786 23.6538 484.575 25.8109C485.6 28.6152 486.846 31.0443 488.386 33.1499M505.039 37.4833L494.416 38.8476M505.039 37.4833L500.419 31.6499M505.039 37.4833L508.446 28.9833M500.419 31.6499L488.386 33.1499M500.419 31.6499L495.006 24.8166M500.419 31.6499L503.314 18.6499M495.006 24.8166L484.575 25.8109M495.006 24.8166L490.122 18.6499M495.006 24.8166L496.25 12.7339M490.122 18.6499H482.565M490.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M510.417 44.4837L515.992 37.4837M524.83 12.7343C521.971 14.4093 519.63 16.3426 517.726 18.6504C515.402 21.4668 513.731 24.8409 512.566 28.9837C511.364 33.2558 510.701 38.3453 510.417 44.4837C517.336 43.2679 522.61 41.4884 526.673 38.848M540.417 6.81702L530.992 18.6504M480.417 6.81702H540.417C539.925 11.2329 539.343 15.1589 538.591 18.6504C538.025 21.2751 537.363 23.6542 536.57 25.8113C535.539 28.6157 534.287 31.0448 532.738 33.1504M524.83 12.7343C526.664 11.6598 528.711 10.6917 530.992 9.79926C533.773 8.71123 536.901 7.73565 540.417 6.81702M515.992 37.4837L526.673 38.848M515.992 37.4837L520.638 31.6504M515.992 37.4837L512.566 28.9837M526.673 38.848C529.094 37.2752 531.085 35.3969 532.738 33.1504M520.638 31.6504L532.738 33.1504M520.638 31.6504L526.08 24.817M520.638 31.6504L517.726 18.6504M526.08 24.817L536.57 25.8113M526.08 24.817L530.992 18.6504M526.08 24.817L524.83 12.7343M530.992 18.6504H538.591M530.992 18.6504V9.79926M480.417 0.650359H540.417M480.417 44.4837H540.417M540.417 50.817H480.417" stroke="#7F715A" stroke-width="1.3"/>
<path d="M750.583 44.4833L745.039 37.4833M736.25 12.7339C739.093 14.4088 741.421 16.3422 743.314 18.6499C745.625 21.4664 747.287 24.8405 748.446 28.9833C749.641 33.2554 750.3 38.3449 750.583 44.4833C743.702 43.2675 738.457 41.488 734.416 38.8476C732.009 37.2748 730.03 35.3965 728.386 33.1499M720.75 6.81662L730.122 18.6499M736.25 12.7339C734.426 11.6594 732.391 10.6913 730.122 9.79885C727.357 8.71082 724.245 7.73524 720.75 6.81662C721.239 11.2325 721.817 15.1585 722.565 18.6499C723.128 21.2746 723.786 23.6538 724.575 25.8109C725.6 28.6152 726.846 31.0443 728.386 33.1499M745.039 37.4833L734.416 38.8476M745.039 37.4833L740.419 31.6499M745.039 37.4833L748.446 28.9833M740.419 31.6499L728.386 33.1499M740.419 31.6499L735.006 24.8166M740.419 31.6499L743.314 18.6499M735.006 24.8166L724.575 25.8109M735.006 24.8166L730.122 18.6499M735.006 24.8166L736.25 12.7339M730.122 18.6499H722.565M730.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M750.417 44.4837L755.992 37.4837M764.83 12.7343C761.971 14.4093 759.63 16.3426 757.726 18.6504C755.402 21.4668 753.731 24.8409 752.566 28.9837C751.364 33.2558 750.701 38.3453 750.417 44.4837C757.336 43.2679 762.61 41.4884 766.673 38.848M780.417 6.81702L770.992 18.6504M720.417 6.81702H780.417C779.925 11.2329 779.343 15.1589 778.591 18.6504C778.025 21.2751 777.363 23.6542 776.57 25.8113C775.539 28.6157 774.287 31.0448 772.738 33.1504M764.83 12.7343C766.664 11.6598 768.711 10.6917 770.992 9.79926C773.773 8.71123 776.901 7.73565 780.417 6.81702M755.992 37.4837L766.673 38.848M755.992 37.4837L760.638 31.6504M755.992 37.4837L752.566 28.9837M766.673 38.848C769.094 37.2752 771.085 35.3969 772.738 33.1504M760.638 31.6504L772.738 33.1504M760.638 31.6504L766.08 24.817M760.638 31.6504L757.726 18.6504M766.08 24.817L776.57 25.8113M766.08 24.817L770.992 18.6504M766.08 24.817L764.83 12.7343M770.992 18.6504H778.591M770.992 18.6504V9.79926M720.417 0.650359H780.417M720.417 44.4837H780.417M780.417 50.817H720.417" stroke="#7F715A" stroke-width="1.3"/>
<path d="M150.583 44.4833L145.039 37.4833M136.25 12.7339C139.093 14.4088 141.421 16.3422 143.314 18.6499C145.625 21.4664 147.287 24.8405 148.446 28.9833C149.641 33.2554 150.3 38.3449 150.583 44.4833C143.702 43.2675 138.457 41.488 134.416 38.8476C132.009 37.2748 130.03 35.3965 128.386 33.1499M120.75 6.81662L130.122 18.6499M136.25 12.7339C134.426 11.6594 132.391 10.6913 130.122 9.79885C127.357 8.71082 124.245 7.73524 120.75 6.81662C121.239 11.2325 121.817 15.1585 122.565 18.6499C123.128 21.2746 123.786 23.6538 124.575 25.8109C125.6 28.6152 126.846 31.0443 128.386 33.1499M145.039 37.4833L134.416 38.8476M145.039 37.4833L140.419 31.6499M145.039 37.4833L148.446 28.9833M140.419 31.6499L128.386 33.1499M140.419 31.6499L135.006 24.8166M140.419 31.6499L143.314 18.6499M135.006 24.8166L124.575 25.8109M135.006 24.8166L130.122 18.6499M135.006 24.8166L136.25 12.7339M130.122 18.6499H122.565M130.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M150.416 44.4837L155.991 37.4837M164.829 12.7343C161.97 14.4093 159.629 16.3426 157.725 18.6504C155.402 21.4668 153.73 24.8409 152.565 28.9837C151.363 33.2558 150.7 38.3453 150.416 44.4837C157.335 43.2679 162.61 41.4884 166.673 38.848M180.416 6.81702L170.991 18.6504M120.416 6.81702H180.416C179.924 11.2329 179.343 15.1589 178.59 18.6504C178.025 21.2751 177.363 23.6542 176.569 25.8113C175.538 28.6157 174.286 31.0448 172.737 33.1504M164.829 12.7343C166.663 11.6598 168.71 10.6917 170.991 9.79926C173.772 8.71123 176.901 7.73565 180.416 6.81702M155.991 37.4837L166.673 38.848M155.991 37.4837L160.637 31.6504M155.991 37.4837L152.565 28.9837M166.673 38.848C169.093 37.2752 171.084 35.3969 172.737 33.1504M160.637 31.6504L172.737 33.1504M160.637 31.6504L166.08 24.817M160.637 31.6504L157.725 18.6504M166.08 24.817L176.569 25.8113M166.08 24.817L170.991 18.6504M166.08 24.817L164.829 12.7343M170.991 18.6504H178.59M170.991 18.6504V9.79926M120.416 0.650359H180.416M120.416 44.4837H180.416M180.416 50.817H120.416" stroke="#7F715A" stroke-width="1.3"/>
<path d="M390.583 44.4833L385.039 37.4833M376.25 12.7339C379.093 14.4088 381.421 16.3422 383.314 18.6499C385.625 21.4664 387.287 24.8405 388.446 28.9833C389.641 33.2554 390.3 38.3449 390.583 44.4833C383.702 43.2675 378.457 41.488 374.416 38.8476C372.009 37.2748 370.03 35.3965 368.386 33.1499M360.75 6.81662L370.122 18.6499M376.25 12.7339C374.426 11.6594 372.391 10.6913 370.122 9.79885C367.357 8.71082 364.245 7.73524 360.75 6.81662C361.239 11.2325 361.817 15.1585 362.565 18.6499C363.128 21.2746 363.786 23.6538 364.575 25.8109C365.6 28.6152 366.846 31.0443 368.386 33.1499M385.039 37.4833L374.416 38.8476M385.039 37.4833L380.419 31.6499M385.039 37.4833L388.446 28.9833M380.419 31.6499L368.386 33.1499M380.419 31.6499L375.006 24.8166M380.419 31.6499L383.314 18.6499M375.006 24.8166L364.575 25.8109M375.006 24.8166L370.122 18.6499M375.006 24.8166L376.25 12.7339M370.122 18.6499H362.565M370.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M390.417 44.4837L395.992 37.4837M404.83 12.7343C401.971 14.4093 399.63 16.3426 397.726 18.6504C395.402 21.4668 393.731 24.8409 392.566 28.9837C391.364 33.2558 390.701 38.3453 390.417 44.4837C397.336 43.2679 402.61 41.4884 406.673 38.848M420.417 6.81702L410.992 18.6504M360.417 6.81702H420.417C419.925 11.2329 419.343 15.1589 418.591 18.6504C418.025 21.2751 417.363 23.6542 416.57 25.8113C415.539 28.6157 414.287 31.0448 412.738 33.1504M404.83 12.7343C406.664 11.6598 408.711 10.6917 410.992 9.79926C413.773 8.71123 416.901 7.73565 420.417 6.81702M395.992 37.4837L406.673 38.848M395.992 37.4837L400.638 31.6504M395.992 37.4837L392.566 28.9837M406.673 38.848C409.094 37.2752 411.085 35.3969 412.738 33.1504M400.638 31.6504L412.738 33.1504M400.638 31.6504L406.08 24.817M400.638 31.6504L397.726 18.6504M406.08 24.817L416.57 25.8113M406.08 24.817L410.992 18.6504M406.08 24.817L404.83 12.7343M410.992 18.6504H418.591M410.992 18.6504V9.79926M360.417 0.650359H420.417M360.417 44.4837H420.417M420.417 50.817H360.417" stroke="#7F715A" stroke-width="1.3"/>
<path d="M630.583 44.4833L625.039 37.4833M616.25 12.7339C619.093 14.4088 621.421 16.3422 623.314 18.6499C625.625 21.4664 627.287 24.8405 628.446 28.9833C629.641 33.2554 630.3 38.3449 630.583 44.4833C623.702 43.2675 618.457 41.488 614.416 38.8476C612.009 37.2748 610.03 35.3965 608.386 33.1499M600.75 6.81662L610.122 18.6499M616.25 12.7339C614.426 11.6594 612.391 10.6913 610.122 9.79885C607.357 8.71082 604.245 7.73524 600.75 6.81662C601.239 11.2325 601.817 15.1585 602.565 18.6499C603.128 21.2746 603.786 23.6538 604.575 25.8109C605.6 28.6152 606.846 31.0443 608.386 33.1499M625.039 37.4833L614.416 38.8476M625.039 37.4833L620.419 31.6499M625.039 37.4833L628.446 28.9833M620.419 31.6499L608.386 33.1499M620.419 31.6499L615.006 24.8166M620.419 31.6499L623.314 18.6499M615.006 24.8166L604.575 25.8109M615.006 24.8166L610.122 18.6499M615.006 24.8166L616.25 12.7339M610.122 18.6499H602.565M610.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M630.416 44.4837L635.991 37.4837M644.829 12.7343C641.97 14.4093 639.629 16.3426 637.725 18.6504C635.402 21.4668 633.73 24.8409 632.565 28.9837C631.363 33.2558 630.7 38.3453 630.416 44.4837C637.335 43.2679 642.61 41.4884 646.673 38.848M660.416 6.81702L650.991 18.6504M600.416 6.81702H660.416C659.924 11.2329 659.343 15.1589 658.59 18.6504C658.025 21.2751 657.363 23.6542 656.569 25.8113C655.538 28.6157 654.286 31.0448 652.737 33.1504M644.829 12.7343C646.663 11.6598 648.71 10.6917 650.991 9.79926C653.772 8.71123 656.901 7.73565 660.416 6.81702M635.991 37.4837L646.673 38.848M635.991 37.4837L640.637 31.6504M635.991 37.4837L632.565 28.9837M646.673 38.848C649.093 37.2752 651.084 35.3969 652.737 33.1504M640.637 31.6504L652.737 33.1504M640.637 31.6504L646.08 24.817M640.637 31.6504L637.725 18.6504M646.08 24.817L656.569 25.8113M646.08 24.817L650.991 18.6504M646.08 24.817L644.829 12.7343M650.991 18.6504H658.59M650.991 18.6504V9.79926M600.416 0.650359H660.416M600.416 44.4837H660.416M660.416 50.817H600.416" stroke="#7F715A" stroke-width="1.3"/>
<path d="M870.583 44.4833L865.039 37.4833M856.25 12.7339C859.093 14.4088 861.421 16.3422 863.314 18.6499C865.625 21.4664 867.287 24.8405 868.446 28.9833C869.641 33.2554 870.3 38.3449 870.583 44.4833C863.702 43.2675 858.457 41.488 854.416 38.8476C852.009 37.2748 850.03 35.3965 848.386 33.1499M840.75 6.81662L850.122 18.6499M856.25 12.7339C854.426 11.6594 852.391 10.6913 850.122 9.79885C847.357 8.71082 844.245 7.73524 840.75 6.81662C841.239 11.2325 841.817 15.1585 842.565 18.6499C843.128 21.2746 843.786 23.6538 844.575 25.8109C845.6 28.6152 846.846 31.0443 848.386 33.1499M865.039 37.4833L854.416 38.8476M865.039 37.4833L860.419 31.6499M865.039 37.4833L868.446 28.9833M860.419 31.6499L848.386 33.1499M860.419 31.6499L855.006 24.8166M860.419 31.6499L863.314 18.6499M855.006 24.8166L844.575 25.8109M855.006 24.8166L850.122 18.6499M855.006 24.8166L856.25 12.7339M850.122 18.6499H842.565M850.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M870.416 44.4837L875.991 37.4837M884.829 12.7343C881.97 14.4093 879.629 16.3426 877.725 18.6504C875.402 21.4668 873.73 24.8409 872.565 28.9837C871.363 33.2558 870.7 38.3453 870.416 44.4837C877.335 43.2679 882.61 41.4884 886.673 38.848M900.416 6.81702L890.991 18.6504M840.416 6.81702H900.416C899.924 11.2329 899.343 15.1589 898.59 18.6504C898.025 21.2751 897.363 23.6542 896.569 25.8113C895.538 28.6157 894.286 31.0448 892.737 33.1504M884.829 12.7343C886.663 11.6598 888.71 10.6917 890.991 9.79926C893.772 8.71123 896.901 7.73565 900.416 6.81702M875.991 37.4837L886.673 38.848M875.991 37.4837L880.637 31.6504M875.991 37.4837L872.565 28.9837M886.673 38.848C889.093 37.2752 891.084 35.3969 892.737 33.1504M880.637 31.6504L892.737 33.1504M880.637 31.6504L886.08 24.817M880.637 31.6504L877.725 18.6504M886.08 24.817L896.569 25.8113M886.08 24.817L890.991 18.6504M886.08 24.817L884.829 12.7343M890.991 18.6504H898.59M890.991 18.6504V9.79926M840.416 0.650359H900.416M840.416 44.4837H900.416M900.416 50.817H840.416" stroke="#7F715A" stroke-width="1.3"/>
<path d="M90.5831 44.4833L85.0388 37.4833M76.2498 12.7339C79.0929 14.4088 81.4212 16.3422 83.3144 18.6499C85.6249 21.4664 87.2872 24.8405 88.446 28.9833C89.6409 33.2554 90.3004 38.3449 90.5831 44.4833C83.7021 43.2675 78.4571 41.488 74.4164 38.8476C72.0094 37.2748 70.0297 35.3965 68.386 33.1499M60.7498 6.81662L70.1222 18.6499M76.2498 12.7339C74.426 11.6594 72.3905 10.6913 70.1222 9.79885C67.3567 8.71082 64.2453 7.73524 60.7498 6.81662C61.2388 11.2325 61.8171 15.1585 62.5653 18.6499C63.1278 21.2746 63.7863 23.6538 64.5749 25.8109C65.6002 28.6152 66.8455 31.0443 68.386 33.1499M85.0388 37.4833L74.4164 38.8476M85.0388 37.4833L80.4186 31.6499M85.0388 37.4833L88.446 28.9833M80.4186 31.6499L68.386 33.1499M80.4186 31.6499L75.0064 24.8166M80.4186 31.6499L83.3144 18.6499M75.0064 24.8166L64.5749 25.8109M75.0064 24.8166L70.1222 18.6499M75.0064 24.8166L76.2498 12.7339M70.1222 18.6499H62.5653M70.1222 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M90.4165 44.4837L95.9917 37.4837M104.83 12.7343C101.971 14.4093 99.6295 16.3426 97.7258 18.6504C95.4024 21.4668 93.7308 24.8409 92.5656 28.9837C91.364 33.2558 90.7008 38.3453 90.4165 44.4837C97.336 43.2679 102.61 41.4884 106.673 38.848M120.417 6.81702L110.992 18.6504M60.4165 6.81702H120.417C119.925 11.2329 119.343 15.1589 118.591 18.6504C118.025 21.2751 117.363 23.6542 116.57 25.8113C115.539 28.6157 114.287 31.0448 112.738 33.1504M104.83 12.7343C106.664 11.6598 108.711 10.6917 110.992 9.79926C113.773 8.71123 116.901 7.73565 120.417 6.81702M95.9917 37.4837L106.673 38.848M95.9917 37.4837L100.638 31.6504M95.9917 37.4837L92.5656 28.9837M106.673 38.848C109.094 37.2752 111.085 35.3969 112.738 33.1504M100.638 31.6504L112.738 33.1504M100.638 31.6504L106.08 24.817M100.638 31.6504L97.7258 18.6504M106.08 24.817L116.57 25.8113M106.08 24.817L110.992 18.6504M106.08 24.817L104.83 12.7343M110.992 18.6504H118.591M110.992 18.6504V9.79926M60.4165 0.650359H120.417M60.4165 44.4837H120.417M120.417 50.817H60.4165" stroke="#7F715A" stroke-width="1.3"/>
<path d="M270.583 44.4833L265.039 37.4833M256.25 12.7339C259.093 14.4088 261.421 16.3422 263.314 18.6499C265.625 21.4664 267.287 24.8405 268.446 28.9833C269.641 33.2554 270.3 38.3449 270.583 44.4833C263.702 43.2675 258.457 41.488 254.416 38.8476C252.009 37.2748 250.03 35.3965 248.386 33.1499M240.75 6.81662L250.122 18.6499M256.25 12.7339C254.426 11.6594 252.391 10.6913 250.122 9.79885C247.357 8.71082 244.245 7.73524 240.75 6.81662C241.239 11.2325 241.817 15.1585 242.565 18.6499C243.128 21.2746 243.786 23.6538 244.575 25.8109C245.6 28.6152 246.846 31.0443 248.386 33.1499M265.039 37.4833L254.416 38.8476M265.039 37.4833L260.419 31.6499M265.039 37.4833L268.446 28.9833M260.419 31.6499L248.386 33.1499M260.419 31.6499L255.006 24.8166M260.419 31.6499L263.314 18.6499M255.006 24.8166L244.575 25.8109M255.006 24.8166L250.122 18.6499M255.006 24.8166L256.25 12.7339M250.122 18.6499H242.565M250.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M270.416 44.4837L275.991 37.4837M284.829 12.7343C281.97 14.4093 279.629 16.3426 277.725 18.6504C275.402 21.4668 273.73 24.8409 272.565 28.9837C271.363 33.2558 270.7 38.3453 270.416 44.4837C277.335 43.2679 282.61 41.4884 286.673 38.848M300.416 6.81702L290.991 18.6504M240.416 6.81702H300.416C299.924 11.2329 299.343 15.1589 298.59 18.6504C298.025 21.2751 297.363 23.6542 296.569 25.8113C295.538 28.6157 294.286 31.0448 292.737 33.1504M284.829 12.7343C286.663 11.6598 288.71 10.6917 290.991 9.79926C293.772 8.71123 296.901 7.73565 300.416 6.81702M275.991 37.4837L286.673 38.848M275.991 37.4837L280.637 31.6504M275.991 37.4837L272.565 28.9837M286.673 38.848C289.093 37.2752 291.084 35.3969 292.737 33.1504M280.637 31.6504L292.737 33.1504M280.637 31.6504L286.08 24.817M280.637 31.6504L277.725 18.6504M286.08 24.817L296.569 25.8113M286.08 24.817L290.991 18.6504M286.08 24.817L284.829 12.7343M290.991 18.6504H298.59M290.991 18.6504V9.79926M240.416 0.650359H300.416M240.416 44.4837H300.416M300.416 50.817H240.416" stroke="#7F715A" stroke-width="1.3"/>
<path d="M510.583 44.4833L505.039 37.4833M496.25 12.7339C499.093 14.4088 501.421 16.3422 503.314 18.6499C505.625 21.4664 507.287 24.8405 508.446 28.9833C509.641 33.2554 510.3 38.3449 510.583 44.4833C503.702 43.2675 498.457 41.488 494.416 38.8476C492.009 37.2748 490.03 35.3965 488.386 33.1499M480.75 6.81662L490.122 18.6499M496.25 12.7339C494.426 11.6594 492.391 10.6913 490.122 9.79885C487.357 8.71082 484.245 7.73524 480.75 6.81662C481.239 11.2325 481.817 15.1585 482.565 18.6499C483.128 21.2746 483.786 23.6538 484.575 25.8109C485.6 28.6152 486.846 31.0443 488.386 33.1499M505.039 37.4833L494.416 38.8476M505.039 37.4833L500.419 31.6499M505.039 37.4833L508.446 28.9833M500.419 31.6499L488.386 33.1499M500.419 31.6499L495.006 24.8166M500.419 31.6499L503.314 18.6499M495.006 24.8166L484.575 25.8109M495.006 24.8166L490.122 18.6499M495.006 24.8166L496.25 12.7339M490.122 18.6499H482.565M490.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M510.417 44.4837L515.992 37.4837M524.83 12.7343C521.971 14.4093 519.63 16.3426 517.726 18.6504C515.402 21.4668 513.731 24.8409 512.566 28.9837C511.364 33.2558 510.701 38.3453 510.417 44.4837C517.336 43.2679 522.61 41.4884 526.673 38.848M540.417 6.81702L530.992 18.6504M480.417 6.81702H540.417C539.925 11.2329 539.343 15.1589 538.591 18.6504C538.025 21.2751 537.363 23.6542 536.57 25.8113C535.539 28.6157 534.287 31.0448 532.738 33.1504M524.83 12.7343C526.664 11.6598 528.711 10.6917 530.992 9.79926C533.773 8.71123 536.901 7.73565 540.417 6.81702M515.992 37.4837L526.673 38.848M515.992 37.4837L520.638 31.6504M515.992 37.4837L512.566 28.9837M526.673 38.848C529.094 37.2752 531.085 35.3969 532.738 33.1504M520.638 31.6504L532.738 33.1504M520.638 31.6504L526.08 24.817M520.638 31.6504L517.726 18.6504M526.08 24.817L536.57 25.8113M526.08 24.817L530.992 18.6504M526.08 24.817L524.83 12.7343M530.992 18.6504H538.591M530.992 18.6504V9.79926M480.417 0.650359H540.417M480.417 44.4837H540.417M540.417 50.817H480.417" stroke="#7F715A" stroke-width="1.3"/>
<path d="M750.583 44.4833L745.039 37.4833M736.25 12.7339C739.093 14.4088 741.421 16.3422 743.314 18.6499C745.625 21.4664 747.287 24.8405 748.446 28.9833C749.641 33.2554 750.3 38.3449 750.583 44.4833C743.702 43.2675 738.457 41.488 734.416 38.8476C732.009 37.2748 730.03 35.3965 728.386 33.1499M720.75 6.81662L730.122 18.6499M736.25 12.7339C734.426 11.6594 732.391 10.6913 730.122 9.79885C727.357 8.71082 724.245 7.73524 720.75 6.81662C721.239 11.2325 721.817 15.1585 722.565 18.6499C723.128 21.2746 723.786 23.6538 724.575 25.8109C725.6 28.6152 726.846 31.0443 728.386 33.1499M745.039 37.4833L734.416 38.8476M745.039 37.4833L740.419 31.6499M745.039 37.4833L748.446 28.9833M740.419 31.6499L728.386 33.1499M740.419 31.6499L735.006 24.8166M740.419 31.6499L743.314 18.6499M735.006 24.8166L724.575 25.8109M735.006 24.8166L730.122 18.6499M735.006 24.8166L736.25 12.7339M730.122 18.6499H722.565M730.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M750.417 44.4837L755.992 37.4837M764.83 12.7343C761.971 14.4093 759.63 16.3426 757.726 18.6504C755.402 21.4668 753.731 24.8409 752.566 28.9837C751.364 33.2558 750.701 38.3453 750.417 44.4837C757.336 43.2679 762.61 41.4884 766.673 38.848M780.417 6.81702L770.992 18.6504M720.417 6.81702H780.417C779.925 11.2329 779.343 15.1589 778.591 18.6504C778.025 21.2751 777.363 23.6542 776.57 25.8113C775.539 28.6157 774.287 31.0448 772.738 33.1504M764.83 12.7343C766.664 11.6598 768.711 10.6917 770.992 9.79926C773.773 8.71123 776.901 7.73565 780.417 6.81702M755.992 37.4837L766.673 38.848M755.992 37.4837L760.638 31.6504M755.992 37.4837L752.566 28.9837M766.673 38.848C769.094 37.2752 771.085 35.3969 772.738 33.1504M760.638 31.6504L772.738 33.1504M760.638 31.6504L766.08 24.817M760.638 31.6504L757.726 18.6504M766.08 24.817L776.57 25.8113M766.08 24.817L770.992 18.6504M766.08 24.817L764.83 12.7343M770.992 18.6504H778.591M770.992 18.6504V9.79926M720.417 0.650359H780.417M720.417 44.4837H780.417M780.417 50.817H720.417" stroke="#7F715A" stroke-width="1.3"/>
<path d="M150.583 44.4833L145.039 37.4833M136.25 12.7339C139.093 14.4088 141.421 16.3422 143.314 18.6499C145.625 21.4664 147.287 24.8405 148.446 28.9833C149.641 33.2554 150.3 38.3449 150.583 44.4833C143.702 43.2675 138.457 41.488 134.416 38.8476C132.009 37.2748 130.03 35.3965 128.386 33.1499M120.75 6.81662L130.122 18.6499M136.25 12.7339C134.426 11.6594 132.391 10.6913 130.122 9.79885C127.357 8.71082 124.245 7.73524 120.75 6.81662C121.239 11.2325 121.817 15.1585 122.565 18.6499C123.128 21.2746 123.786 23.6538 124.575 25.8109C125.6 28.6152 126.846 31.0443 128.386 33.1499M145.039 37.4833L134.416 38.8476M145.039 37.4833L140.419 31.6499M145.039 37.4833L148.446 28.9833M140.419 31.6499L128.386 33.1499M140.419 31.6499L135.006 24.8166M140.419 31.6499L143.314 18.6499M135.006 24.8166L124.575 25.8109M135.006 24.8166L130.122 18.6499M135.006 24.8166L136.25 12.7339M130.122 18.6499H122.565M130.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M150.416 44.4837L155.991 37.4837M164.829 12.7343C161.97 14.4093 159.629 16.3426 157.725 18.6504C155.402 21.4668 153.73 24.8409 152.565 28.9837C151.363 33.2558 150.7 38.3453 150.416 44.4837C157.335 43.2679 162.61 41.4884 166.673 38.848M180.416 6.81702L170.991 18.6504M120.416 6.81702H180.416C179.924 11.2329 179.343 15.1589 178.59 18.6504C178.025 21.2751 177.363 23.6542 176.569 25.8113C175.538 28.6157 174.286 31.0448 172.737 33.1504M164.829 12.7343C166.663 11.6598 168.71 10.6917 170.991 9.79926C173.772 8.71123 176.901 7.73565 180.416 6.81702M155.991 37.4837L166.673 38.848M155.991 37.4837L160.637 31.6504M155.991 37.4837L152.565 28.9837M166.673 38.848C169.093 37.2752 171.084 35.3969 172.737 33.1504M160.637 31.6504L172.737 33.1504M160.637 31.6504L166.08 24.817M160.637 31.6504L157.725 18.6504M166.08 24.817L176.569 25.8113M166.08 24.817L170.991 18.6504M166.08 24.817L164.829 12.7343M170.991 18.6504H178.59M170.991 18.6504V9.79926M120.416 0.650359H180.416M120.416 44.4837H180.416M180.416 50.817H120.416" stroke="#7F715A" stroke-width="1.3"/>
<path d="M390.583 44.4833L385.039 37.4833M376.25 12.7339C379.093 14.4088 381.421 16.3422 383.314 18.6499C385.625 21.4664 387.287 24.8405 388.446 28.9833C389.641 33.2554 390.3 38.3449 390.583 44.4833C383.702 43.2675 378.457 41.488 374.416 38.8476C372.009 37.2748 370.03 35.3965 368.386 33.1499M360.75 6.81662L370.122 18.6499M376.25 12.7339C374.426 11.6594 372.391 10.6913 370.122 9.79885C367.357 8.71082 364.245 7.73524 360.75 6.81662C361.239 11.2325 361.817 15.1585 362.565 18.6499C363.128 21.2746 363.786 23.6538 364.575 25.8109C365.6 28.6152 366.846 31.0443 368.386 33.1499M385.039 37.4833L374.416 38.8476M385.039 37.4833L380.419 31.6499M385.039 37.4833L388.446 28.9833M380.419 31.6499L368.386 33.1499M380.419 31.6499L375.006 24.8166M380.419 31.6499L383.314 18.6499M375.006 24.8166L364.575 25.8109M375.006 24.8166L370.122 18.6499M375.006 24.8166L376.25 12.7339M370.122 18.6499H362.565M370.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M390.417 44.4837L395.992 37.4837M404.83 12.7343C401.971 14.4093 399.63 16.3426 397.726 18.6504C395.402 21.4668 393.731 24.8409 392.566 28.9837C391.364 33.2558 390.701 38.3453 390.417 44.4837C397.336 43.2679 402.61 41.4884 406.673 38.848M420.417 6.81702L410.992 18.6504M360.417 6.81702H420.417C419.925 11.2329 419.343 15.1589 418.591 18.6504C418.025 21.2751 417.363 23.6542 416.57 25.8113C415.539 28.6157 414.287 31.0448 412.738 33.1504M404.83 12.7343C406.664 11.6598 408.711 10.6917 410.992 9.79926C413.773 8.71123 416.901 7.73565 420.417 6.81702M395.992 37.4837L406.673 38.848M395.992 37.4837L400.638 31.6504M395.992 37.4837L392.566 28.9837M406.673 38.848C409.094 37.2752 411.085 35.3969 412.738 33.1504M400.638 31.6504L412.738 33.1504M400.638 31.6504L406.08 24.817M400.638 31.6504L397.726 18.6504M406.08 24.817L416.57 25.8113M406.08 24.817L410.992 18.6504M406.08 24.817L404.83 12.7343M410.992 18.6504H418.591M410.992 18.6504V9.79926M360.417 0.650359H420.417M360.417 44.4837H420.417M420.417 50.817H360.417" stroke="#7F715A" stroke-width="1.3"/>
<path d="M630.583 44.4833L625.039 37.4833M616.25 12.7339C619.093 14.4088 621.421 16.3422 623.314 18.6499C625.625 21.4664 627.287 24.8405 628.446 28.9833C629.641 33.2554 630.3 38.3449 630.583 44.4833C623.702 43.2675 618.457 41.488 614.416 38.8476C612.009 37.2748 610.03 35.3965 608.386 33.1499M600.75 6.81662L610.122 18.6499M616.25 12.7339C614.426 11.6594 612.391 10.6913 610.122 9.79885C607.357 8.71082 604.245 7.73524 600.75 6.81662C601.239 11.2325 601.817 15.1585 602.565 18.6499C603.128 21.2746 603.786 23.6538 604.575 25.8109C605.6 28.6152 606.846 31.0443 608.386 33.1499M625.039 37.4833L614.416 38.8476M625.039 37.4833L620.419 31.6499M625.039 37.4833L628.446 28.9833M620.419 31.6499L608.386 33.1499M620.419 31.6499L615.006 24.8166M620.419 31.6499L623.314 18.6499M615.006 24.8166L604.575 25.8109M615.006 24.8166L610.122 18.6499M615.006 24.8166L616.25 12.7339M610.122 18.6499H602.565M610.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M630.416 44.4837L635.991 37.4837M644.829 12.7343C641.97 14.4093 639.629 16.3426 637.725 18.6504C635.402 21.4668 633.73 24.8409 632.565 28.9837C631.363 33.2558 630.7 38.3453 630.416 44.4837C637.335 43.2679 642.61 41.4884 646.673 38.848M660.416 6.81702L650.991 18.6504M600.416 6.81702H660.416C659.924 11.2329 659.343 15.1589 658.59 18.6504C658.025 21.2751 657.363 23.6542 656.569 25.8113C655.538 28.6157 654.286 31.0448 652.737 33.1504M644.829 12.7343C646.663 11.6598 648.71 10.6917 650.991 9.79926C653.772 8.71123 656.901 7.73565 660.416 6.81702M635.991 37.4837L646.673 38.848M635.991 37.4837L640.637 31.6504M635.991 37.4837L632.565 28.9837M646.673 38.848C649.093 37.2752 651.084 35.3969 652.737 33.1504M640.637 31.6504L652.737 33.1504M640.637 31.6504L646.08 24.817M640.637 31.6504L637.725 18.6504M646.08 24.817L656.569 25.8113M646.08 24.817L650.991 18.6504M646.08 24.817L644.829 12.7343M650.991 18.6504H658.59M650.991 18.6504V9.79926M600.416 0.650359H660.416M600.416 44.4837H660.416M660.416 50.817H600.416" stroke="#7F715A" stroke-width="1.3"/>
<path d="M870.583 44.4833L865.039 37.4833M856.25 12.7339C859.093 14.4088 861.421 16.3422 863.314 18.6499C865.625 21.4664 867.287 24.8405 868.446 28.9833C869.641 33.2554 870.3 38.3449 870.583 44.4833C863.702 43.2675 858.457 41.488 854.416 38.8476C852.009 37.2748 850.03 35.3965 848.386 33.1499M840.75 6.81662L850.122 18.6499M856.25 12.7339C854.426 11.6594 852.391 10.6913 850.122 9.79885C847.357 8.71082 844.245 7.73524 840.75 6.81662C841.239 11.2325 841.817 15.1585 842.565 18.6499C843.128 21.2746 843.786 23.6538 844.575 25.8109C845.6 28.6152 846.846 31.0443 848.386 33.1499M865.039 37.4833L854.416 38.8476M865.039 37.4833L860.419 31.6499M865.039 37.4833L868.446 28.9833M860.419 31.6499L848.386 33.1499M860.419 31.6499L855.006 24.8166M860.419 31.6499L863.314 18.6499M855.006 24.8166L844.575 25.8109M855.006 24.8166L850.122 18.6499M855.006 24.8166L856.25 12.7339M850.122 18.6499H842.565M850.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M870.416 44.4837L875.991 37.4837M884.829 12.7343C881.97 14.4093 879.629 16.3426 877.725 18.6504C875.402 21.4668 873.73 24.8409 872.565 28.9837C871.363 33.2558 870.7 38.3453 870.416 44.4837C877.335 43.2679 882.61 41.4884 886.673 38.848M900.416 6.81702L890.991 18.6504M840.416 6.81702H900.416C899.924 11.2329 899.343 15.1589 898.59 18.6504C898.025 21.2751 897.363 23.6542 896.569 25.8113C895.538 28.6157 894.286 31.0448 892.737 33.1504M884.829 12.7343C886.663 11.6598 888.71 10.6917 890.991 9.79926C893.772 8.71123 896.901 7.73565 900.416 6.81702M875.991 37.4837L886.673 38.848M875.991 37.4837L880.637 31.6504M875.991 37.4837L872.565 28.9837M886.673 38.848C889.093 37.2752 891.084 35.3969 892.737 33.1504M880.637 31.6504L892.737 33.1504M880.637 31.6504L886.08 24.817M880.637 31.6504L877.725 18.6504M886.08 24.817L896.569 25.8113M886.08 24.817L890.991 18.6504M886.08 24.817L884.829 12.7343M890.991 18.6504H898.59M890.991 18.6504V9.79926M840.416 0.650359H900.416M840.416 44.4837H900.416M900.416 50.817H840.416" stroke="#7F715A" stroke-width="1.3"/>
<path d="M90.5831 44.4833L85.0388 37.4833M76.2498 12.7339C79.0929 14.4088 81.4212 16.3422 83.3144 18.6499C85.6249 21.4664 87.2872 24.8405 88.446 28.9833C89.6409 33.2554 90.3004 38.3449 90.5831 44.4833C83.7021 43.2675 78.4571 41.488 74.4164 38.8476C72.0094 37.2748 70.0297 35.3965 68.386 33.1499M60.7498 6.81662L70.1222 18.6499M76.2498 12.7339C74.426 11.6594 72.3905 10.6913 70.1222 9.79885C67.3567 8.71082 64.2453 7.73524 60.7498 6.81662C61.2388 11.2325 61.8171 15.1585 62.5653 18.6499C63.1278 21.2746 63.7863 23.6538 64.5749 25.8109C65.6002 28.6152 66.8455 31.0443 68.386 33.1499M85.0388 37.4833L74.4164 38.8476M85.0388 37.4833L80.4186 31.6499M85.0388 37.4833L88.446 28.9833M80.4186 31.6499L68.386 33.1499M80.4186 31.6499L75.0064 24.8166M80.4186 31.6499L83.3144 18.6499M75.0064 24.8166L64.5749 25.8109M75.0064 24.8166L70.1222 18.6499M75.0064 24.8166L76.2498 12.7339M70.1222 18.6499H62.5653M70.1222 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M90.4165 44.4837L95.9917 37.4837M104.83 12.7343C101.971 14.4093 99.6295 16.3426 97.7258 18.6504C95.4024 21.4668 93.7308 24.8409 92.5656 28.9837C91.364 33.2558 90.7008 38.3453 90.4165 44.4837C97.336 43.2679 102.61 41.4884 106.673 38.848M120.417 6.81702L110.992 18.6504M60.4165 6.81702H120.417C119.925 11.2329 119.343 15.1589 118.591 18.6504C118.025 21.2751 117.363 23.6542 116.57 25.8113C115.539 28.6157 114.287 31.0448 112.738 33.1504M104.83 12.7343C106.664 11.6598 108.711 10.6917 110.992 9.79926C113.773 8.71123 116.901 7.73565 120.417 6.81702M95.9917 37.4837L106.673 38.848M95.9917 37.4837L100.638 31.6504M95.9917 37.4837L92.5656 28.9837M106.673 38.848C109.094 37.2752 111.085 35.3969 112.738 33.1504M100.638 31.6504L112.738 33.1504M100.638 31.6504L106.08 24.817M100.638 31.6504L97.7258 18.6504M106.08 24.817L116.57 25.8113M106.08 24.817L110.992 18.6504M106.08 24.817L104.83 12.7343M110.992 18.6504H118.591M110.992 18.6504V9.79926M60.4165 0.650359H120.417M60.4165 44.4837H120.417M120.417 50.817H60.4165" stroke="#7F715A" stroke-width="1.3"/>
<path d="M330.583 44.4833L325.039 37.4833M316.25 12.7339C319.093 14.4088 321.421 16.3422 323.314 18.6499C325.625 21.4664 327.287 24.8405 328.446 28.9833C329.641 33.2554 330.3 38.3449 330.583 44.4833C323.702 43.2675 318.457 41.488 314.416 38.8476C312.009 37.2748 310.03 35.3965 308.386 33.1499M300.75 6.81662L310.122 18.6499M316.25 12.7339C314.426 11.6594 312.391 10.6913 310.122 9.79885C307.357 8.71082 304.245 7.73524 300.75 6.81662C301.239 11.2325 301.817 15.1585 302.565 18.6499C303.128 21.2746 303.786 23.6538 304.575 25.8109C305.6 28.6152 306.846 31.0443 308.386 33.1499M325.039 37.4833L314.416 38.8476M325.039 37.4833L320.419 31.6499M325.039 37.4833L328.446 28.9833M320.419 31.6499L308.386 33.1499M320.419 31.6499L315.006 24.8166M320.419 31.6499L323.314 18.6499M315.006 24.8166L304.575 25.8109M315.006 24.8166L310.122 18.6499M315.006 24.8166L316.25 12.7339M310.122 18.6499H302.565M310.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M330.416 44.4837L335.991 37.4837M344.829 12.7343C341.97 14.4093 339.629 16.3426 337.725 18.6504C335.402 21.4668 333.73 24.8409 332.565 28.9837C331.363 33.2558 330.7 38.3453 330.416 44.4837C337.335 43.2679 342.61 41.4884 346.673 38.848M360.416 6.81702L350.991 18.6504M300.416 6.81702H360.416C359.924 11.2329 359.343 15.1589 358.59 18.6504C358.025 21.2751 357.363 23.6542 356.569 25.8113C355.538 28.6157 354.286 31.0448 352.737 33.1504M344.829 12.7343C346.663 11.6598 348.71 10.6917 350.991 9.79926C353.772 8.71123 356.901 7.73565 360.416 6.81702M335.991 37.4837L346.673 38.848M335.991 37.4837L340.637 31.6504M335.991 37.4837L332.565 28.9837M346.673 38.848C349.093 37.2752 351.084 35.3969 352.737 33.1504M340.637 31.6504L352.737 33.1504M340.637 31.6504L346.08 24.817M340.637 31.6504L337.725 18.6504M346.08 24.817L356.569 25.8113M346.08 24.817L350.991 18.6504M346.08 24.817L344.829 12.7343M350.991 18.6504H358.59M350.991 18.6504V9.79926M300.416 0.650359H360.416M300.416 44.4837H360.416M360.416 50.817H300.416" stroke="#7F715A" stroke-width="1.3"/>
<path d="M570.583 44.4833L565.039 37.4833M556.25 12.7339C559.093 14.4088 561.421 16.3422 563.314 18.6499C565.625 21.4664 567.287 24.8405 568.446 28.9833C569.641 33.2554 570.3 38.3449 570.583 44.4833C563.702 43.2675 558.457 41.488 554.416 38.8476C552.009 37.2748 550.03 35.3965 548.386 33.1499M540.75 6.81662L550.122 18.6499M556.25 12.7339C554.426 11.6594 552.391 10.6913 550.122 9.79885C547.357 8.71082 544.245 7.73524 540.75 6.81662C541.239 11.2325 541.817 15.1585 542.565 18.6499C543.128 21.2746 543.786 23.6538 544.575 25.8109C545.6 28.6152 546.846 31.0443 548.386 33.1499M565.039 37.4833L554.416 38.8476M565.039 37.4833L560.419 31.6499M565.039 37.4833L568.446 28.9833M560.419 31.6499L548.386 33.1499M560.419 31.6499L555.006 24.8166M560.419 31.6499L563.314 18.6499M555.006 24.8166L544.575 25.8109M555.006 24.8166L550.122 18.6499M555.006 24.8166L556.25 12.7339M550.122 18.6499H542.565M550.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M570.416 44.4837L575.991 37.4837M584.829 12.7343C581.97 14.4093 579.629 16.3426 577.725 18.6504C575.402 21.4668 573.73 24.8409 572.565 28.9837C571.363 33.2558 570.7 38.3453 570.416 44.4837C577.335 43.2679 582.61 41.4884 586.673 38.848M600.416 6.81702L590.991 18.6504M540.416 6.81702H600.416C599.924 11.2329 599.343 15.1589 598.59 18.6504C598.025 21.2751 597.363 23.6542 596.569 25.8113C595.538 28.6157 594.286 31.0448 592.737 33.1504M584.829 12.7343C586.663 11.6598 588.71 10.6917 590.991 9.79926C593.772 8.71123 596.901 7.73565 600.416 6.81702M575.991 37.4837L586.673 38.848M575.991 37.4837L580.637 31.6504M575.991 37.4837L572.565 28.9837M586.673 38.848C589.093 37.2752 591.084 35.3969 592.737 33.1504M580.637 31.6504L592.737 33.1504M580.637 31.6504L586.08 24.817M580.637 31.6504L577.725 18.6504M586.08 24.817L596.569 25.8113M586.08 24.817L590.991 18.6504M586.08 24.817L584.829 12.7343M590.991 18.6504H598.59M590.991 18.6504V9.79926M540.416 0.650359H600.416M540.416 44.4837H600.416M600.416 50.817H540.416" stroke="#7F715A" stroke-width="1.3"/>
<path d="M810.583 44.4833L805.039 37.4833M796.25 12.7339C799.093 14.4088 801.421 16.3422 803.314 18.6499C805.625 21.4664 807.287 24.8405 808.446 28.9833C809.641 33.2554 810.3 38.3449 810.583 44.4833C803.702 43.2675 798.457 41.488 794.416 38.8476C792.009 37.2748 790.03 35.3965 788.386 33.1499M780.75 6.81662L790.122 18.6499M796.25 12.7339C794.426 11.6594 792.391 10.6913 790.122 9.79885C787.357 8.71082 784.245 7.73524 780.75 6.81662C781.239 11.2325 781.817 15.1585 782.565 18.6499C783.128 21.2746 783.786 23.6538 784.575 25.8109C785.6 28.6152 786.846 31.0443 788.386 33.1499M805.039 37.4833L794.416 38.8476M805.039 37.4833L800.419 31.6499M805.039 37.4833L808.446 28.9833M800.419 31.6499L788.386 33.1499M800.419 31.6499L795.006 24.8166M800.419 31.6499L803.314 18.6499M795.006 24.8166L784.575 25.8109M795.006 24.8166L790.122 18.6499M795.006 24.8166L796.25 12.7339M790.122 18.6499H782.565M790.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M810.416 44.4837L815.991 37.4837M824.829 12.7343C821.97 14.4093 819.629 16.3426 817.725 18.6504C815.402 21.4668 813.73 24.8409 812.565 28.9837C811.363 33.2558 810.7 38.3453 810.416 44.4837C817.335 43.2679 822.61 41.4884 826.673 38.848M840.416 6.81702L830.991 18.6504M780.416 6.81702H840.416C839.924 11.2329 839.343 15.1589 838.59 18.6504C838.025 21.2751 837.363 23.6542 836.569 25.8113C835.538 28.6157 834.286 31.0448 832.737 33.1504M824.829 12.7343C826.663 11.6598 828.71 10.6917 830.991 9.79926C833.772 8.71123 836.901 7.73565 840.416 6.81702M815.991 37.4837L826.673 38.848M815.991 37.4837L820.637 31.6504M815.991 37.4837L812.565 28.9837M826.673 38.848C829.093 37.2752 831.084 35.3969 832.737 33.1504M820.637 31.6504L832.737 33.1504M820.637 31.6504L826.08 24.817M820.637 31.6504L817.725 18.6504M826.08 24.817L836.569 25.8113M826.08 24.817L830.991 18.6504M826.08 24.817L824.829 12.7343M830.991 18.6504H838.59M830.991 18.6504V9.79926M780.416 0.650359H840.416M780.416 44.4837H840.416M840.416 50.817H780.416" stroke="#7F715A" stroke-width="1.3"/>
<path d="M810.583 44.4833L805.039 37.4833M796.25 12.7339C799.093 14.4088 801.421 16.3422 803.314 18.6499C805.625 21.4664 807.287 24.8405 808.446 28.9833C809.641 33.2554 810.3 38.3449 810.583 44.4833C803.702 43.2675 798.457 41.488 794.416 38.8476C792.009 37.2748 790.03 35.3965 788.386 33.1499M780.75 6.81662L790.122 18.6499M796.25 12.7339C794.426 11.6594 792.391 10.6913 790.122 9.79885C787.357 8.71082 784.245 7.73524 780.75 6.81662C781.239 11.2325 781.817 15.1585 782.565 18.6499C783.128 21.2746 783.786 23.6538 784.575 25.8109C785.6 28.6152 786.846 31.0443 788.386 33.1499M805.039 37.4833L794.416 38.8476M805.039 37.4833L800.419 31.6499M805.039 37.4833L808.446 28.9833M800.419 31.6499L788.386 33.1499M800.419 31.6499L795.006 24.8166M800.419 31.6499L803.314 18.6499M795.006 24.8166L784.575 25.8109M795.006 24.8166L790.122 18.6499M795.006 24.8166L796.25 12.7339M790.122 18.6499H782.565M790.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M810.416 44.4837L815.991 37.4837M824.829 12.7343C821.97 14.4093 819.629 16.3426 817.725 18.6504C815.402 21.4668 813.73 24.8409 812.565 28.9837C811.363 33.2558 810.7 38.3453 810.416 44.4837C817.335 43.2679 822.61 41.4884 826.673 38.848M840.416 6.81702L830.991 18.6504M780.416 6.81702H840.416C839.924 11.2329 839.343 15.1589 838.59 18.6504C838.025 21.2751 837.363 23.6542 836.569 25.8113C835.538 28.6157 834.286 31.0448 832.737 33.1504M824.829 12.7343C826.663 11.6598 828.71 10.6917 830.991 9.79926C833.772 8.71123 836.901 7.73565 840.416 6.81702M815.991 37.4837L826.673 38.848M815.991 37.4837L820.637 31.6504M815.991 37.4837L812.565 28.9837M826.673 38.848C829.093 37.2752 831.084 35.3969 832.737 33.1504M820.637 31.6504L832.737 33.1504M820.637 31.6504L826.08 24.817M820.637 31.6504L817.725 18.6504M826.08 24.817L836.569 25.8113M826.08 24.817L830.991 18.6504M826.08 24.817L824.829 12.7343M830.991 18.6504H838.59M830.991 18.6504V9.79926M780.416 0.650359H840.416M780.416 44.4837H840.416M840.416 50.817H780.416" stroke="#7F715A" stroke-width="1.3"/>
<path d="M210.583 44.4833L205.039 37.4833M196.25 12.7339C199.093 14.4088 201.421 16.3422 203.314 18.6499C205.625 21.4664 207.287 24.8405 208.446 28.9833C209.641 33.2554 210.3 38.3449 210.583 44.4833C203.702 43.2675 198.457 41.488 194.416 38.8476C192.009 37.2748 190.03 35.3965 188.386 33.1499M180.75 6.81662L190.122 18.6499M196.25 12.7339C194.426 11.6594 192.391 10.6913 190.122 9.79885C187.357 8.71082 184.245 7.73524 180.75 6.81662C181.239 11.2325 181.817 15.1585 182.565 18.6499C183.128 21.2746 183.786 23.6538 184.575 25.8109C185.6 28.6152 186.846 31.0443 188.386 33.1499M205.039 37.4833L194.416 38.8476M205.039 37.4833L200.419 31.6499M205.039 37.4833L208.446 28.9833M200.419 31.6499L188.386 33.1499M200.419 31.6499L195.006 24.8166M200.419 31.6499L203.314 18.6499M195.006 24.8166L184.575 25.8109M195.006 24.8166L190.122 18.6499M195.006 24.8166L196.25 12.7339M190.122 18.6499H182.565M190.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M210.416 44.4837L215.991 37.4837M224.829 12.7343C221.97 14.4093 219.629 16.3426 217.725 18.6504C215.402 21.4668 213.73 24.8409 212.565 28.9837C211.363 33.2558 210.7 38.3453 210.416 44.4837C217.335 43.2679 222.61 41.4884 226.673 38.848M240.416 6.81702L230.991 18.6504M180.416 6.81702H240.416C239.924 11.2329 239.343 15.1589 238.59 18.6504C238.025 21.2751 237.363 23.6542 236.569 25.8113C235.538 28.6157 234.286 31.0448 232.737 33.1504M224.829 12.7343C226.663 11.6598 228.71 10.6917 230.991 9.79926C233.772 8.71123 236.901 7.73565 240.416 6.81702M215.991 37.4837L226.673 38.848M215.991 37.4837L220.637 31.6504M215.991 37.4837L212.565 28.9837M226.673 38.848C229.093 37.2752 231.084 35.3969 232.737 33.1504M220.637 31.6504L232.737 33.1504M220.637 31.6504L226.08 24.817M220.637 31.6504L217.725 18.6504M226.08 24.817L236.569 25.8113M226.08 24.817L230.991 18.6504M226.08 24.817L224.829 12.7343M230.991 18.6504H238.59M230.991 18.6504V9.79926M180.416 0.650359H240.416M180.416 44.4837H240.416M240.416 50.817H180.416" stroke="#7F715A" stroke-width="1.3"/>
<path d="M450.583 44.4833L445.039 37.4833M436.25 12.7339C439.093 14.4088 441.421 16.3422 443.314 18.6499C445.625 21.4664 447.287 24.8405 448.446 28.9833C449.641 33.2554 450.3 38.3449 450.583 44.4833C443.702 43.2675 438.457 41.488 434.416 38.8476C432.009 37.2748 430.03 35.3965 428.386 33.1499M420.75 6.81662L430.122 18.6499M436.25 12.7339C434.426 11.6594 432.391 10.6913 430.122 9.79885C427.357 8.71082 424.245 7.73524 420.75 6.81662C421.239 11.2325 421.817 15.1585 422.565 18.6499C423.128 21.2746 423.786 23.6538 424.575 25.8109C425.6 28.6152 426.846 31.0443 428.386 33.1499M445.039 37.4833L434.416 38.8476M445.039 37.4833L440.419 31.6499M445.039 37.4833L448.446 28.9833M440.419 31.6499L428.386 33.1499M440.419 31.6499L435.006 24.8166M440.419 31.6499L443.314 18.6499M435.006 24.8166L424.575 25.8109M435.006 24.8166L430.122 18.6499M435.006 24.8166L436.25 12.7339M430.122 18.6499H422.565M430.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M450.417 44.4837L455.992 37.4837M464.83 12.7343C461.971 14.4093 459.63 16.3426 457.726 18.6504C455.402 21.4668 453.731 24.8409 452.566 28.9837C451.364 33.2558 450.701 38.3453 450.417 44.4837C457.336 43.2679 462.61 41.4884 466.673 38.848M480.417 6.81702L470.992 18.6504M420.417 6.81702H480.417C479.925 11.2329 479.343 15.1589 478.591 18.6504C478.025 21.2751 477.363 23.6542 476.57 25.8113C475.539 28.6157 474.287 31.0448 472.738 33.1504M464.83 12.7343C466.664 11.6598 468.711 10.6917 470.992 9.79926C473.773 8.71123 476.901 7.73565 480.417 6.81702M455.992 37.4837L466.673 38.848M455.992 37.4837L460.638 31.6504M455.992 37.4837L452.566 28.9837M466.673 38.848C469.094 37.2752 471.085 35.3969 472.738 33.1504M460.638 31.6504L472.738 33.1504M460.638 31.6504L466.08 24.817M460.638 31.6504L457.726 18.6504M466.08 24.817L476.57 25.8113M466.08 24.817L470.992 18.6504M466.08 24.817L464.83 12.7343M470.992 18.6504H478.591M470.992 18.6504V9.79926M420.417 0.650359H480.417M420.417 44.4837H480.417M480.417 50.817H420.417" stroke="#7F715A" stroke-width="1.3"/>
<path d="M690.583 44.4833L685.039 37.4833M676.25 12.7339C679.093 14.4088 681.421 16.3422 683.314 18.6499C685.625 21.4664 687.287 24.8405 688.446 28.9833C689.641 33.2554 690.3 38.3449 690.583 44.4833C683.702 43.2675 678.457 41.488 674.416 38.8476C672.009 37.2748 670.03 35.3965 668.386 33.1499M660.75 6.81662L670.122 18.6499M676.25 12.7339C674.426 11.6594 672.391 10.6913 670.122 9.79885C667.357 8.71082 664.245 7.73524 660.75 6.81662C661.239 11.2325 661.817 15.1585 662.565 18.6499C663.128 21.2746 663.786 23.6538 664.575 25.8109C665.6 28.6152 666.846 31.0443 668.386 33.1499M685.039 37.4833L674.416 38.8476M685.039 37.4833L680.419 31.6499M685.039 37.4833L688.446 28.9833M680.419 31.6499L668.386 33.1499M680.419 31.6499L675.006 24.8166M680.419 31.6499L683.314 18.6499M675.006 24.8166L664.575 25.8109M675.006 24.8166L670.122 18.6499M675.006 24.8166L676.25 12.7339M670.122 18.6499H662.565M670.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M690.417 44.4837L695.992 37.4837M704.83 12.7343C701.971 14.4093 699.63 16.3426 697.726 18.6504C695.402 21.4668 693.731 24.8409 692.566 28.9837C691.364 33.2558 690.701 38.3453 690.417 44.4837C697.336 43.2679 702.61 41.4884 706.673 38.848M720.417 6.81702L710.992 18.6504M660.417 6.81702H720.417C719.925 11.2329 719.343 15.1589 718.591 18.6504C718.025 21.2751 717.363 23.6542 716.57 25.8113C715.539 28.6157 714.287 31.0448 712.738 33.1504M704.83 12.7343C706.664 11.6598 708.711 10.6917 710.992 9.79926C713.773 8.71123 716.901 7.73565 720.417 6.81702M695.992 37.4837L706.673 38.848M695.992 37.4837L700.638 31.6504M695.992 37.4837L692.566 28.9837M706.673 38.848C709.094 37.2752 711.085 35.3969 712.738 33.1504M700.638 31.6504L712.738 33.1504M700.638 31.6504L706.08 24.817M700.638 31.6504L697.726 18.6504M706.08 24.817L716.57 25.8113M706.08 24.817L710.992 18.6504M706.08 24.817L704.83 12.7343M710.992 18.6504H718.591M710.992 18.6504V9.79926M660.417 0.650359H720.417M660.417 44.4837H720.417M720.417 50.817H660.417" stroke="#7F715A" stroke-width="1.3"/>
<path d="M930.583 44.4833L925.039 37.4833M916.25 12.7339C919.093 14.4088 921.421 16.3422 923.314 18.6499C925.625 21.4664 927.287 24.8405 928.446 28.9833C929.641 33.2554 930.3 38.3449 930.583 44.4833C923.702 43.2675 918.457 41.488 914.416 38.8476C912.009 37.2748 910.03 35.3965 908.386 33.1499M900.75 6.81662L910.122 18.6499M916.25 12.7339C914.426 11.6594 912.391 10.6913 910.122 9.79885C907.357 8.71082 904.245 7.73524 900.75 6.81662C901.239 11.2325 901.817 15.1585 902.565 18.6499C903.128 21.2746 903.786 23.6538 904.575 25.8109C905.6 28.6152 906.846 31.0443 908.386 33.1499M925.039 37.4833L914.416 38.8476M925.039 37.4833L920.419 31.6499M925.039 37.4833L928.446 28.9833M920.419 31.6499L908.386 33.1499M920.419 31.6499L915.006 24.8166M920.419 31.6499L923.314 18.6499M915.006 24.8166L904.575 25.8109M915.006 24.8166L910.122 18.6499M915.006 24.8166L916.25 12.7339M910.122 18.6499H902.565M910.122 18.6499V9.79885" stroke="#7F715A" stroke-width="1.3"/>
<path d="M930.417 44.4837L935.992 37.4837M944.83 12.7343C941.971 14.4093 939.63 16.3426 937.726 18.6504C935.402 21.4668 933.731 24.8409 932.566 28.9837C931.364 33.2558 930.701 38.3453 930.417 44.4837C937.336 43.2679 942.61 41.4884 946.673 38.848M960.417 6.81702L950.992 18.6504M900.417 6.81702H960.417C959.925 11.2329 959.343 15.1589 958.591 18.6504C958.025 21.2751 957.363 23.6542 956.57 25.8113C955.539 28.6157 954.287 31.0448 952.738 33.1504M944.83 12.7343C946.664 11.6598 948.711 10.6917 950.992 9.79926C953.773 8.71123 956.901 7.73565 960.417 6.81702M935.992 37.4837L946.673 38.848M935.992 37.4837L940.638 31.6504M935.992 37.4837L932.566 28.9837M946.673 38.848C949.094 37.2752 951.085 35.3969 952.738 33.1504M940.638 31.6504L952.738 33.1504M940.638 31.6504L946.08 24.817M940.638 31.6504L937.726 18.6504M946.08 24.817L956.57 25.8113M946.08 24.817L950.992 18.6504M946.08 24.817L944.83 12.7343M950.992 18.6504H958.591M950.992 18.6504V9.79926M900.417 0.650359H960.417M900.417 44.4837H960.417M960.417 50.817H900.417" stroke="#7F715A" stroke-width="1.3"/>
<path d="M990.584 44.4829L985.039 37.4829M976.25 12.7335C979.093 14.4085 981.422 16.3418 983.315 18.6496C985.625 21.466 987.288 24.8401 988.446 28.9829C989.641 33.255 990.301 38.3446 990.584 44.4829C983.703 43.2671 978.458 41.4876 974.417 38.8473C972.01 37.2744 970.03 35.3961 968.387 33.1496M960.75 6.81625L970.123 18.6496M976.25 12.7335C974.427 11.6591 972.391 10.6909 970.123 9.79849C967.357 8.71045 964.246 7.73488 960.75 6.81625C961.239 11.2321 961.818 15.1581 962.566 18.6496C963.128 21.2743 963.787 23.6534 964.575 25.8106C965.601 28.6149 966.846 31.044 968.387 33.1496M985.039 37.4829L974.417 38.8473M985.039 37.4829L980.419 31.6496M985.039 37.4829L988.446 28.9829M980.419 31.6496L968.387 33.1496M980.419 31.6496L975.007 24.8162M980.419 31.6496L983.315 18.6496M975.007 24.8162L964.575 25.8106M975.007 24.8162L970.123 18.6496M975.007 24.8162L976.25 12.7335M970.123 18.6496H962.566M970.123 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M990.417 44.4833L995.992 37.4833M1004.83 12.7339C1001.97 14.4089 999.63 16.3422 997.726 18.65C995.402 21.4664 993.731 24.8405 992.566 28.9833C991.364 33.2554 990.701 38.345 990.417 44.4833C997.336 43.2675 1002.61 41.488 1006.67 38.8477M1020.42 6.81666L1010.99 18.65M960.417 6.81666H1020.42C1019.92 11.2325 1019.34 15.1585 1018.59 18.65C1018.03 21.2747 1017.36 23.6538 1016.57 25.811C1015.54 28.6153 1014.29 31.0444 1012.74 33.15M1004.83 12.7339C1006.66 11.6595 1008.71 10.6914 1010.99 9.7989C1013.77 8.71086 1016.9 7.73529 1020.42 6.81666M995.992 37.4833L1006.67 38.8477M995.992 37.4833L1000.64 31.65M995.992 37.4833L992.566 28.9833M1006.67 38.8477C1009.09 37.2748 1011.08 35.3966 1012.74 33.15M1000.64 31.65L1012.74 33.15M1000.64 31.65L1006.08 24.8167M1000.64 31.65L997.726 18.65M1006.08 24.8167L1016.57 25.811M1006.08 24.8167L1010.99 18.65M1006.08 24.8167L1004.83 12.7339M1010.99 18.65H1018.59M1010.99 18.65V9.7989M960.417 0.649993H1020.42M960.417 44.4833H1020.42M1020.42 50.8167H960.417" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1230.58 44.4829L1225.04 37.4829M1216.25 12.7335C1219.09 14.4085 1221.42 16.3418 1223.31 18.6496C1225.62 21.466 1227.29 24.8401 1228.45 28.9829C1229.64 33.255 1230.3 38.3446 1230.58 44.4829C1223.7 43.2671 1218.46 41.4876 1214.42 38.8473C1212.01 37.2744 1210.03 35.3961 1208.39 33.1496M1200.75 6.81625L1210.12 18.6496M1216.25 12.7335C1214.43 11.6591 1212.39 10.6909 1210.12 9.79849C1207.36 8.71045 1204.25 7.73488 1200.75 6.81625C1201.24 11.2321 1201.82 15.1581 1202.57 18.6496C1203.13 21.2743 1203.79 23.6534 1204.57 25.8106C1205.6 28.6149 1206.85 31.044 1208.39 33.1496M1225.04 37.4829L1214.42 38.8473M1225.04 37.4829L1220.42 31.6496M1225.04 37.4829L1228.45 28.9829M1220.42 31.6496L1208.39 33.1496M1220.42 31.6496L1215.01 24.8162M1220.42 31.6496L1223.31 18.6496M1215.01 24.8162L1204.57 25.8106M1215.01 24.8162L1210.12 18.6496M1215.01 24.8162L1216.25 12.7335M1210.12 18.6496H1202.57M1210.12 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1230.42 44.4833L1235.99 37.4833M1244.83 12.7339C1241.97 14.4089 1239.63 16.3422 1237.73 18.65C1235.4 21.4664 1233.73 24.8405 1232.57 28.9833C1231.36 33.2554 1230.7 38.345 1230.42 44.4833C1237.34 43.2675 1242.61 41.488 1246.67 38.8477M1260.42 6.81666L1250.99 18.65M1200.42 6.81666H1260.42C1259.92 11.2325 1259.34 15.1585 1258.59 18.65C1258.02 21.2747 1257.36 23.6538 1256.57 25.811C1255.54 28.6153 1254.29 31.0444 1252.74 33.15M1244.83 12.7339C1246.66 11.6595 1248.71 10.6914 1250.99 9.7989C1253.77 8.71086 1256.9 7.73529 1260.42 6.81666M1235.99 37.4833L1246.67 38.8477M1235.99 37.4833L1240.64 31.65M1235.99 37.4833L1232.57 28.9833M1246.67 38.8477C1249.09 37.2748 1251.08 35.3966 1252.74 33.15M1240.64 31.65L1252.74 33.15M1240.64 31.65L1246.08 24.8167M1240.64 31.65L1237.73 18.65M1246.08 24.8167L1256.57 25.811M1246.08 24.8167L1250.99 18.65M1246.08 24.8167L1244.83 12.7339M1250.99 18.65H1258.59M1250.99 18.65V9.7989M1200.42 0.649993H1260.42M1200.42 44.4833H1260.42M1260.42 50.8167H1200.42" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1470.58 44.4829L1465.04 37.4829M1456.25 12.7335C1459.09 14.4085 1461.42 16.3418 1463.31 18.6496C1465.62 21.466 1467.29 24.8401 1468.45 28.9829C1469.64 33.255 1470.3 38.3446 1470.58 44.4829C1463.7 43.2671 1458.46 41.4876 1454.42 38.8473C1452.01 37.2744 1450.03 35.3961 1448.39 33.1496M1440.75 6.81625L1450.12 18.6496M1456.25 12.7335C1454.43 11.6591 1452.39 10.6909 1450.12 9.79849C1447.36 8.71045 1444.25 7.73488 1440.75 6.81625C1441.24 11.2321 1441.82 15.1581 1442.57 18.6496C1443.13 21.2743 1443.79 23.6534 1444.57 25.8106C1445.6 28.6149 1446.85 31.044 1448.39 33.1496M1465.04 37.4829L1454.42 38.8473M1465.04 37.4829L1460.42 31.6496M1465.04 37.4829L1468.45 28.9829M1460.42 31.6496L1448.39 33.1496M1460.42 31.6496L1455.01 24.8162M1460.42 31.6496L1463.31 18.6496M1455.01 24.8162L1444.57 25.8106M1455.01 24.8162L1450.12 18.6496M1455.01 24.8162L1456.25 12.7335M1450.12 18.6496H1442.57M1450.12 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1470.42 44.4833L1475.99 37.4833M1484.83 12.7339C1481.97 14.4089 1479.63 16.3422 1477.73 18.65C1475.4 21.4664 1473.73 24.8405 1472.57 28.9833C1471.36 33.2554 1470.7 38.345 1470.42 44.4833C1477.34 43.2675 1482.61 41.488 1486.67 38.8477M1500.42 6.81666L1490.99 18.65M1440.42 6.81666H1500.42C1499.92 11.2325 1499.34 15.1585 1498.59 18.65C1498.03 21.2747 1497.36 23.6538 1496.57 25.811C1495.54 28.6153 1494.29 31.0444 1492.74 33.15M1484.83 12.7339C1486.66 11.6595 1488.71 10.6914 1490.99 9.7989C1493.77 8.71086 1496.9 7.73529 1500.42 6.81666M1475.99 37.4833L1486.67 38.8477M1475.99 37.4833L1480.64 31.65M1475.99 37.4833L1472.57 28.9833M1486.67 38.8477C1489.09 37.2748 1491.08 35.3966 1492.74 33.15M1480.64 31.65L1492.74 33.15M1480.64 31.65L1486.08 24.8167M1480.64 31.65L1477.73 18.65M1486.08 24.8167L1496.57 25.811M1486.08 24.8167L1490.99 18.65M1486.08 24.8167L1484.83 12.7339M1490.99 18.65H1498.59M1490.99 18.65V9.7989M1440.42 0.649993H1500.42M1440.42 44.4833H1500.42M1500.42 50.8167H1440.42" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1710.58 44.4829L1705.04 37.4829M1696.25 12.7335C1699.09 14.4085 1701.42 16.3418 1703.31 18.6496C1705.62 21.466 1707.29 24.8401 1708.45 28.9829C1709.64 33.255 1710.3 38.3446 1710.58 44.4829C1703.7 43.2671 1698.46 41.4876 1694.42 38.8473C1692.01 37.2744 1690.03 35.3961 1688.39 33.1496M1680.75 6.81625L1690.12 18.6496M1696.25 12.7335C1694.43 11.6591 1692.39 10.6909 1690.12 9.79849C1687.36 8.71045 1684.25 7.73488 1680.75 6.81625C1681.24 11.2321 1681.82 15.1581 1682.57 18.6496C1683.13 21.2743 1683.79 23.6534 1684.57 25.8106C1685.6 28.6149 1686.85 31.044 1688.39 33.1496M1705.04 37.4829L1694.42 38.8473M1705.04 37.4829L1700.42 31.6496M1705.04 37.4829L1708.45 28.9829M1700.42 31.6496L1688.39 33.1496M1700.42 31.6496L1695.01 24.8162M1700.42 31.6496L1703.31 18.6496M1695.01 24.8162L1684.57 25.8106M1695.01 24.8162L1690.12 18.6496M1695.01 24.8162L1696.25 12.7335M1690.12 18.6496H1682.57M1690.12 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1710.42 44.4833L1715.99 37.4833M1724.83 12.7339C1721.97 14.4089 1719.63 16.3422 1717.73 18.65C1715.4 21.4664 1713.73 24.8405 1712.57 28.9833C1711.36 33.2554 1710.7 38.345 1710.42 44.4833C1717.34 43.2675 1722.61 41.488 1726.67 38.8477M1740.42 6.81666L1730.99 18.65M1680.42 6.81666H1740.42C1739.92 11.2325 1739.34 15.1585 1738.59 18.65C1738.03 21.2747 1737.36 23.6538 1736.57 25.811C1735.54 28.6153 1734.29 31.0444 1732.74 33.15M1724.83 12.7339C1726.66 11.6595 1728.71 10.6914 1730.99 9.7989C1733.77 8.71086 1736.9 7.73529 1740.42 6.81666M1715.99 37.4833L1726.67 38.8477M1715.99 37.4833L1720.64 31.65M1715.99 37.4833L1712.57 28.9833M1726.67 38.8477C1729.09 37.2748 1731.08 35.3966 1732.74 33.15M1720.64 31.65L1732.74 33.15M1720.64 31.65L1726.08 24.8167M1720.64 31.65L1717.73 18.65M1726.08 24.8167L1736.57 25.811M1726.08 24.8167L1730.99 18.65M1726.08 24.8167L1724.83 12.7339M1730.99 18.65H1738.59M1730.99 18.65V9.7989M1680.42 0.649993H1740.42M1680.42 44.4833H1740.42M1740.42 50.8167H1680.42" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1110.58 44.4829L1105.04 37.4829M1096.25 12.7335C1099.09 14.4085 1101.42 16.3418 1103.31 18.6496C1105.62 21.466 1107.29 24.8401 1108.45 28.9829C1109.64 33.255 1110.3 38.3446 1110.58 44.4829C1103.7 43.2671 1098.46 41.4876 1094.42 38.8473C1092.01 37.2744 1090.03 35.3961 1088.39 33.1496M1080.75 6.81625L1090.12 18.6496M1096.25 12.7335C1094.43 11.6591 1092.39 10.6909 1090.12 9.79849C1087.36 8.71045 1084.25 7.73488 1080.75 6.81625C1081.24 11.2321 1081.82 15.1581 1082.57 18.6496C1083.13 21.2743 1083.79 23.6534 1084.57 25.8106C1085.6 28.6149 1086.85 31.044 1088.39 33.1496M1105.04 37.4829L1094.42 38.8473M1105.04 37.4829L1100.42 31.6496M1105.04 37.4829L1108.45 28.9829M1100.42 31.6496L1088.39 33.1496M1100.42 31.6496L1095.01 24.8162M1100.42 31.6496L1103.31 18.6496M1095.01 24.8162L1084.57 25.8106M1095.01 24.8162L1090.12 18.6496M1095.01 24.8162L1096.25 12.7335M1090.12 18.6496H1082.57M1090.12 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1110.42 44.4833L1115.99 37.4833M1124.83 12.7339C1121.97 14.4089 1119.63 16.3422 1117.73 18.65C1115.4 21.4664 1113.73 24.8405 1112.57 28.9833C1111.36 33.2554 1110.7 38.345 1110.42 44.4833C1117.34 43.2675 1122.61 41.488 1126.67 38.8477M1140.42 6.81666L1130.99 18.65M1080.42 6.81666H1140.42C1139.92 11.2325 1139.34 15.1585 1138.59 18.65C1138.02 21.2747 1137.36 23.6538 1136.57 25.811C1135.54 28.6153 1134.29 31.0444 1132.74 33.15M1124.83 12.7339C1126.66 11.6595 1128.71 10.6914 1130.99 9.7989C1133.77 8.71086 1136.9 7.73529 1140.42 6.81666M1115.99 37.4833L1126.67 38.8477M1115.99 37.4833L1120.64 31.65M1115.99 37.4833L1112.57 28.9833M1126.67 38.8477C1129.09 37.2748 1131.08 35.3966 1132.74 33.15M1120.64 31.65L1132.74 33.15M1120.64 31.65L1126.08 24.8167M1120.64 31.65L1117.73 18.65M1126.08 24.8167L1136.57 25.811M1126.08 24.8167L1130.99 18.65M1126.08 24.8167L1124.83 12.7339M1130.99 18.65H1138.59M1130.99 18.65V9.7989M1080.42 0.649993H1140.42M1080.42 44.4833H1140.42M1140.42 50.8167H1080.42" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1350.58 44.4829L1345.04 37.4829M1336.25 12.7335C1339.09 14.4085 1341.42 16.3418 1343.31 18.6496C1345.62 21.466 1347.29 24.8401 1348.45 28.9829C1349.64 33.255 1350.3 38.3446 1350.58 44.4829C1343.7 43.2671 1338.46 41.4876 1334.42 38.8473C1332.01 37.2744 1330.03 35.3961 1328.39 33.1496M1320.75 6.81625L1330.12 18.6496M1336.25 12.7335C1334.43 11.6591 1332.39 10.6909 1330.12 9.79849C1327.36 8.71045 1324.25 7.73488 1320.75 6.81625C1321.24 11.2321 1321.82 15.1581 1322.57 18.6496C1323.13 21.2743 1323.79 23.6534 1324.57 25.8106C1325.6 28.6149 1326.85 31.044 1328.39 33.1496M1345.04 37.4829L1334.42 38.8473M1345.04 37.4829L1340.42 31.6496M1345.04 37.4829L1348.45 28.9829M1340.42 31.6496L1328.39 33.1496M1340.42 31.6496L1335.01 24.8162M1340.42 31.6496L1343.31 18.6496M1335.01 24.8162L1324.57 25.8106M1335.01 24.8162L1330.12 18.6496M1335.01 24.8162L1336.25 12.7335M1330.12 18.6496H1322.57M1330.12 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1350.42 44.4833L1355.99 37.4833M1364.83 12.7339C1361.97 14.4089 1359.63 16.3422 1357.73 18.65C1355.4 21.4664 1353.73 24.8405 1352.57 28.9833C1351.36 33.2554 1350.7 38.345 1350.42 44.4833C1357.34 43.2675 1362.61 41.488 1366.67 38.8477M1380.42 6.81666L1370.99 18.65M1320.42 6.81666H1380.42C1379.92 11.2325 1379.34 15.1585 1378.59 18.65C1378.03 21.2747 1377.36 23.6538 1376.57 25.811C1375.54 28.6153 1374.29 31.0444 1372.74 33.15M1364.83 12.7339C1366.66 11.6595 1368.71 10.6914 1370.99 9.7989C1373.77 8.71086 1376.9 7.73529 1380.42 6.81666M1355.99 37.4833L1366.67 38.8477M1355.99 37.4833L1360.64 31.65M1355.99 37.4833L1352.57 28.9833M1366.67 38.8477C1369.09 37.2748 1371.08 35.3966 1372.74 33.15M1360.64 31.65L1372.74 33.15M1360.64 31.65L1366.08 24.8167M1360.64 31.65L1357.73 18.65M1366.08 24.8167L1376.57 25.811M1366.08 24.8167L1370.99 18.65M1366.08 24.8167L1364.83 12.7339M1370.99 18.65H1378.59M1370.99 18.65V9.7989M1320.42 0.649993H1380.42M1320.42 44.4833H1380.42M1380.42 50.8167H1320.42" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1590.58 44.4829L1585.04 37.4829M1576.25 12.7335C1579.09 14.4085 1581.42 16.3418 1583.31 18.6496C1585.62 21.466 1587.29 24.8401 1588.45 28.9829C1589.64 33.255 1590.3 38.3446 1590.58 44.4829C1583.7 43.2671 1578.46 41.4876 1574.42 38.8473C1572.01 37.2744 1570.03 35.3961 1568.39 33.1496M1560.75 6.81625L1570.12 18.6496M1576.25 12.7335C1574.43 11.6591 1572.39 10.6909 1570.12 9.79849C1567.36 8.71045 1564.25 7.73488 1560.75 6.81625C1561.24 11.2321 1561.82 15.1581 1562.57 18.6496C1563.13 21.2743 1563.79 23.6534 1564.57 25.8106C1565.6 28.6149 1566.85 31.044 1568.39 33.1496M1585.04 37.4829L1574.42 38.8473M1585.04 37.4829L1580.42 31.6496M1585.04 37.4829L1588.45 28.9829M1580.42 31.6496L1568.39 33.1496M1580.42 31.6496L1575.01 24.8162M1580.42 31.6496L1583.31 18.6496M1575.01 24.8162L1564.57 25.8106M1575.01 24.8162L1570.12 18.6496M1575.01 24.8162L1576.25 12.7335M1570.12 18.6496H1562.57M1570.12 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1590.42 44.4833L1595.99 37.4833M1604.83 12.7339C1601.97 14.4089 1599.63 16.3422 1597.73 18.65C1595.4 21.4664 1593.73 24.8405 1592.57 28.9833C1591.36 33.2554 1590.7 38.345 1590.42 44.4833C1597.34 43.2675 1602.61 41.488 1606.67 38.8477M1620.42 6.81666L1610.99 18.65M1560.42 6.81666H1620.42C1619.92 11.2325 1619.34 15.1585 1618.59 18.65C1618.02 21.2747 1617.36 23.6538 1616.57 25.811C1615.54 28.6153 1614.29 31.0444 1612.74 33.15M1604.83 12.7339C1606.66 11.6595 1608.71 10.6914 1610.99 9.7989C1613.77 8.71086 1616.9 7.73529 1620.42 6.81666M1595.99 37.4833L1606.67 38.8477M1595.99 37.4833L1600.64 31.65M1595.99 37.4833L1592.57 28.9833M1606.67 38.8477C1609.09 37.2748 1611.08 35.3966 1612.74 33.15M1600.64 31.65L1612.74 33.15M1600.64 31.65L1606.08 24.8167M1600.64 31.65L1597.73 18.65M1606.08 24.8167L1616.57 25.811M1606.08 24.8167L1610.99 18.65M1606.08 24.8167L1604.83 12.7339M1610.99 18.65H1618.59M1610.99 18.65V9.7989M1560.42 0.649993H1620.42M1560.42 44.4833H1620.42M1620.42 50.8167H1560.42" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1830.58 44.4829L1825.04 37.4829M1816.25 12.7335C1819.09 14.4085 1821.42 16.3418 1823.31 18.6496C1825.62 21.466 1827.29 24.8401 1828.45 28.9829C1829.64 33.255 1830.3 38.3446 1830.58 44.4829C1823.7 43.2671 1818.46 41.4876 1814.42 38.8473C1812.01 37.2744 1810.03 35.3961 1808.39 33.1496M1800.75 6.81625L1810.12 18.6496M1816.25 12.7335C1814.43 11.6591 1812.39 10.6909 1810.12 9.79849C1807.36 8.71045 1804.25 7.73488 1800.75 6.81625C1801.24 11.2321 1801.82 15.1581 1802.57 18.6496C1803.13 21.2743 1803.79 23.6534 1804.57 25.8106C1805.6 28.6149 1806.85 31.044 1808.39 33.1496M1825.04 37.4829L1814.42 38.8473M1825.04 37.4829L1820.42 31.6496M1825.04 37.4829L1828.45 28.9829M1820.42 31.6496L1808.39 33.1496M1820.42 31.6496L1815.01 24.8162M1820.42 31.6496L1823.31 18.6496M1815.01 24.8162L1804.57 25.8106M1815.01 24.8162L1810.12 18.6496M1815.01 24.8162L1816.25 12.7335M1810.12 18.6496H1802.57M1810.12 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1830.42 44.4833L1835.99 37.4833M1844.83 12.7339C1841.97 14.4089 1839.63 16.3422 1837.73 18.65C1835.4 21.4664 1833.73 24.8405 1832.57 28.9833C1831.36 33.2554 1830.7 38.345 1830.42 44.4833C1837.34 43.2675 1842.61 41.488 1846.67 38.8477M1860.42 6.81666L1850.99 18.65M1800.42 6.81666H1860.42C1859.92 11.2325 1859.34 15.1585 1858.59 18.65C1858.02 21.2747 1857.36 23.6538 1856.57 25.811C1855.54 28.6153 1854.29 31.0444 1852.74 33.15M1844.83 12.7339C1846.66 11.6595 1848.71 10.6914 1850.99 9.7989C1853.77 8.71086 1856.9 7.73529 1860.42 6.81666M1835.99 37.4833L1846.67 38.8477M1835.99 37.4833L1840.64 31.65M1835.99 37.4833L1832.57 28.9833M1846.67 38.8477C1849.09 37.2748 1851.08 35.3966 1852.74 33.15M1840.64 31.65L1852.74 33.15M1840.64 31.65L1846.08 24.8167M1840.64 31.65L1837.73 18.65M1846.08 24.8167L1856.57 25.811M1846.08 24.8167L1850.99 18.65M1846.08 24.8167L1844.83 12.7339M1850.99 18.65H1858.59M1850.99 18.65V9.7989M1800.42 0.649993H1860.42M1800.42 44.4833H1860.42M1860.42 50.8167H1800.42" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1050.58 44.4829L1045.04 37.4829M1036.25 12.7335C1039.09 14.4085 1041.42 16.3418 1043.31 18.6496C1045.62 21.466 1047.29 24.8401 1048.45 28.9829C1049.64 33.255 1050.3 38.3446 1050.58 44.4829C1043.7 43.2671 1038.46 41.4876 1034.42 38.8473C1032.01 37.2744 1030.03 35.3961 1028.39 33.1496M1020.75 6.81625L1030.12 18.6496M1036.25 12.7335C1034.43 11.6591 1032.39 10.6909 1030.12 9.79849C1027.36 8.71045 1024.25 7.73488 1020.75 6.81625C1021.24 11.2321 1021.82 15.1581 1022.57 18.6496C1023.13 21.2743 1023.79 23.6534 1024.57 25.8106C1025.6 28.6149 1026.85 31.044 1028.39 33.1496M1045.04 37.4829L1034.42 38.8473M1045.04 37.4829L1040.42 31.6496M1045.04 37.4829L1048.45 28.9829M1040.42 31.6496L1028.39 33.1496M1040.42 31.6496L1035.01 24.8162M1040.42 31.6496L1043.31 18.6496M1035.01 24.8162L1024.57 25.8106M1035.01 24.8162L1030.12 18.6496M1035.01 24.8162L1036.25 12.7335M1030.12 18.6496H1022.57M1030.12 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1050.42 44.4833L1055.99 37.4833M1064.83 12.7339C1061.97 14.4089 1059.63 16.3422 1057.73 18.65C1055.4 21.4664 1053.73 24.8405 1052.57 28.9833C1051.36 33.2554 1050.7 38.345 1050.42 44.4833C1057.34 43.2675 1062.61 41.488 1066.67 38.8477M1080.42 6.81666L1070.99 18.65M1020.42 6.81666H1080.42C1079.92 11.2325 1079.34 15.1585 1078.59 18.65C1078.03 21.2747 1077.36 23.6538 1076.57 25.811C1075.54 28.6153 1074.29 31.0444 1072.74 33.15M1064.83 12.7339C1066.66 11.6595 1068.71 10.6914 1070.99 9.7989C1073.77 8.71086 1076.9 7.73529 1080.42 6.81666M1055.99 37.4833L1066.67 38.8477M1055.99 37.4833L1060.64 31.65M1055.99 37.4833L1052.57 28.9833M1066.67 38.8477C1069.09 37.2748 1071.08 35.3966 1072.74 33.15M1060.64 31.65L1072.74 33.15M1060.64 31.65L1066.08 24.8167M1060.64 31.65L1057.73 18.65M1066.08 24.8167L1076.57 25.811M1066.08 24.8167L1070.99 18.65M1066.08 24.8167L1064.83 12.7339M1070.99 18.65H1078.59M1070.99 18.65V9.7989M1020.42 0.649993H1080.42M1020.42 44.4833H1080.42M1080.42 50.8167H1020.42" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1290.58 44.4829L1285.04 37.4829M1276.25 12.7335C1279.09 14.4085 1281.42 16.3418 1283.31 18.6496C1285.62 21.466 1287.29 24.8401 1288.45 28.9829C1289.64 33.255 1290.3 38.3446 1290.58 44.4829C1283.7 43.2671 1278.46 41.4876 1274.42 38.8473C1272.01 37.2744 1270.03 35.3961 1268.39 33.1496M1260.75 6.81625L1270.12 18.6496M1276.25 12.7335C1274.43 11.6591 1272.39 10.6909 1270.12 9.79849C1267.36 8.71045 1264.25 7.73488 1260.75 6.81625C1261.24 11.2321 1261.82 15.1581 1262.57 18.6496C1263.13 21.2743 1263.79 23.6534 1264.57 25.8106C1265.6 28.6149 1266.85 31.044 1268.39 33.1496M1285.04 37.4829L1274.42 38.8473M1285.04 37.4829L1280.42 31.6496M1285.04 37.4829L1288.45 28.9829M1280.42 31.6496L1268.39 33.1496M1280.42 31.6496L1275.01 24.8162M1280.42 31.6496L1283.31 18.6496M1275.01 24.8162L1264.57 25.8106M1275.01 24.8162L1270.12 18.6496M1275.01 24.8162L1276.25 12.7335M1270.12 18.6496H1262.57M1270.12 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1290.42 44.4833L1295.99 37.4833M1304.83 12.7339C1301.97 14.4089 1299.63 16.3422 1297.73 18.65C1295.4 21.4664 1293.73 24.8405 1292.57 28.9833C1291.36 33.2554 1290.7 38.345 1290.42 44.4833C1297.34 43.2675 1302.61 41.488 1306.67 38.8477M1320.42 6.81666L1310.99 18.65M1260.42 6.81666H1320.42C1319.92 11.2325 1319.34 15.1585 1318.59 18.65C1318.02 21.2747 1317.36 23.6538 1316.57 25.811C1315.54 28.6153 1314.29 31.0444 1312.74 33.15M1304.83 12.7339C1306.66 11.6595 1308.71 10.6914 1310.99 9.7989C1313.77 8.71086 1316.9 7.73529 1320.42 6.81666M1295.99 37.4833L1306.67 38.8477M1295.99 37.4833L1300.64 31.65M1295.99 37.4833L1292.57 28.9833M1306.67 38.8477C1309.09 37.2748 1311.08 35.3966 1312.74 33.15M1300.64 31.65L1312.74 33.15M1300.64 31.65L1306.08 24.8167M1300.64 31.65L1297.73 18.65M1306.08 24.8167L1316.57 25.811M1306.08 24.8167L1310.99 18.65M1306.08 24.8167L1304.83 12.7339M1310.99 18.65H1318.59M1310.99 18.65V9.7989M1260.42 0.649993H1320.42M1260.42 44.4833H1320.42M1320.42 50.8167H1260.42" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1530.58 44.4829L1525.04 37.4829M1516.25 12.7335C1519.09 14.4085 1521.42 16.3418 1523.31 18.6496C1525.62 21.466 1527.29 24.8401 1528.45 28.9829C1529.64 33.255 1530.3 38.3446 1530.58 44.4829C1523.7 43.2671 1518.46 41.4876 1514.42 38.8473C1512.01 37.2744 1510.03 35.3961 1508.39 33.1496M1500.75 6.81625L1510.12 18.6496M1516.25 12.7335C1514.43 11.6591 1512.39 10.6909 1510.12 9.79849C1507.36 8.71045 1504.25 7.73488 1500.75 6.81625C1501.24 11.2321 1501.82 15.1581 1502.57 18.6496C1503.13 21.2743 1503.79 23.6534 1504.57 25.8106C1505.6 28.6149 1506.85 31.044 1508.39 33.1496M1525.04 37.4829L1514.42 38.8473M1525.04 37.4829L1520.42 31.6496M1525.04 37.4829L1528.45 28.9829M1520.42 31.6496L1508.39 33.1496M1520.42 31.6496L1515.01 24.8162M1520.42 31.6496L1523.31 18.6496M1515.01 24.8162L1504.57 25.8106M1515.01 24.8162L1510.12 18.6496M1515.01 24.8162L1516.25 12.7335M1510.12 18.6496H1502.57M1510.12 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1530.42 44.4833L1535.99 37.4833M1544.83 12.7339C1541.97 14.4089 1539.63 16.3422 1537.73 18.65C1535.4 21.4664 1533.73 24.8405 1532.57 28.9833C1531.36 33.2554 1530.7 38.345 1530.42 44.4833C1537.34 43.2675 1542.61 41.488 1546.67 38.8477M1560.42 6.81666L1550.99 18.65M1500.42 6.81666H1560.42C1559.92 11.2325 1559.34 15.1585 1558.59 18.65C1558.02 21.2747 1557.36 23.6538 1556.57 25.811C1555.54 28.6153 1554.29 31.0444 1552.74 33.15M1544.83 12.7339C1546.66 11.6595 1548.71 10.6914 1550.99 9.7989C1553.77 8.71086 1556.9 7.73529 1560.42 6.81666M1535.99 37.4833L1546.67 38.8477M1535.99 37.4833L1540.64 31.65M1535.99 37.4833L1532.57 28.9833M1546.67 38.8477C1549.09 37.2748 1551.08 35.3966 1552.74 33.15M1540.64 31.65L1552.74 33.15M1540.64 31.65L1546.08 24.8167M1540.64 31.65L1537.73 18.65M1546.08 24.8167L1556.57 25.811M1546.08 24.8167L1550.99 18.65M1546.08 24.8167L1544.83 12.7339M1550.99 18.65H1558.59M1550.99 18.65V9.7989M1500.42 0.649993H1560.42M1500.42 44.4833H1560.42M1560.42 50.8167H1500.42" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1770.58 44.4829L1765.04 37.4829M1756.25 12.7335C1759.09 14.4085 1761.42 16.3418 1763.31 18.6496C1765.62 21.466 1767.29 24.8401 1768.45 28.9829C1769.64 33.255 1770.3 38.3446 1770.58 44.4829C1763.7 43.2671 1758.46 41.4876 1754.42 38.8473C1752.01 37.2744 1750.03 35.3961 1748.39 33.1496M1740.75 6.81625L1750.12 18.6496M1756.25 12.7335C1754.43 11.6591 1752.39 10.6909 1750.12 9.79849C1747.36 8.71045 1744.25 7.73488 1740.75 6.81625C1741.24 11.2321 1741.82 15.1581 1742.57 18.6496C1743.13 21.2743 1743.79 23.6534 1744.57 25.8106C1745.6 28.6149 1746.85 31.044 1748.39 33.1496M1765.04 37.4829L1754.42 38.8473M1765.04 37.4829L1760.42 31.6496M1765.04 37.4829L1768.45 28.9829M1760.42 31.6496L1748.39 33.1496M1760.42 31.6496L1755.01 24.8162M1760.42 31.6496L1763.31 18.6496M1755.01 24.8162L1744.57 25.8106M1755.01 24.8162L1750.12 18.6496M1755.01 24.8162L1756.25 12.7335M1750.12 18.6496H1742.57M1750.12 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1770.42 44.4833L1775.99 37.4833M1784.83 12.7339C1781.97 14.4089 1779.63 16.3422 1777.73 18.65C1775.4 21.4664 1773.73 24.8405 1772.57 28.9833C1771.36 33.2554 1770.7 38.345 1770.42 44.4833C1777.34 43.2675 1782.61 41.488 1786.67 38.8477M1800.42 6.81666L1790.99 18.65M1740.42 6.81666H1800.42C1799.92 11.2325 1799.34 15.1585 1798.59 18.65C1798.02 21.2747 1797.36 23.6538 1796.57 25.811C1795.54 28.6153 1794.29 31.0444 1792.74 33.15M1784.83 12.7339C1786.66 11.6595 1788.71 10.6914 1790.99 9.7989C1793.77 8.71086 1796.9 7.73529 1800.42 6.81666M1775.99 37.4833L1786.67 38.8477M1775.99 37.4833L1780.64 31.65M1775.99 37.4833L1772.57 28.9833M1786.67 38.8477C1789.09 37.2748 1791.08 35.3966 1792.74 33.15M1780.64 31.65L1792.74 33.15M1780.64 31.65L1786.08 24.8167M1780.64 31.65L1777.73 18.65M1786.08 24.8167L1796.57 25.811M1786.08 24.8167L1790.99 18.65M1786.08 24.8167L1784.83 12.7339M1790.99 18.65H1798.59M1790.99 18.65V9.7989M1740.42 0.649993H1800.42M1740.42 44.4833H1800.42M1800.42 50.8167H1740.42" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1170.58 44.4829L1165.04 37.4829M1156.25 12.7335C1159.09 14.4085 1161.42 16.3418 1163.31 18.6496C1165.62 21.466 1167.29 24.8401 1168.45 28.9829C1169.64 33.255 1170.3 38.3446 1170.58 44.4829C1163.7 43.2671 1158.46 41.4876 1154.42 38.8473C1152.01 37.2744 1150.03 35.3961 1148.39 33.1496M1140.75 6.81625L1150.12 18.6496M1156.25 12.7335C1154.43 11.6591 1152.39 10.6909 1150.12 9.79849C1147.36 8.71045 1144.25 7.73488 1140.75 6.81625C1141.24 11.2321 1141.82 15.1581 1142.57 18.6496C1143.13 21.2743 1143.79 23.6534 1144.57 25.8106C1145.6 28.6149 1146.85 31.044 1148.39 33.1496M1165.04 37.4829L1154.42 38.8473M1165.04 37.4829L1160.42 31.6496M1165.04 37.4829L1168.45 28.9829M1160.42 31.6496L1148.39 33.1496M1160.42 31.6496L1155.01 24.8162M1160.42 31.6496L1163.31 18.6496M1155.01 24.8162L1144.57 25.8106M1155.01 24.8162L1150.12 18.6496M1155.01 24.8162L1156.25 12.7335M1150.12 18.6496H1142.57M1150.12 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1170.42 44.4833L1175.99 37.4833M1184.83 12.7339C1181.97 14.4089 1179.63 16.3422 1177.73 18.65C1175.4 21.4664 1173.73 24.8405 1172.57 28.9833C1171.36 33.2554 1170.7 38.345 1170.42 44.4833C1177.34 43.2675 1182.61 41.488 1186.67 38.8477M1200.42 6.81666L1190.99 18.65M1140.42 6.81666H1200.42C1199.92 11.2325 1199.34 15.1585 1198.59 18.65C1198.02 21.2747 1197.36 23.6538 1196.57 25.811C1195.54 28.6153 1194.29 31.0444 1192.74 33.15M1184.83 12.7339C1186.66 11.6595 1188.71 10.6914 1190.99 9.7989C1193.77 8.71086 1196.9 7.73529 1200.42 6.81666M1175.99 37.4833L1186.67 38.8477M1175.99 37.4833L1180.64 31.65M1175.99 37.4833L1172.57 28.9833M1186.67 38.8477C1189.09 37.2748 1191.08 35.3966 1192.74 33.15M1180.64 31.65L1192.74 33.15M1180.64 31.65L1186.08 24.8167M1180.64 31.65L1177.73 18.65M1186.08 24.8167L1196.57 25.811M1186.08 24.8167L1190.99 18.65M1186.08 24.8167L1184.83 12.7339M1190.99 18.65H1198.59M1190.99 18.65V9.7989M1140.42 0.649993H1200.42M1140.42 44.4833H1200.42M1200.42 50.8167H1140.42" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1410.58 44.4829L1405.04 37.4829M1396.25 12.7335C1399.09 14.4085 1401.42 16.3418 1403.31 18.6496C1405.62 21.466 1407.29 24.8401 1408.45 28.9829C1409.64 33.255 1410.3 38.3446 1410.58 44.4829C1403.7 43.2671 1398.46 41.4876 1394.42 38.8473C1392.01 37.2744 1390.03 35.3961 1388.39 33.1496M1380.75 6.81625L1390.12 18.6496M1396.25 12.7335C1394.43 11.6591 1392.39 10.6909 1390.12 9.79849C1387.36 8.71045 1384.25 7.73488 1380.75 6.81625C1381.24 11.2321 1381.82 15.1581 1382.57 18.6496C1383.13 21.2743 1383.79 23.6534 1384.57 25.8106C1385.6 28.6149 1386.85 31.044 1388.39 33.1496M1405.04 37.4829L1394.42 38.8473M1405.04 37.4829L1400.42 31.6496M1405.04 37.4829L1408.45 28.9829M1400.42 31.6496L1388.39 33.1496M1400.42 31.6496L1395.01 24.8162M1400.42 31.6496L1403.31 18.6496M1395.01 24.8162L1384.57 25.8106M1395.01 24.8162L1390.12 18.6496M1395.01 24.8162L1396.25 12.7335M1390.12 18.6496H1382.57M1390.12 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1410.42 44.4833L1415.99 37.4833M1424.83 12.7339C1421.97 14.4089 1419.63 16.3422 1417.73 18.65C1415.4 21.4664 1413.73 24.8405 1412.57 28.9833C1411.36 33.2554 1410.7 38.345 1410.42 44.4833C1417.34 43.2675 1422.61 41.488 1426.67 38.8477M1440.42 6.81666L1430.99 18.65M1380.42 6.81666H1440.42C1439.92 11.2325 1439.34 15.1585 1438.59 18.65C1438.03 21.2747 1437.36 23.6538 1436.57 25.811C1435.54 28.6153 1434.29 31.0444 1432.74 33.15M1424.83 12.7339C1426.66 11.6595 1428.71 10.6914 1430.99 9.7989C1433.77 8.71086 1436.9 7.73529 1440.42 6.81666M1415.99 37.4833L1426.67 38.8477M1415.99 37.4833L1420.64 31.65M1415.99 37.4833L1412.57 28.9833M1426.67 38.8477C1429.09 37.2748 1431.08 35.3966 1432.74 33.15M1420.64 31.65L1432.74 33.15M1420.64 31.65L1426.08 24.8167M1420.64 31.65L1417.73 18.65M1426.08 24.8167L1436.57 25.811M1426.08 24.8167L1430.99 18.65M1426.08 24.8167L1424.83 12.7339M1430.99 18.65H1438.59M1430.99 18.65V9.7989M1380.42 0.649993H1440.42M1380.42 44.4833H1440.42M1440.42 50.8167H1380.42" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1650.58 44.4829L1645.04 37.4829M1636.25 12.7335C1639.09 14.4085 1641.42 16.3418 1643.31 18.6496C1645.62 21.466 1647.29 24.8401 1648.45 28.9829C1649.64 33.255 1650.3 38.3446 1650.58 44.4829C1643.7 43.2671 1638.46 41.4876 1634.42 38.8473C1632.01 37.2744 1630.03 35.3961 1628.39 33.1496M1620.75 6.81625L1630.12 18.6496M1636.25 12.7335C1634.43 11.6591 1632.39 10.6909 1630.12 9.79849C1627.36 8.71045 1624.25 7.73488 1620.75 6.81625C1621.24 11.2321 1621.82 15.1581 1622.57 18.6496C1623.13 21.2743 1623.79 23.6534 1624.57 25.8106C1625.6 28.6149 1626.85 31.044 1628.39 33.1496M1645.04 37.4829L1634.42 38.8473M1645.04 37.4829L1640.42 31.6496M1645.04 37.4829L1648.45 28.9829M1640.42 31.6496L1628.39 33.1496M1640.42 31.6496L1635.01 24.8162M1640.42 31.6496L1643.31 18.6496M1635.01 24.8162L1624.57 25.8106M1635.01 24.8162L1630.12 18.6496M1635.01 24.8162L1636.25 12.7335M1630.12 18.6496H1622.57M1630.12 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1650.42 44.4833L1655.99 37.4833M1664.83 12.7339C1661.97 14.4089 1659.63 16.3422 1657.73 18.65C1655.4 21.4664 1653.73 24.8405 1652.57 28.9833C1651.36 33.2554 1650.7 38.345 1650.42 44.4833C1657.34 43.2675 1662.61 41.488 1666.67 38.8477M1680.42 6.81666L1670.99 18.65M1620.42 6.81666H1680.42C1679.92 11.2325 1679.34 15.1585 1678.59 18.65C1678.03 21.2747 1677.36 23.6538 1676.57 25.811C1675.54 28.6153 1674.29 31.0444 1672.74 33.15M1664.83 12.7339C1666.66 11.6595 1668.71 10.6914 1670.99 9.7989C1673.77 8.71086 1676.9 7.73529 1680.42 6.81666M1655.99 37.4833L1666.67 38.8477M1655.99 37.4833L1660.64 31.65M1655.99 37.4833L1652.57 28.9833M1666.67 38.8477C1669.09 37.2748 1671.08 35.3966 1672.74 33.15M1660.64 31.65L1672.74 33.15M1660.64 31.65L1666.08 24.8167M1660.64 31.65L1657.73 18.65M1666.08 24.8167L1676.57 25.811M1666.08 24.8167L1670.99 18.65M1666.08 24.8167L1664.83 12.7339M1670.99 18.65H1678.59M1670.99 18.65V9.7989M1620.42 0.649993H1680.42M1620.42 44.4833H1680.42M1680.42 50.8167H1620.42" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1890.58 44.4829L1885.04 37.4829M1876.25 12.7335C1879.09 14.4085 1881.42 16.3418 1883.31 18.6496C1885.62 21.466 1887.29 24.8401 1888.45 28.9829C1889.64 33.255 1890.3 38.3446 1890.58 44.4829C1883.7 43.2671 1878.46 41.4876 1874.42 38.8473C1872.01 37.2744 1870.03 35.3961 1868.39 33.1496M1860.75 6.81625L1870.12 18.6496M1876.25 12.7335C1874.43 11.6591 1872.39 10.6909 1870.12 9.79849C1867.36 8.71045 1864.25 7.73488 1860.75 6.81625C1861.24 11.2321 1861.82 15.1581 1862.57 18.6496C1863.13 21.2743 1863.79 23.6534 1864.57 25.8106C1865.6 28.6149 1866.85 31.044 1868.39 33.1496M1885.04 37.4829L1874.42 38.8473M1885.04 37.4829L1880.42 31.6496M1885.04 37.4829L1888.45 28.9829M1880.42 31.6496L1868.39 33.1496M1880.42 31.6496L1875.01 24.8162M1880.42 31.6496L1883.31 18.6496M1875.01 24.8162L1864.57 25.8106M1875.01 24.8162L1870.12 18.6496M1875.01 24.8162L1876.25 12.7335M1870.12 18.6496H1862.57M1870.12 18.6496V9.79849" stroke="#7F715A" stroke-width="1.3"/>
<path d="M1890.42 44.4833L1895.99 37.4833M1904.83 12.7339C1901.97 14.4089 1899.63 16.3422 1897.73 18.65C1895.4 21.4664 1893.73 24.8405 1892.57 28.9833C1891.36 33.2554 1890.7 38.345 1890.42 44.4833C1897.34 43.2675 1902.61 41.488 1906.67 38.8477M1920.42 6.81666L1910.99 18.65M1860.42 6.81666H1920.42C1919.92 11.2325 1919.34 15.1585 1918.59 18.65C1918.03 21.2747 1917.36 23.6538 1916.57 25.811C1915.54 28.6153 1914.29 31.0444 1912.74 33.15M1904.83 12.7339C1906.66 11.6595 1908.71 10.6914 1910.99 9.7989C1913.77 8.71086 1916.9 7.73529 1920.42 6.81666M1895.99 37.4833L1906.67 38.8477M1895.99 37.4833L1900.64 31.65M1895.99 37.4833L1892.57 28.9833M1906.67 38.8477C1909.09 37.2748 1911.08 35.3966 1912.74 33.15M1900.64 31.65L1912.74 33.15M1900.64 31.65L1906.08 24.8167M1900.64 31.65L1897.73 18.65M1906.08 24.8167L1916.57 25.811M1906.08 24.8167L1910.99 18.65M1906.08 24.8167L1904.83 12.7339M1910.99 18.65H1918.59M1910.99 18.65V9.7989M1860.42 0.649993H1920.42M1860.42 44.4833H1920.42M1920.42 50.8167H1860.42" stroke="#7F715A" stroke-width="1.3"/>
</svg>
```

## File: pnpm-workspace.yaml
```yaml
packages:
  - '.'
```

## File: tsconfig.json
```json
{
  "compilerOptions": {
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

## File: tsconfig.tsbuildinfo
```
{"fileNames":["./node_modules/typescript/lib/lib.es5.d.ts","./node_modules/typescript/lib/lib.es2015.d.ts","./node_modules/typescript/lib/lib.es2016.d.ts","./node_modules/typescript/lib/lib.es2017.d.ts","./node_modules/typescript/lib/lib.es2018.d.ts","./node_modules/typescript/lib/lib.es2019.d.ts","./node_modules/typescript/lib/lib.es2020.d.ts","./node_modules/typescript/lib/lib.es2021.d.ts","./node_modules/typescript/lib/lib.es2022.d.ts","./node_modules/typescript/lib/lib.es2023.d.ts","./node_modules/typescript/lib/lib.es2024.d.ts","./node_modules/typescript/lib/lib.esnext.d.ts","./node_modules/typescript/lib/lib.dom.d.ts","./node_modules/typescript/lib/lib.dom.iterable.d.ts","./node_modules/typescript/lib/lib.es2015.core.d.ts","./node_modules/typescript/lib/lib.es2015.collection.d.ts","./node_modules/typescript/lib/lib.es2015.generator.d.ts","./node_modules/typescript/lib/lib.es2015.iterable.d.ts","./node_modules/typescript/lib/lib.es2015.promise.d.ts","./node_modules/typescript/lib/lib.es2015.proxy.d.ts","./node_modules/typescript/lib/lib.es2015.reflect.d.ts","./node_modules/typescript/lib/lib.es2015.symbol.d.ts","./node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts","./node_modules/typescript/lib/lib.es2016.array.include.d.ts","./node_modules/typescript/lib/lib.es2016.intl.d.ts","./node_modules/typescript/lib/lib.es2017.arraybuffer.d.ts","./node_modules/typescript/lib/lib.es2017.date.d.ts","./node_modules/typescript/lib/lib.es2017.object.d.ts","./node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts","./node_modules/typescript/lib/lib.es2017.string.d.ts","./node_modules/typescript/lib/lib.es2017.intl.d.ts","./node_modules/typescript/lib/lib.es2017.typedarrays.d.ts","./node_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts","./node_modules/typescript/lib/lib.es2018.asynciterable.d.ts","./node_modules/typescript/lib/lib.es2018.intl.d.ts","./node_modules/typescript/lib/lib.es2018.promise.d.ts","./node_modules/typescript/lib/lib.es2018.regexp.d.ts","./node_modules/typescript/lib/lib.es2019.array.d.ts","./node_modules/typescript/lib/lib.es2019.object.d.ts","./node_modules/typescript/lib/lib.es2019.string.d.ts","./node_modules/typescript/lib/lib.es2019.symbol.d.ts","./node_modules/typescript/lib/lib.es2019.intl.d.ts","./node_modules/typescript/lib/lib.es2020.bigint.d.ts","./node_modules/typescript/lib/lib.es2020.date.d.ts","./node_modules/typescript/lib/lib.es2020.promise.d.ts","./node_modules/typescript/lib/lib.es2020.sharedmemory.d.ts","./node_modules/typescript/lib/lib.es2020.string.d.ts","./node_modules/typescript/lib/lib.es2020.symbol.wellknown.d.ts","./node_modules/typescript/lib/lib.es2020.intl.d.ts","./node_modules/typescript/lib/lib.es2020.number.d.ts","./node_modules/typescript/lib/lib.es2021.promise.d.ts","./node_modules/typescript/lib/lib.es2021.string.d.ts","./node_modules/typescript/lib/lib.es2021.weakref.d.ts","./node_modules/typescript/lib/lib.es2021.intl.d.ts","./node_modules/typescript/lib/lib.es2022.array.d.ts","./node_modules/typescript/lib/lib.es2022.error.d.ts","./node_modules/typescript/lib/lib.es2022.intl.d.ts","./node_modules/typescript/lib/lib.es2022.object.d.ts","./node_modules/typescript/lib/lib.es2022.string.d.ts","./node_modules/typescript/lib/lib.es2022.regexp.d.ts","./node_modules/typescript/lib/lib.es2023.array.d.ts","./node_modules/typescript/lib/lib.es2023.collection.d.ts","./node_modules/typescript/lib/lib.es2023.intl.d.ts","./node_modules/typescript/lib/lib.es2024.arraybuffer.d.ts","./node_modules/typescript/lib/lib.es2024.collection.d.ts","./node_modules/typescript/lib/lib.es2024.object.d.ts","./node_modules/typescript/lib/lib.es2024.promise.d.ts","./node_modules/typescript/lib/lib.es2024.regexp.d.ts","./node_modules/typescript/lib/lib.es2024.sharedmemory.d.ts","./node_modules/typescript/lib/lib.es2024.string.d.ts","./node_modules/typescript/lib/lib.esnext.array.d.ts","./node_modules/typescript/lib/lib.esnext.collection.d.ts","./node_modules/typescript/lib/lib.esnext.intl.d.ts","./node_modules/typescript/lib/lib.esnext.disposable.d.ts","./node_modules/typescript/lib/lib.esnext.decorators.d.ts","./node_modules/typescript/lib/lib.esnext.iterator.d.ts","./node_modules/typescript/lib/lib.decorators.d.ts","./node_modules/typescript/lib/lib.decorators.legacy.d.ts","./node_modules/@types/react/global.d.ts","./node_modules/csstype/index.d.ts","./node_modules/@types/react/index.d.ts","./node_modules/next/dist/styled-jsx/types/css.d.ts","./node_modules/next/dist/styled-jsx/types/macro.d.ts","./node_modules/next/dist/styled-jsx/types/style.d.ts","./node_modules/next/dist/styled-jsx/types/global.d.ts","./node_modules/next/dist/styled-jsx/types/index.d.ts","./node_modules/next/dist/server/get-page-files.d.ts","./node_modules/@types/node/compatibility/disposable.d.ts","./node_modules/@types/node/compatibility/indexable.d.ts","./node_modules/@types/node/compatibility/iterators.d.ts","./node_modules/@types/node/compatibility/index.d.ts","./node_modules/@types/node/globals.typedarray.d.ts","./node_modules/@types/node/buffer.buffer.d.ts","./node_modules/@types/node/globals.d.ts","./node_modules/@types/node/web-globals/abortcontroller.d.ts","./node_modules/@types/node/web-globals/domexception.d.ts","./node_modules/@types/node/web-globals/events.d.ts","./node_modules/undici-types/header.d.ts","./node_modules/undici-types/readable.d.ts","./node_modules/undici-types/file.d.ts","./node_modules/undici-types/fetch.d.ts","./node_modules/undici-types/formdata.d.ts","./node_modules/undici-types/connector.d.ts","./node_modules/undici-types/client.d.ts","./node_modules/undici-types/errors.d.ts","./node_modules/undici-types/dispatcher.d.ts","./node_modules/undici-types/global-dispatcher.d.ts","./node_modules/undici-types/global-origin.d.ts","./node_modules/undici-types/pool-stats.d.ts","./node_modules/undici-types/pool.d.ts","./node_modules/undici-types/handlers.d.ts","./node_modules/undici-types/balanced-pool.d.ts","./node_modules/undici-types/agent.d.ts","./node_modules/undici-types/mock-interceptor.d.ts","./node_modules/undici-types/mock-agent.d.ts","./node_modules/undici-types/mock-client.d.ts","./node_modules/undici-types/mock-pool.d.ts","./node_modules/undici-types/mock-errors.d.ts","./node_modules/undici-types/proxy-agent.d.ts","./node_modules/undici-types/env-http-proxy-agent.d.ts","./node_modules/undici-types/retry-handler.d.ts","./node_modules/undici-types/retry-agent.d.ts","./node_modules/undici-types/api.d.ts","./node_modules/undici-types/interceptors.d.ts","./node_modules/undici-types/util.d.ts","./node_modules/undici-types/cookies.d.ts","./node_modules/undici-types/patch.d.ts","./node_modules/undici-types/websocket.d.ts","./node_modules/undici-types/eventsource.d.ts","./node_modules/undici-types/filereader.d.ts","./node_modules/undici-types/diagnostics-channel.d.ts","./node_modules/undici-types/content-type.d.ts","./node_modules/undici-types/cache.d.ts","./node_modules/undici-types/index.d.ts","./node_modules/@types/node/web-globals/fetch.d.ts","./node_modules/@types/node/web-globals/navigator.d.ts","./node_modules/@types/node/web-globals/storage.d.ts","./node_modules/@types/node/assert.d.ts","./node_modules/@types/node/assert/strict.d.ts","./node_modules/@types/node/async_hooks.d.ts","./node_modules/@types/node/buffer.d.ts","./node_modules/@types/node/child_process.d.ts","./node_modules/@types/node/cluster.d.ts","./node_modules/@types/node/console.d.ts","./node_modules/@types/node/constants.d.ts","./node_modules/@types/node/crypto.d.ts","./node_modules/@types/node/dgram.d.ts","./node_modules/@types/node/diagnostics_channel.d.ts","./node_modules/@types/node/dns.d.ts","./node_modules/@types/node/dns/promises.d.ts","./node_modules/@types/node/domain.d.ts","./node_modules/@types/node/events.d.ts","./node_modules/@types/node/fs.d.ts","./node_modules/@types/node/fs/promises.d.ts","./node_modules/@types/node/http.d.ts","./node_modules/@types/node/http2.d.ts","./node_modules/@types/node/https.d.ts","./node_modules/@types/node/inspector.d.ts","./node_modules/@types/node/inspector.generated.d.ts","./node_modules/@types/node/module.d.ts","./node_modules/@types/node/net.d.ts","./node_modules/@types/node/os.d.ts","./node_modules/@types/node/path.d.ts","./node_modules/@types/node/perf_hooks.d.ts","./node_modules/@types/node/process.d.ts","./node_modules/@types/node/punycode.d.ts","./node_modules/@types/node/querystring.d.ts","./node_modules/@types/node/readline.d.ts","./node_modules/@types/node/readline/promises.d.ts","./node_modules/@types/node/repl.d.ts","./node_modules/@types/node/sea.d.ts","./node_modules/@types/node/sqlite.d.ts","./node_modules/@types/node/stream.d.ts","./node_modules/@types/node/stream/promises.d.ts","./node_modules/@types/node/stream/consumers.d.ts","./node_modules/@types/node/stream/web.d.ts","./node_modules/@types/node/string_decoder.d.ts","./node_modules/@types/node/test.d.ts","./node_modules/@types/node/timers.d.ts","./node_modules/@types/node/timers/promises.d.ts","./node_modules/@types/node/tls.d.ts","./node_modules/@types/node/trace_events.d.ts","./node_modules/@types/node/tty.d.ts","./node_modules/@types/node/url.d.ts","./node_modules/@types/node/util.d.ts","./node_modules/@types/node/v8.d.ts","./node_modules/@types/node/vm.d.ts","./node_modules/@types/node/wasi.d.ts","./node_modules/@types/node/worker_threads.d.ts","./node_modules/@types/node/zlib.d.ts","./node_modules/@types/node/index.d.ts","./node_modules/@types/react/canary.d.ts","./node_modules/@types/react/experimental.d.ts","./node_modules/@types/react-dom/index.d.ts","./node_modules/@types/react-dom/canary.d.ts","./node_modules/@types/react-dom/experimental.d.ts","./node_modules/next/dist/lib/fallback.d.ts","./node_modules/next/dist/compiled/webpack/webpack.d.ts","./node_modules/next/dist/shared/lib/modern-browserslist-target.d.ts","./node_modules/next/dist/shared/lib/entry-constants.d.ts","./node_modules/next/dist/shared/lib/constants.d.ts","./node_modules/next/dist/lib/bundler.d.ts","./node_modules/next/dist/server/config.d.ts","./node_modules/next/dist/lib/load-custom-routes.d.ts","./node_modules/next/dist/shared/lib/image-config.d.ts","./node_modules/next/dist/build/webpack/plugins/subresource-integrity-plugin.d.ts","./node_modules/next/dist/server/body-streams.d.ts","./node_modules/next/dist/server/request/search-params.d.ts","./node_modules/next/dist/shared/lib/segment-cache/vary-params-decoding.d.ts","./node_modules/next/dist/server/app-render/vary-params.d.ts","./node_modules/next/dist/server/request/params.d.ts","./node_modules/next/dist/server/route-kind.d.ts","./node_modules/next/dist/server/route-definitions/route-definition.d.ts","./node_modules/next/dist/server/route-matches/route-match.d.ts","./node_modules/next/dist/client/components/app-router-headers.d.ts","./node_modules/next/dist/server/lib/cache-control.d.ts","./node_modules/next/dist/shared/lib/app-router-types.d.ts","./node_modules/next/dist/server/lib/cache-handlers/types.d.ts","./node_modules/next/dist/server/use-cache/use-cache-wrapper.d.ts","./node_modules/next/dist/server/resume-data-cache/cache-store.d.ts","./node_modules/next/dist/server/resume-data-cache/resume-data-cache.d.ts","./node_modules/next/dist/lib/constants.d.ts","./node_modules/next/dist/server/render-result.d.ts","./node_modules/next/dist/server/response-cache/types.d.ts","./node_modules/next/dist/server/response-cache/index.d.ts","./node_modules/@types/react/jsx-runtime.d.ts","./node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup.d.ts","./node_modules/next/dist/build/static-paths/types.d.ts","./node_modules/next/dist/server/route-definitions/app-page-route-definition.d.ts","./node_modules/next/dist/build/adapter/setup-node-env.external.d.ts","./node_modules/next/dist/server/instrumentation/types.d.ts","./node_modules/next/dist/lib/setup-exception-listeners.d.ts","./node_modules/next/dist/lib/worker.d.ts","./node_modules/next/dist/server/lib/experimental/ppr.d.ts","./node_modules/next/dist/lib/page-types.d.ts","./node_modules/next/dist/build/segment-config/app/app-segment-config.d.ts","./node_modules/next/dist/build/segment-config/pages/pages-segment-config.d.ts","./node_modules/next/dist/build/analysis/get-page-static-info.d.ts","./node_modules/next/dist/build/webpack/loaders/get-module-build-info.d.ts","./node_modules/next/dist/build/webpack/plugins/middleware-plugin.d.ts","./node_modules/next/dist/server/require-hook.d.ts","./node_modules/next/dist/server/node-polyfill-crypto.d.ts","./node_modules/next/dist/server/node-environment-baseline.d.ts","./node_modules/next/dist/server/node-environment-extensions/error-inspect.d.ts","./node_modules/next/dist/server/node-environment-extensions/console-file.d.ts","./node_modules/next/dist/server/node-environment-extensions/console-exit.d.ts","./node_modules/next/dist/server/node-environment-extensions/console-dim.external.d.ts","./node_modules/next/dist/server/node-environment-extensions/unhandled-rejection.external.d.ts","./node_modules/next/dist/server/node-environment-extensions/random.d.ts","./node_modules/next/dist/server/node-environment-extensions/date.d.ts","./node_modules/next/dist/server/node-environment-extensions/web-crypto.d.ts","./node_modules/next/dist/server/node-environment-extensions/node-crypto.d.ts","./node_modules/next/dist/server/node-environment-extensions/fast-set-immediate.external.d.ts","./node_modules/next/dist/server/node-environment.d.ts","./node_modules/next/dist/build/page-extensions-type.d.ts","./node_modules/next/dist/server/route-modules/app-page/module.compiled.d.ts","./node_modules/next/dist/server/route-definitions/app-route-route-definition.d.ts","./node_modules/next/dist/server/lib/i18n-provider.d.ts","./node_modules/next/dist/server/web/next-url.d.ts","./node_modules/next/dist/compiled/@edge-runtime/cookies/index.d.ts","./node_modules/next/dist/server/web/spec-extension/cookies.d.ts","./node_modules/next/dist/server/web/spec-extension/request.d.ts","./node_modules/next/dist/shared/lib/deep-readonly.d.ts","./node_modules/next/dist/server/lib/incremental-cache/index.d.ts","./node_modules/next/dist/shared/lib/router/utils/middleware-route-matcher.d.ts","./node_modules/next/dist/build/webpack/plugins/flight-manifest-plugin.d.ts","./node_modules/next/dist/build/webpack/plugins/next-font-manifest-plugin.d.ts","./node_modules/next/dist/server/route-definitions/locale-route-definition.d.ts","./node_modules/next/dist/server/route-definitions/pages-route-definition.d.ts","./node_modules/next/dist/shared/lib/mitt.d.ts","./node_modules/next/dist/client/with-router.d.ts","./node_modules/next/dist/client/router.d.ts","./node_modules/next/dist/client/route-loader.d.ts","./node_modules/next/dist/client/page-loader.d.ts","./node_modules/next/dist/shared/lib/bloom-filter.d.ts","./node_modules/next/dist/shared/lib/router/router.d.ts","./node_modules/next/dist/shared/lib/router-context.shared-runtime.d.ts","./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.d.ts","./node_modules/next/dist/shared/lib/loadable.shared-runtime.d.ts","./node_modules/next/dist/shared/lib/image-config-context.shared-runtime.d.ts","./node_modules/next/dist/client/components/readonly-url-search-params.d.ts","./node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.d.ts","./node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.d.ts","./node_modules/next/dist/client/flight-data-helpers.d.ts","./node_modules/next/dist/client/components/segment-cache/cache-key.d.ts","./node_modules/next/dist/client/components/router-reducer/fetch-server-response.d.ts","./node_modules/next/dist/client/components/segment-cache/types.d.ts","./node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.d.ts","./node_modules/next/dist/client/components/segment-cache/scheduler.d.ts","./node_modules/next/dist/client/components/segment-cache/cache-map.d.ts","./node_modules/next/dist/client/components/segment-cache/vary-path.d.ts","./node_modules/next/dist/client/components/segment-cache/cache.d.ts","./node_modules/next/dist/client/components/router-reducer/ppr-navigations.d.ts","./node_modules/next/dist/client/components/segment-cache/navigation.d.ts","./node_modules/next/dist/client/components/router-reducer/router-reducer-types.d.ts","./node_modules/next/dist/shared/lib/app-router-context.shared-runtime.d.ts","./node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.d.ts","./node_modules/next/dist/server/route-modules/pages/vendored/contexts/entrypoints.d.ts","./node_modules/next/dist/server/route-modules/pages/module.compiled.d.ts","./node_modules/next/dist/build/templates/pages.d.ts","./node_modules/next/dist/server/route-modules/pages/module.d.ts","./node_modules/next/dist/server/render.d.ts","./node_modules/next/dist/build/webpack/plugins/pages-manifest-plugin.d.ts","./node_modules/next/dist/server/route-definitions/pages-api-route-definition.d.ts","./node_modules/next/dist/server/route-matches/pages-api-route-match.d.ts","./node_modules/next/dist/server/route-matchers/route-matcher.d.ts","./node_modules/next/dist/server/route-matcher-providers/route-matcher-provider.d.ts","./node_modules/next/dist/server/route-matcher-managers/route-matcher-manager.d.ts","./node_modules/next/dist/server/normalizers/normalizer.d.ts","./node_modules/next/dist/server/normalizers/locale-route-normalizer.d.ts","./node_modules/next/dist/server/normalizers/request/pathname-normalizer.d.ts","./node_modules/next/dist/server/normalizers/request/suffix.d.ts","./node_modules/next/dist/server/normalizers/request/rsc.d.ts","./node_modules/next/dist/server/normalizers/request/next-data.d.ts","./node_modules/next/dist/server/after/builtin-request-context.d.ts","./node_modules/next/dist/server/normalizers/request/segment-prefix-rsc.d.ts","./node_modules/next/dist/server/route-modules/pages/builtin/_error.d.ts","./node_modules/next/dist/server/load-default-error-components.d.ts","./node_modules/next/dist/server/base-server.d.ts","./node_modules/next/dist/server/after/after.d.ts","./node_modules/next/dist/server/after/after-context.d.ts","./node_modules/next/dist/server/use-cache/cache-life.d.ts","./node_modules/next/dist/server/app-render/work-async-storage-instance.d.ts","./node_modules/next/dist/server/lib/lazy-result.d.ts","./node_modules/next/dist/server/app-render/create-error-handler.d.ts","./node_modules/next/dist/shared/lib/action-revalidation-kind.d.ts","./node_modules/next/dist/server/app-render/work-async-storage.external.d.ts","./node_modules/next/dist/server/async-storage/work-store.d.ts","./node_modules/next/dist/server/web/http.d.ts","./node_modules/next/dist/client/components/hooks-server-context.d.ts","./node_modules/next/dist/server/route-modules/app-route/shared-modules.d.ts","./node_modules/next/dist/client/components/redirect-status-code.d.ts","./node_modules/next/dist/client/components/redirect-error.d.ts","./node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.d.ts","./node_modules/next/dist/server/async-storage/draft-mode-provider.d.ts","./node_modules/next/dist/server/web/spec-extension/adapters/headers.d.ts","./node_modules/next/dist/server/app-render/cache-signal.d.ts","./node_modules/next/dist/server/app-render/instant-validation/boundary-tracking.d.ts","./node_modules/next/dist/server/app-render/instant-validation/instant-validation-error.d.ts","./node_modules/next/dist/shared/lib/router/utils/parse-relative-url.d.ts","./node_modules/next/dist/server/app-render/instant-validation/instant-samples.d.ts","./node_modules/next/dist/server/app-render/dynamic-rendering.d.ts","./node_modules/next/dist/server/app-render/work-unit-async-storage-instance.d.ts","./node_modules/next/dist/server/lib/implicit-tags.d.ts","./node_modules/next/dist/server/app-render/staged-rendering.d.ts","./node_modules/next/dist/server/app-render/work-unit-async-storage.external.d.ts","./node_modules/next/dist/build/templates/app-route.d.ts","./node_modules/next/dist/server/app-render/action-async-storage-instance.d.ts","./node_modules/next/dist/server/app-render/action-async-storage.external.d.ts","./node_modules/next/dist/server/route-modules/app-route/module.d.ts","./node_modules/next/dist/server/route-modules/app-route/module.compiled.d.ts","./node_modules/next/dist/build/segment-config/app/app-segments.d.ts","./node_modules/next/dist/build/get-supported-browsers.d.ts","./node_modules/next/dist/build/utils.d.ts","./node_modules/next/dist/build/rendering-mode.d.ts","./node_modules/next/dist/server/lib/router-utils/build-prefetch-segment-data-route.d.ts","./node_modules/next/dist/server/lib/cpu-profile.d.ts","./node_modules/next/dist/build/turborepo-access-trace/types.d.ts","./node_modules/next/dist/build/turborepo-access-trace/result.d.ts","./node_modules/next/dist/build/turborepo-access-trace/helpers.d.ts","./node_modules/next/dist/build/turborepo-access-trace/index.d.ts","./node_modules/next/dist/export/routes/types.d.ts","./node_modules/next/dist/export/types.d.ts","./node_modules/next/dist/export/worker.d.ts","./node_modules/next/dist/build/worker.d.ts","./node_modules/next/dist/build/index.d.ts","./node_modules/next/dist/lib/coalesced-function.d.ts","./node_modules/next/dist/server/lib/router-utils/types.d.ts","./node_modules/next/dist/trace/types.d.ts","./node_modules/next/dist/trace/trace.d.ts","./node_modules/next/dist/trace/shared.d.ts","./node_modules/next/dist/trace/index.d.ts","./node_modules/next/dist/build/load-jsconfig.d.ts","./node_modules/@next/env/dist/index.d.ts","./node_modules/next/dist/build/webpack/plugins/telemetry-plugin/use-cache-tracker-utils.d.ts","./node_modules/next/dist/build/webpack/plugins/telemetry-plugin/telemetry-plugin.d.ts","./node_modules/next/dist/telemetry/storage.d.ts","./node_modules/next/dist/build/build-context.d.ts","./node_modules/next/dist/build/webpack-config.d.ts","./node_modules/next/dist/build/swc/generated-native.d.ts","./node_modules/next/dist/build/define-env.d.ts","./node_modules/next/dist/build/swc/index.d.ts","./node_modules/next/dist/build/swc/types.d.ts","./node_modules/next/dist/server/dev/parse-version-info.d.ts","./node_modules/next/dist/next-devtools/shared/types.d.ts","./node_modules/next/dist/server/dev/dev-indicator-server-state.d.ts","./node_modules/next/dist/next-devtools/dev-overlay/cache-indicator.d.ts","./node_modules/next/dist/server/lib/parse-stack.d.ts","./node_modules/next/dist/next-devtools/server/shared.d.ts","./node_modules/next/dist/next-devtools/shared/stack-frame.d.ts","./node_modules/next/dist/next-devtools/dev-overlay/utils/get-error-by-type.d.ts","./node_modules/next/dist/next-devtools/dev-overlay/container/runtime-error/render-error.d.ts","./node_modules/next/dist/next-devtools/dev-overlay/shared.d.ts","./node_modules/next/dist/server/dev/debug-channel.d.ts","./node_modules/next/dist/server/dev/hot-reloader-types.d.ts","./node_modules/next/dist/server/web/spec-extension/fetch-event.d.ts","./node_modules/next/dist/server/web/spec-extension/response.d.ts","./node_modules/next/dist/build/segment-config/middleware/middleware-config.d.ts","./node_modules/next/dist/server/web/types.d.ts","./node_modules/next/dist/shared/lib/router/utils/parse-url.d.ts","./node_modules/next/dist/server/base-http/node.d.ts","./node_modules/next/dist/server/lib/async-callback-set.d.ts","./node_modules/next/dist/shared/lib/router/utils/route-regex.d.ts","./node_modules/next/dist/shared/lib/router/utils/route-matcher.d.ts","./node_modules/sharp/lib/index.d.ts","./node_modules/next/dist/server/image-optimizer.d.ts","./node_modules/next/dist/server/next-server.d.ts","./node_modules/next/dist/server/lib/types.d.ts","./node_modules/next/dist/server/lib/lru-cache.d.ts","./node_modules/next/dist/server/lib/dev-bundler-service.d.ts","./node_modules/next/dist/server/dev/static-paths-worker.d.ts","./node_modules/next/dist/server/dev/next-dev-server.d.ts","./node_modules/next/dist/server/next.d.ts","./node_modules/next/dist/server/lib/render-server.d.ts","./node_modules/next/dist/server/lib/router-server.d.ts","./node_modules/next/dist/shared/lib/router/utils/path-match.d.ts","./node_modules/next/dist/server/lib/router-utils/filesystem.d.ts","./node_modules/next/dist/server/lib/router-utils/setup-dev-bundler.d.ts","./node_modules/next/dist/server/lib/router-utils/router-server-context.d.ts","./node_modules/next/dist/server/route-modules/route-module.d.ts","./node_modules/next/dist/server/load-components.d.ts","./node_modules/next/dist/server/web/adapter.d.ts","./node_modules/next/dist/server/app-render/types.d.ts","./node_modules/next/dist/build/webpack/loaders/metadata/types.d.ts","./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.d.ts","./node_modules/next/dist/server/lib/app-dir-module.d.ts","./node_modules/next/dist/server/app-render/app-render.d.ts","./node_modules/next/dist/server/route-modules/app-page/vendored/contexts/entrypoints.d.ts","./node_modules/next/dist/client/components/error-boundary.d.ts","./node_modules/next/dist/client/components/layout-router.d.ts","./node_modules/next/dist/client/components/render-from-template-context.d.ts","./node_modules/next/dist/client/components/client-page.d.ts","./node_modules/next/dist/client/components/client-segment.d.ts","./node_modules/next/dist/client/components/http-access-fallback/error-boundary.d.ts","./node_modules/next/dist/lib/metadata/types/alternative-urls-types.d.ts","./node_modules/next/dist/lib/metadata/types/extra-types.d.ts","./node_modules/next/dist/lib/metadata/types/metadata-types.d.ts","./node_modules/next/dist/lib/metadata/types/manifest-types.d.ts","./node_modules/next/dist/lib/metadata/types/opengraph-types.d.ts","./node_modules/next/dist/lib/metadata/types/twitter-types.d.ts","./node_modules/next/dist/lib/metadata/types/metadata-interface.d.ts","./node_modules/next/dist/lib/metadata/types/resolvers.d.ts","./node_modules/next/dist/lib/metadata/types/icons.d.ts","./node_modules/next/dist/lib/metadata/resolve-metadata.d.ts","./node_modules/next/dist/lib/metadata/metadata.d.ts","./node_modules/next/dist/lib/framework/boundary-components.d.ts","./node_modules/next/dist/server/app-render/rsc/preloads.d.ts","./node_modules/next/dist/server/app-render/rsc/postpone.d.ts","./node_modules/next/dist/server/app-render/rsc/taint.d.ts","./node_modules/next/dist/server/app-render/collect-segment-data.d.ts","./node_modules/next/dist/server/app-render/instant-validation/instant-validation.d.ts","./node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.d.ts","./node_modules/next/dist/server/app-render/entry-base.d.ts","./node_modules/next/dist/build/templates/app-page.d.ts","./node_modules/next/dist/server/route-modules/app-page/helpers/prerender-manifest-matcher.d.ts","./node_modules/@types/react/jsx-dev-runtime.d.ts","./node_modules/@types/react/compiler-runtime.d.ts","./node_modules/next/dist/server/route-modules/app-page/vendored/rsc/entrypoints.d.ts","./node_modules/@types/react-dom/client.d.ts","./node_modules/@types/react-dom/static.d.ts","./node_modules/@types/react-dom/server.d.ts","./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/entrypoints.d.ts","./node_modules/next/dist/server/route-modules/app-page/module.d.ts","./node_modules/next/dist/server/request/fallback-params.d.ts","./node_modules/next/dist/server/web/spec-extension/image-response.d.ts","./node_modules/next/dist/server/web/spec-extension/user-agent.d.ts","./node_modules/next/dist/server/web/spec-extension/url-pattern.d.ts","./node_modules/next/dist/server/after/index.d.ts","./node_modules/next/dist/server/request/connection.d.ts","./node_modules/next/dist/server/web/exports/index.d.ts","./node_modules/next/dist/server/request-meta.d.ts","./node_modules/next/dist/cli/next-test.d.ts","./node_modules/next/dist/shared/lib/size-limit.d.ts","./node_modules/next/dist/server/config-shared.d.ts","./node_modules/next/dist/server/base-http/index.d.ts","./node_modules/next/dist/server/api-utils/index.d.ts","./node_modules/next/dist/build/adapter/build-complete.d.ts","./node_modules/next/dist/types.d.ts","./node_modules/next/dist/shared/lib/html-context.shared-runtime.d.ts","./node_modules/next/dist/shared/lib/utils.d.ts","./node_modules/next/dist/pages/_app.d.ts","./node_modules/next/app.d.ts","./node_modules/next/dist/server/web/spec-extension/unstable-cache.d.ts","./node_modules/next/dist/server/web/spec-extension/revalidate.d.ts","./node_modules/next/dist/server/web/spec-extension/unstable-no-store.d.ts","./node_modules/next/dist/server/use-cache/cache-tag.d.ts","./node_modules/next/cache.d.ts","./node_modules/next/dist/pages/_document.d.ts","./node_modules/next/document.d.ts","./node_modules/next/dist/shared/lib/dynamic.d.ts","./node_modules/next/dynamic.d.ts","./node_modules/next/dist/pages/_error.d.ts","./node_modules/next/dist/client/components/catch-error.d.ts","./node_modules/next/dist/api/error.d.ts","./node_modules/next/error.d.ts","./node_modules/next/dist/shared/lib/head.d.ts","./node_modules/next/head.d.ts","./node_modules/next/dist/server/request/cookies.d.ts","./node_modules/next/dist/server/request/headers.d.ts","./node_modules/next/dist/server/request/draft-mode.d.ts","./node_modules/next/headers.d.ts","./node_modules/next/dist/shared/lib/get-img-props.d.ts","./node_modules/next/dist/client/image-component.d.ts","./node_modules/next/dist/shared/lib/image-external.d.ts","./node_modules/next/image.d.ts","./node_modules/next/dist/client/link.d.ts","./node_modules/next/link.d.ts","./node_modules/next/dist/client/components/unrecognized-action-error.d.ts","./node_modules/next/dist/client/components/redirect.d.ts","./node_modules/next/dist/client/components/not-found.d.ts","./node_modules/next/dist/client/components/forbidden.d.ts","./node_modules/next/dist/client/components/unauthorized.d.ts","./node_modules/next/dist/client/components/unstable-rethrow.server.d.ts","./node_modules/next/dist/client/components/unstable-rethrow.d.ts","./node_modules/next/dist/client/components/navigation.react-server.d.ts","./node_modules/next/dist/client/components/navigation.d.ts","./node_modules/next/navigation.d.ts","./node_modules/next/router.d.ts","./node_modules/next/dist/client/script.d.ts","./node_modules/next/script.d.ts","./node_modules/next/dist/compiled/@edge-runtime/primitives/url.d.ts","./node_modules/next/dist/compiled/@vercel/og/satori/index.d.ts","./node_modules/next/dist/compiled/@vercel/og/types.d.ts","./node_modules/next/server.d.ts","./node_modules/next/types/global.d.ts","./node_modules/next/types/compiled.d.ts","./node_modules/next/types.d.ts","./node_modules/next/index.d.ts","./node_modules/next/image-types/global.d.ts","./.next/dev/types/routes.d.ts","./next-env.d.ts","./node_modules/@radix-ui/react-context/dist/index.d.mts","./node_modules/@radix-ui/react-primitive/dist/index.d.mts","./node_modules/@radix-ui/react-dismissable-layer/dist/index.d.mts","./node_modules/@radix-ui/react-toast/dist/index.d.mts","./node_modules/clsx/clsx.d.mts","./node_modules/class-variance-authority/dist/types.d.ts","./node_modules/class-variance-authority/dist/index.d.ts","./node_modules/lucide-react/dist/lucide-react.d.ts","./node_modules/tailwind-merge/dist/types.d.ts","./lib/utils.ts","./components/ui/toast.tsx","./components/ui/use-toast.ts","./hooks/use-mobile.ts","./hooks/use-toast.ts","./lib/fetchobjects.ts","./node_modules/next/dist/compiled/@next/font/dist/types.d.ts","./node_modules/next/dist/compiled/@next/font/dist/google/index.d.ts","./node_modules/next/font/google/index.d.ts","./node_modules/next/dist/compiled/@next/font/dist/local/index.d.ts","./node_modules/next/font/local/index.d.ts","./node_modules/@vercel/analytics/dist/next/index.d.mts","./app/layout.tsx","./node_modules/motion-utils/dist/index.d.ts","./node_modules/motion-dom/dist/index.d.ts","./node_modules/framer-motion/dist/index.d.ts","./node_modules/@radix-ui/react-slot/dist/index.d.mts","./components/ui/button.tsx","./components/ui/card.tsx","./components/ui/badge.tsx","./node_modules/@radix-ui/react-focus-scope/dist/index.d.mts","./node_modules/@radix-ui/react-portal/dist/index.d.mts","./node_modules/@radix-ui/react-dialog/dist/index.d.mts","./components/ui/dialog.tsx","./node_modules/@radix-ui/react-checkbox/dist/index.d.mts","./components/ui/checkbox.tsx","./components/appheader.tsx","./node_modules/embla-carousel/esm/components/alignment.d.ts","./node_modules/embla-carousel/esm/components/noderects.d.ts","./node_modules/embla-carousel/esm/components/axis.d.ts","./node_modules/embla-carousel/esm/components/slidestoscroll.d.ts","./node_modules/embla-carousel/esm/components/limit.d.ts","./node_modules/embla-carousel/esm/components/scrollcontain.d.ts","./node_modules/embla-carousel/esm/components/dragtracker.d.ts","./node_modules/embla-carousel/esm/components/utils.d.ts","./node_modules/embla-carousel/esm/components/animations.d.ts","./node_modules/embla-carousel/esm/components/counter.d.ts","./node_modules/embla-carousel/esm/components/eventhandler.d.ts","./node_modules/embla-carousel/esm/components/eventstore.d.ts","./node_modules/embla-carousel/esm/components/percentofview.d.ts","./node_modules/embla-carousel/esm/components/resizehandler.d.ts","./node_modules/embla-carousel/esm/components/vector1d.d.ts","./node_modules/embla-carousel/esm/components/scrollbody.d.ts","./node_modules/embla-carousel/esm/components/scrollbounds.d.ts","./node_modules/embla-carousel/esm/components/scrolllooper.d.ts","./node_modules/embla-carousel/esm/components/scrollprogress.d.ts","./node_modules/embla-carousel/esm/components/slideregistry.d.ts","./node_modules/embla-carousel/esm/components/scrolltarget.d.ts","./node_modules/embla-carousel/esm/components/scrollto.d.ts","./node_modules/embla-carousel/esm/components/slidefocus.d.ts","./node_modules/embla-carousel/esm/components/translate.d.ts","./node_modules/embla-carousel/esm/components/slidelooper.d.ts","./node_modules/embla-carousel/esm/components/slideshandler.d.ts","./node_modules/embla-carousel/esm/components/slidesinview.d.ts","./node_modules/embla-carousel/esm/components/engine.d.ts","./node_modules/embla-carousel/esm/components/optionshandler.d.ts","./node_modules/embla-carousel/esm/components/plugins.d.ts","./node_modules/embla-carousel/esm/components/emblacarousel.d.ts","./node_modules/embla-carousel/esm/components/draghandler.d.ts","./node_modules/embla-carousel/esm/components/options.d.ts","./node_modules/embla-carousel/esm/index.d.ts","./node_modules/embla-carousel-autoplay/esm/components/options.d.ts","./node_modules/embla-carousel-autoplay/esm/components/autoplay.d.ts","./node_modules/embla-carousel-autoplay/esm/index.d.ts","./node_modules/embla-carousel-react/esm/components/useemblacarousel.d.ts","./node_modules/embla-carousel-react/esm/index.d.ts","./components/ui/carousel.tsx","./components/popularplaces.tsx","./components/upcomingevents.tsx","./app/page.tsx","./components/pagewrapper.tsx","./app/advice/page.tsx","./node_modules/@types/geojson/index.d.ts","./node_modules/@types/leaflet/index.d.ts","./node_modules/react-leaflet/lib/hooks.d.ts","./node_modules/react-leaflet/lib/attributioncontrol.d.ts","./node_modules/@react-leaflet/core/lib/attribution.d.ts","./node_modules/@react-leaflet/core/lib/context.d.ts","./node_modules/@react-leaflet/core/lib/element.d.ts","./node_modules/@react-leaflet/core/lib/events.d.ts","./node_modules/@react-leaflet/core/lib/layer.d.ts","./node_modules/@react-leaflet/core/lib/path.d.ts","./node_modules/@react-leaflet/core/lib/circle.d.ts","./node_modules/@react-leaflet/core/lib/div-overlay.d.ts","./node_modules/@react-leaflet/core/lib/component.d.ts","./node_modules/@react-leaflet/core/lib/control.d.ts","./node_modules/@react-leaflet/core/lib/dom.d.ts","./node_modules/@react-leaflet/core/lib/generic.d.ts","./node_modules/@react-leaflet/core/lib/grid-layer.d.ts","./node_modules/@react-leaflet/core/lib/media-overlay.d.ts","./node_modules/@react-leaflet/core/lib/pane.d.ts","./node_modules/@react-leaflet/core/lib/index.d.ts","./node_modules/react-leaflet/lib/circle.d.ts","./node_modules/react-leaflet/lib/circlemarker.d.ts","./node_modules/react-leaflet/lib/layergroup.d.ts","./node_modules/react-leaflet/lib/featuregroup.d.ts","./node_modules/react-leaflet/lib/geojson.d.ts","./node_modules/react-leaflet/lib/imageoverlay.d.ts","./node_modules/react-leaflet/lib/layerscontrol.d.ts","./node_modules/react-leaflet/lib/mapcontainer.d.ts","./node_modules/react-leaflet/lib/marker.d.ts","./node_modules/react-leaflet/lib/pane.d.ts","./node_modules/react-leaflet/lib/polygon.d.ts","./node_modules/react-leaflet/lib/polyline.d.ts","./node_modules/react-leaflet/lib/popup.d.ts","./node_modules/react-leaflet/lib/rectangle.d.ts","./node_modules/react-leaflet/lib/scalecontrol.d.ts","./node_modules/react-leaflet/lib/svgoverlay.d.ts","./node_modules/react-leaflet/lib/tilelayer.d.ts","./node_modules/react-leaflet/lib/tooltip.d.ts","./node_modules/react-leaflet/lib/videooverlay.d.ts","./node_modules/react-leaflet/lib/wmstilelayer.d.ts","./node_modules/react-leaflet/lib/zoomcontrol.d.ts","./node_modules/react-leaflet/lib/index.d.ts","./components/accessible-yakutia-map.tsx","./app/map/page.tsx","./app/place/[id]/placedetailclient.tsx","./app/place/[id]/page.tsx","./app/yakutia/page.tsx","./node_modules/next-themes/dist/index.d.ts","./components/theme-provider.tsx","./node_modules/@radix-ui/react-collapsible/dist/index.d.mts","./node_modules/@radix-ui/react-accordion/dist/index.d.mts","./components/ui/accordion.tsx","./node_modules/@radix-ui/react-alert-dialog/dist/index.d.mts","./components/ui/alert-dialog.tsx","./components/ui/alert.tsx","./node_modules/@radix-ui/react-aspect-ratio/node_modules/@radix-ui/react-primitive/dist/index.d.mts","./node_modules/@radix-ui/react-aspect-ratio/dist/index.d.mts","./components/ui/aspect-ratio.tsx","./node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-context/dist/index.d.mts","./node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-primitive/dist/index.d.mts","./node_modules/@radix-ui/react-avatar/dist/index.d.mts","./components/ui/avatar.tsx","./components/ui/breadcrumb.tsx","./node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-primitive/dist/index.d.mts","./node_modules/@radix-ui/react-separator/dist/index.d.mts","./components/ui/separator.tsx","./components/ui/button-group.tsx","./node_modules/@date-fns/tz/constants/index.d.ts","./node_modules/@date-fns/tz/date/index.d.ts","./node_modules/@date-fns/tz/date/mini.d.ts","./node_modules/@date-fns/tz/tz/index.d.ts","./node_modules/@date-fns/tz/tzoffset/index.d.ts","./node_modules/@date-fns/tz/tzscan/index.d.ts","./node_modules/@date-fns/tz/tzname/index.d.ts","./node_modules/@date-fns/tz/index.d.ts","./node_modules/date-fns/constants.d.ts","./node_modules/date-fns/locale/types.d.ts","./node_modules/date-fns/fp/types.d.ts","./node_modules/date-fns/types.d.ts","./node_modules/date-fns/add.d.ts","./node_modules/date-fns/addbusinessdays.d.ts","./node_modules/date-fns/adddays.d.ts","./node_modules/date-fns/addhours.d.ts","./node_modules/date-fns/addisoweekyears.d.ts","./node_modules/date-fns/addmilliseconds.d.ts","./node_modules/date-fns/addminutes.d.ts","./node_modules/date-fns/addmonths.d.ts","./node_modules/date-fns/addquarters.d.ts","./node_modules/date-fns/addseconds.d.ts","./node_modules/date-fns/addweeks.d.ts","./node_modules/date-fns/addyears.d.ts","./node_modules/date-fns/areintervalsoverlapping.d.ts","./node_modules/date-fns/clamp.d.ts","./node_modules/date-fns/closestindexto.d.ts","./node_modules/date-fns/closestto.d.ts","./node_modules/date-fns/compareasc.d.ts","./node_modules/date-fns/comparedesc.d.ts","./node_modules/date-fns/constructfrom.d.ts","./node_modules/date-fns/constructnow.d.ts","./node_modules/date-fns/daystoweeks.d.ts","./node_modules/date-fns/differenceinbusinessdays.d.ts","./node_modules/date-fns/differenceincalendardays.d.ts","./node_modules/date-fns/differenceincalendarisoweekyears.d.ts","./node_modules/date-fns/differenceincalendarisoweeks.d.ts","./node_modules/date-fns/differenceincalendarmonths.d.ts","./node_modules/date-fns/differenceincalendarquarters.d.ts","./node_modules/date-fns/differenceincalendarweeks.d.ts","./node_modules/date-fns/differenceincalendaryears.d.ts","./node_modules/date-fns/differenceindays.d.ts","./node_modules/date-fns/differenceinhours.d.ts","./node_modules/date-fns/differenceinisoweekyears.d.ts","./node_modules/date-fns/differenceinmilliseconds.d.ts","./node_modules/date-fns/differenceinminutes.d.ts","./node_modules/date-fns/differenceinmonths.d.ts","./node_modules/date-fns/differenceinquarters.d.ts","./node_modules/date-fns/differenceinseconds.d.ts","./node_modules/date-fns/differenceinweeks.d.ts","./node_modules/date-fns/differenceinyears.d.ts","./node_modules/date-fns/eachdayofinterval.d.ts","./node_modules/date-fns/eachhourofinterval.d.ts","./node_modules/date-fns/eachminuteofinterval.d.ts","./node_modules/date-fns/eachmonthofinterval.d.ts","./node_modules/date-fns/eachquarterofinterval.d.ts","./node_modules/date-fns/eachweekofinterval.d.ts","./node_modules/date-fns/eachweekendofinterval.d.ts","./node_modules/date-fns/eachweekendofmonth.d.ts","./node_modules/date-fns/eachweekendofyear.d.ts","./node_modules/date-fns/eachyearofinterval.d.ts","./node_modules/date-fns/endofday.d.ts","./node_modules/date-fns/endofdecade.d.ts","./node_modules/date-fns/endofhour.d.ts","./node_modules/date-fns/endofisoweek.d.ts","./node_modules/date-fns/endofisoweekyear.d.ts","./node_modules/date-fns/endofminute.d.ts","./node_modules/date-fns/endofmonth.d.ts","./node_modules/date-fns/endofquarter.d.ts","./node_modules/date-fns/endofsecond.d.ts","./node_modules/date-fns/endoftoday.d.ts","./node_modules/date-fns/endoftomorrow.d.ts","./node_modules/date-fns/endofweek.d.ts","./node_modules/date-fns/endofyear.d.ts","./node_modules/date-fns/endofyesterday.d.ts","./node_modules/date-fns/_lib/format/formatters.d.ts","./node_modules/date-fns/_lib/format/longformatters.d.ts","./node_modules/date-fns/format.d.ts","./node_modules/date-fns/formatdistance.d.ts","./node_modules/date-fns/formatdistancestrict.d.ts","./node_modules/date-fns/formatdistancetonow.d.ts","./node_modules/date-fns/formatdistancetonowstrict.d.ts","./node_modules/date-fns/formatduration.d.ts","./node_modules/date-fns/formatiso.d.ts","./node_modules/date-fns/formatiso9075.d.ts","./node_modules/date-fns/formatisoduration.d.ts","./node_modules/date-fns/formatrfc3339.d.ts","./node_modules/date-fns/formatrfc7231.d.ts","./node_modules/date-fns/formatrelative.d.ts","./node_modules/date-fns/fromunixtime.d.ts","./node_modules/date-fns/getdate.d.ts","./node_modules/date-fns/getday.d.ts","./node_modules/date-fns/getdayofyear.d.ts","./node_modules/date-fns/getdaysinmonth.d.ts","./node_modules/date-fns/getdaysinyear.d.ts","./node_modules/date-fns/getdecade.d.ts","./node_modules/date-fns/_lib/defaultoptions.d.ts","./node_modules/date-fns/getdefaultoptions.d.ts","./node_modules/date-fns/gethours.d.ts","./node_modules/date-fns/getisoday.d.ts","./node_modules/date-fns/getisoweek.d.ts","./node_modules/date-fns/getisoweekyear.d.ts","./node_modules/date-fns/getisoweeksinyear.d.ts","./node_modules/date-fns/getmilliseconds.d.ts","./node_modules/date-fns/getminutes.d.ts","./node_modules/date-fns/getmonth.d.ts","./node_modules/date-fns/getoverlappingdaysinintervals.d.ts","./node_modules/date-fns/getquarter.d.ts","./node_modules/date-fns/getseconds.d.ts","./node_modules/date-fns/gettime.d.ts","./node_modules/date-fns/getunixtime.d.ts","./node_modules/date-fns/getweek.d.ts","./node_modules/date-fns/getweekofmonth.d.ts","./node_modules/date-fns/getweekyear.d.ts","./node_modules/date-fns/getweeksinmonth.d.ts","./node_modules/date-fns/getyear.d.ts","./node_modules/date-fns/hourstomilliseconds.d.ts","./node_modules/date-fns/hourstominutes.d.ts","./node_modules/date-fns/hourstoseconds.d.ts","./node_modules/date-fns/interval.d.ts","./node_modules/date-fns/intervaltoduration.d.ts","./node_modules/date-fns/intlformat.d.ts","./node_modules/date-fns/intlformatdistance.d.ts","./node_modules/date-fns/isafter.d.ts","./node_modules/date-fns/isbefore.d.ts","./node_modules/date-fns/isdate.d.ts","./node_modules/date-fns/isequal.d.ts","./node_modules/date-fns/isexists.d.ts","./node_modules/date-fns/isfirstdayofmonth.d.ts","./node_modules/date-fns/isfriday.d.ts","./node_modules/date-fns/isfuture.d.ts","./node_modules/date-fns/islastdayofmonth.d.ts","./node_modules/date-fns/isleapyear.d.ts","./node_modules/date-fns/ismatch.d.ts","./node_modules/date-fns/ismonday.d.ts","./node_modules/date-fns/ispast.d.ts","./node_modules/date-fns/issameday.d.ts","./node_modules/date-fns/issamehour.d.ts","./node_modules/date-fns/issameisoweek.d.ts","./node_modules/date-fns/issameisoweekyear.d.ts","./node_modules/date-fns/issameminute.d.ts","./node_modules/date-fns/issamemonth.d.ts","./node_modules/date-fns/issamequarter.d.ts","./node_modules/date-fns/issamesecond.d.ts","./node_modules/date-fns/issameweek.d.ts","./node_modules/date-fns/issameyear.d.ts","./node_modules/date-fns/issaturday.d.ts","./node_modules/date-fns/issunday.d.ts","./node_modules/date-fns/isthishour.d.ts","./node_modules/date-fns/isthisisoweek.d.ts","./node_modules/date-fns/isthisminute.d.ts","./node_modules/date-fns/isthismonth.d.ts","./node_modules/date-fns/isthisquarter.d.ts","./node_modules/date-fns/isthissecond.d.ts","./node_modules/date-fns/isthisweek.d.ts","./node_modules/date-fns/isthisyear.d.ts","./node_modules/date-fns/isthursday.d.ts","./node_modules/date-fns/istoday.d.ts","./node_modules/date-fns/istomorrow.d.ts","./node_modules/date-fns/istuesday.d.ts","./node_modules/date-fns/isvalid.d.ts","./node_modules/date-fns/iswednesday.d.ts","./node_modules/date-fns/isweekend.d.ts","./node_modules/date-fns/iswithininterval.d.ts","./node_modules/date-fns/isyesterday.d.ts","./node_modules/date-fns/lastdayofdecade.d.ts","./node_modules/date-fns/lastdayofisoweek.d.ts","./node_modules/date-fns/lastdayofisoweekyear.d.ts","./node_modules/date-fns/lastdayofmonth.d.ts","./node_modules/date-fns/lastdayofquarter.d.ts","./node_modules/date-fns/lastdayofweek.d.ts","./node_modules/date-fns/lastdayofyear.d.ts","./node_modules/date-fns/_lib/format/lightformatters.d.ts","./node_modules/date-fns/lightformat.d.ts","./node_modules/date-fns/max.d.ts","./node_modules/date-fns/milliseconds.d.ts","./node_modules/date-fns/millisecondstohours.d.ts","./node_modules/date-fns/millisecondstominutes.d.ts","./node_modules/date-fns/millisecondstoseconds.d.ts","./node_modules/date-fns/min.d.ts","./node_modules/date-fns/minutestohours.d.ts","./node_modules/date-fns/minutestomilliseconds.d.ts","./node_modules/date-fns/minutestoseconds.d.ts","./node_modules/date-fns/monthstoquarters.d.ts","./node_modules/date-fns/monthstoyears.d.ts","./node_modules/date-fns/nextday.d.ts","./node_modules/date-fns/nextfriday.d.ts","./node_modules/date-fns/nextmonday.d.ts","./node_modules/date-fns/nextsaturday.d.ts","./node_modules/date-fns/nextsunday.d.ts","./node_modules/date-fns/nextthursday.d.ts","./node_modules/date-fns/nexttuesday.d.ts","./node_modules/date-fns/nextwednesday.d.ts","./node_modules/date-fns/parse/_lib/types.d.ts","./node_modules/date-fns/parse/_lib/setter.d.ts","./node_modules/date-fns/parse/_lib/parser.d.ts","./node_modules/date-fns/parse/_lib/parsers.d.ts","./node_modules/date-fns/parse.d.ts","./node_modules/date-fns/parseiso.d.ts","./node_modules/date-fns/parsejson.d.ts","./node_modules/date-fns/previousday.d.ts","./node_modules/date-fns/previousfriday.d.ts","./node_modules/date-fns/previousmonday.d.ts","./node_modules/date-fns/previoussaturday.d.ts","./node_modules/date-fns/previoussunday.d.ts","./node_modules/date-fns/previousthursday.d.ts","./node_modules/date-fns/previoustuesday.d.ts","./node_modules/date-fns/previouswednesday.d.ts","./node_modules/date-fns/quarterstomonths.d.ts","./node_modules/date-fns/quarterstoyears.d.ts","./node_modules/date-fns/roundtonearesthours.d.ts","./node_modules/date-fns/roundtonearestminutes.d.ts","./node_modules/date-fns/secondstohours.d.ts","./node_modules/date-fns/secondstomilliseconds.d.ts","./node_modules/date-fns/secondstominutes.d.ts","./node_modules/date-fns/set.d.ts","./node_modules/date-fns/setdate.d.ts","./node_modules/date-fns/setday.d.ts","./node_modules/date-fns/setdayofyear.d.ts","./node_modules/date-fns/setdefaultoptions.d.ts","./node_modules/date-fns/sethours.d.ts","./node_modules/date-fns/setisoday.d.ts","./node_modules/date-fns/setisoweek.d.ts","./node_modules/date-fns/setisoweekyear.d.ts","./node_modules/date-fns/setmilliseconds.d.ts","./node_modules/date-fns/setminutes.d.ts","./node_modules/date-fns/setmonth.d.ts","./node_modules/date-fns/setquarter.d.ts","./node_modules/date-fns/setseconds.d.ts","./node_modules/date-fns/setweek.d.ts","./node_modules/date-fns/setweekyear.d.ts","./node_modules/date-fns/setyear.d.ts","./node_modules/date-fns/startofday.d.ts","./node_modules/date-fns/startofdecade.d.ts","./node_modules/date-fns/startofhour.d.ts","./node_modules/date-fns/startofisoweek.d.ts","./node_modules/date-fns/startofisoweekyear.d.ts","./node_modules/date-fns/startofminute.d.ts","./node_modules/date-fns/startofmonth.d.ts","./node_modules/date-fns/startofquarter.d.ts","./node_modules/date-fns/startofsecond.d.ts","./node_modules/date-fns/startoftoday.d.ts","./node_modules/date-fns/startoftomorrow.d.ts","./node_modules/date-fns/startofweek.d.ts","./node_modules/date-fns/startofweekyear.d.ts","./node_modules/date-fns/startofyear.d.ts","./node_modules/date-fns/startofyesterday.d.ts","./node_modules/date-fns/sub.d.ts","./node_modules/date-fns/subbusinessdays.d.ts","./node_modules/date-fns/subdays.d.ts","./node_modules/date-fns/subhours.d.ts","./node_modules/date-fns/subisoweekyears.d.ts","./node_modules/date-fns/submilliseconds.d.ts","./node_modules/date-fns/subminutes.d.ts","./node_modules/date-fns/submonths.d.ts","./node_modules/date-fns/subquarters.d.ts","./node_modules/date-fns/subseconds.d.ts","./node_modules/date-fns/subweeks.d.ts","./node_modules/date-fns/subyears.d.ts","./node_modules/date-fns/todate.d.ts","./node_modules/date-fns/transpose.d.ts","./node_modules/date-fns/weekstodays.d.ts","./node_modules/date-fns/yearstodays.d.ts","./node_modules/date-fns/yearstomonths.d.ts","./node_modules/date-fns/yearstoquarters.d.ts","./node_modules/date-fns/index.d.ts","./node_modules/date-fns/locale/af.d.ts","./node_modules/date-fns/locale/ar.d.ts","./node_modules/date-fns/locale/ar-dz.d.ts","./node_modules/date-fns/locale/ar-eg.d.ts","./node_modules/date-fns/locale/ar-ma.d.ts","./node_modules/date-fns/locale/ar-sa.d.ts","./node_modules/date-fns/locale/ar-tn.d.ts","./node_modules/date-fns/locale/az.d.ts","./node_modules/date-fns/locale/be.d.ts","./node_modules/date-fns/locale/be-tarask.d.ts","./node_modules/date-fns/locale/bg.d.ts","./node_modules/date-fns/locale/bn.d.ts","./node_modules/date-fns/locale/bs.d.ts","./node_modules/date-fns/locale/ca.d.ts","./node_modules/date-fns/locale/ckb.d.ts","./node_modules/date-fns/locale/cs.d.ts","./node_modules/date-fns/locale/cy.d.ts","./node_modules/date-fns/locale/da.d.ts","./node_modules/date-fns/locale/de.d.ts","./node_modules/date-fns/locale/de-at.d.ts","./node_modules/date-fns/locale/el.d.ts","./node_modules/date-fns/locale/en-au.d.ts","./node_modules/date-fns/locale/en-ca.d.ts","./node_modules/date-fns/locale/en-gb.d.ts","./node_modules/date-fns/locale/en-ie.d.ts","./node_modules/date-fns/locale/en-in.d.ts","./node_modules/date-fns/locale/en-nz.d.ts","./node_modules/date-fns/locale/en-us.d.ts","./node_modules/date-fns/locale/en-za.d.ts","./node_modules/date-fns/locale/eo.d.ts","./node_modules/date-fns/locale/es.d.ts","./node_modules/date-fns/locale/et.d.ts","./node_modules/date-fns/locale/eu.d.ts","./node_modules/date-fns/locale/fa-ir.d.ts","./node_modules/date-fns/locale/fi.d.ts","./node_modules/date-fns/locale/fr.d.ts","./node_modules/date-fns/locale/fr-ca.d.ts","./node_modules/date-fns/locale/fr-ch.d.ts","./node_modules/date-fns/locale/fy.d.ts","./node_modules/date-fns/locale/gd.d.ts","./node_modules/date-fns/locale/gl.d.ts","./node_modules/date-fns/locale/gu.d.ts","./node_modules/date-fns/locale/he.d.ts","./node_modules/date-fns/locale/hi.d.ts","./node_modules/date-fns/locale/hr.d.ts","./node_modules/date-fns/locale/ht.d.ts","./node_modules/date-fns/locale/hu.d.ts","./node_modules/date-fns/locale/hy.d.ts","./node_modules/date-fns/locale/id.d.ts","./node_modules/date-fns/locale/is.d.ts","./node_modules/date-fns/locale/it.d.ts","./node_modules/date-fns/locale/it-ch.d.ts","./node_modules/date-fns/locale/ja.d.ts","./node_modules/date-fns/locale/ja-hira.d.ts","./node_modules/date-fns/locale/ka.d.ts","./node_modules/date-fns/locale/kk.d.ts","./node_modules/date-fns/locale/km.d.ts","./node_modules/date-fns/locale/kn.d.ts","./node_modules/date-fns/locale/ko.d.ts","./node_modules/date-fns/locale/lb.d.ts","./node_modules/date-fns/locale/lt.d.ts","./node_modules/date-fns/locale/lv.d.ts","./node_modules/date-fns/locale/mk.d.ts","./node_modules/date-fns/locale/mn.d.ts","./node_modules/date-fns/locale/ms.d.ts","./node_modules/date-fns/locale/mt.d.ts","./node_modules/date-fns/locale/nb.d.ts","./node_modules/date-fns/locale/nl.d.ts","./node_modules/date-fns/locale/nl-be.d.ts","./node_modules/date-fns/locale/nn.d.ts","./node_modules/date-fns/locale/oc.d.ts","./node_modules/date-fns/locale/pl.d.ts","./node_modules/date-fns/locale/pt.d.ts","./node_modules/date-fns/locale/pt-br.d.ts","./node_modules/date-fns/locale/ro.d.ts","./node_modules/date-fns/locale/ru.d.ts","./node_modules/date-fns/locale/se.d.ts","./node_modules/date-fns/locale/sk.d.ts","./node_modules/date-fns/locale/sl.d.ts","./node_modules/date-fns/locale/sq.d.ts","./node_modules/date-fns/locale/sr.d.ts","./node_modules/date-fns/locale/sr-latn.d.ts","./node_modules/date-fns/locale/sv.d.ts","./node_modules/date-fns/locale/ta.d.ts","./node_modules/date-fns/locale/te.d.ts","./node_modules/date-fns/locale/th.d.ts","./node_modules/date-fns/locale/tr.d.ts","./node_modules/date-fns/locale/ug.d.ts","./node_modules/date-fns/locale/uk.d.ts","./node_modules/date-fns/locale/uz.d.ts","./node_modules/date-fns/locale/uz-cyrl.d.ts","./node_modules/date-fns/locale/vi.d.ts","./node_modules/date-fns/locale/zh-cn.d.ts","./node_modules/date-fns/locale/zh-hk.d.ts","./node_modules/date-fns/locale/zh-tw.d.ts","./node_modules/date-fns/locale.d.ts","./node_modules/react-day-picker/dist/esm/components/button.d.ts","./node_modules/react-day-picker/dist/esm/components/captionlabel.d.ts","./node_modules/react-day-picker/dist/esm/components/chevron.d.ts","./node_modules/react-day-picker/dist/esm/components/monthcaption.d.ts","./node_modules/react-day-picker/dist/esm/components/week.d.ts","./node_modules/react-day-picker/dist/esm/labels/labeldaybutton.d.ts","./node_modules/react-day-picker/dist/esm/labels/labelgrid.d.ts","./node_modules/react-day-picker/dist/esm/labels/labelgridcell.d.ts","./node_modules/react-day-picker/dist/esm/labels/labelmonthdropdown.d.ts","./node_modules/react-day-picker/dist/esm/labels/labelnav.d.ts","./node_modules/react-day-picker/dist/esm/labels/labelnext.d.ts","./node_modules/react-day-picker/dist/esm/labels/labelprevious.d.ts","./node_modules/react-day-picker/dist/esm/labels/labelweekday.d.ts","./node_modules/react-day-picker/dist/esm/labels/labelweeknumber.d.ts","./node_modules/react-day-picker/dist/esm/labels/labelweeknumberheader.d.ts","./node_modules/react-day-picker/dist/esm/labels/labelyeardropdown.d.ts","./node_modules/react-day-picker/dist/esm/labels/index.d.ts","./node_modules/react-day-picker/dist/esm/ui.d.ts","./node_modules/react-day-picker/dist/esm/classes/calendarweek.d.ts","./node_modules/react-day-picker/dist/esm/classes/calendarmonth.d.ts","./node_modules/react-day-picker/dist/esm/types/props.d.ts","./node_modules/react-day-picker/dist/esm/types/selection.d.ts","./node_modules/react-day-picker/dist/esm/usedaypicker.d.ts","./node_modules/react-day-picker/dist/esm/types/deprecated.d.ts","./node_modules/react-day-picker/dist/esm/types/index.d.ts","./node_modules/react-day-picker/dist/esm/components/day.d.ts","./node_modules/react-day-picker/dist/esm/components/daybutton.d.ts","./node_modules/react-day-picker/dist/esm/components/dropdown.d.ts","./node_modules/react-day-picker/dist/esm/components/dropdownnav.d.ts","./node_modules/react-day-picker/dist/esm/components/footer.d.ts","./node_modules/react-day-picker/dist/esm/components/month.d.ts","./node_modules/react-day-picker/dist/esm/components/monthgrid.d.ts","./node_modules/react-day-picker/dist/esm/components/months.d.ts","./node_modules/react-day-picker/dist/esm/components/monthsdropdown.d.ts","./node_modules/react-day-picker/dist/esm/components/nav.d.ts","./node_modules/react-day-picker/dist/esm/components/nextmonthbutton.d.ts","./node_modules/react-day-picker/dist/esm/components/option.d.ts","./node_modules/react-day-picker/dist/esm/components/previousmonthbutton.d.ts","./node_modules/react-day-picker/dist/esm/components/root.d.ts","./node_modules/react-day-picker/dist/esm/components/select.d.ts","./node_modules/react-day-picker/dist/esm/components/weekday.d.ts","./node_modules/react-day-picker/dist/esm/components/weekdays.d.ts","./node_modules/react-day-picker/dist/esm/components/weeknumber.d.ts","./node_modules/react-day-picker/dist/esm/components/weeknumberheader.d.ts","./node_modules/react-day-picker/dist/esm/components/weeks.d.ts","./node_modules/react-day-picker/dist/esm/components/yearsdropdown.d.ts","./node_modules/react-day-picker/dist/esm/components/custom-components.d.ts","./node_modules/react-day-picker/dist/esm/formatters/formatcaption.d.ts","./node_modules/react-day-picker/dist/esm/formatters/formatday.d.ts","./node_modules/react-day-picker/dist/esm/formatters/formatmonthdropdown.d.ts","./node_modules/react-day-picker/dist/esm/formatters/formatweekdayname.d.ts","./node_modules/react-day-picker/dist/esm/formatters/formatweeknumber.d.ts","./node_modules/react-day-picker/dist/esm/formatters/formatweeknumberheader.d.ts","./node_modules/react-day-picker/dist/esm/formatters/formatyeardropdown.d.ts","./node_modules/react-day-picker/dist/esm/formatters/index.d.ts","./node_modules/react-day-picker/dist/esm/types/shared.d.ts","./node_modules/react-day-picker/dist/esm/locale/en-us.d.ts","./node_modules/react-day-picker/dist/esm/classes/datelib.d.ts","./node_modules/react-day-picker/dist/esm/classes/calendarday.d.ts","./node_modules/react-day-picker/dist/esm/classes/index.d.ts","./node_modules/react-day-picker/dist/esm/daypicker.d.ts","./node_modules/react-day-picker/dist/esm/helpers/getdefaultclassnames.d.ts","./node_modules/react-day-picker/dist/esm/helpers/index.d.ts","./node_modules/react-day-picker/dist/esm/utils/addtorange.d.ts","./node_modules/react-day-picker/dist/esm/utils/datematchmodifiers.d.ts","./node_modules/react-day-picker/dist/esm/utils/rangecontainsdayofweek.d.ts","./node_modules/react-day-picker/dist/esm/utils/rangecontainsmodifiers.d.ts","./node_modules/react-day-picker/dist/esm/utils/rangeincludesdate.d.ts","./node_modules/react-day-picker/dist/esm/utils/rangeoverlaps.d.ts","./node_modules/react-day-picker/dist/esm/utils/typeguards.d.ts","./node_modules/react-day-picker/dist/esm/utils/index.d.ts","./node_modules/react-day-picker/dist/esm/index.d.ts","./components/ui/calendar.tsx","./node_modules/recharts/types/container/surface.d.ts","./node_modules/recharts/types/container/layer.d.ts","./node_modules/@types/d3-time/index.d.ts","./node_modules/@types/d3-scale/index.d.ts","./node_modules/victory-vendor/d3-scale.d.ts","./node_modules/recharts/types/cartesian/xaxis.d.ts","./node_modules/recharts/types/cartesian/yaxis.d.ts","./node_modules/recharts/types/util/types.d.ts","./node_modules/recharts/types/component/defaultlegendcontent.d.ts","./node_modules/recharts/types/util/payload/getuniqpayload.d.ts","./node_modules/recharts/types/component/legend.d.ts","./node_modules/recharts/types/component/defaulttooltipcontent.d.ts","./node_modules/recharts/types/component/tooltip.d.ts","./node_modules/recharts/types/component/responsivecontainer.d.ts","./node_modules/recharts/types/component/cell.d.ts","./node_modules/recharts/types/component/text.d.ts","./node_modules/recharts/types/component/label.d.ts","./node_modules/recharts/types/component/labellist.d.ts","./node_modules/recharts/types/component/customized.d.ts","./node_modules/recharts/types/shape/sector.d.ts","./node_modules/@types/d3-path/index.d.ts","./node_modules/@types/d3-shape/index.d.ts","./node_modules/victory-vendor/d3-shape.d.ts","./node_modules/recharts/types/shape/curve.d.ts","./node_modules/recharts/types/shape/rectangle.d.ts","./node_modules/recharts/types/shape/polygon.d.ts","./node_modules/recharts/types/shape/dot.d.ts","./node_modules/recharts/types/shape/cross.d.ts","./node_modules/recharts/types/shape/symbols.d.ts","./node_modules/recharts/types/polar/polargrid.d.ts","./node_modules/recharts/types/polar/polarradiusaxis.d.ts","./node_modules/recharts/types/polar/polarangleaxis.d.ts","./node_modules/recharts/types/polar/pie.d.ts","./node_modules/recharts/types/polar/radar.d.ts","./node_modules/recharts/types/polar/radialbar.d.ts","./node_modules/recharts/types/cartesian/brush.d.ts","./node_modules/recharts/types/util/ifoverflowmatches.d.ts","./node_modules/recharts/types/cartesian/referenceline.d.ts","./node_modules/recharts/types/cartesian/referencedot.d.ts","./node_modules/recharts/types/cartesian/referencearea.d.ts","./node_modules/recharts/types/cartesian/cartesianaxis.d.ts","./node_modules/recharts/types/cartesian/cartesiangrid.d.ts","./node_modules/recharts/types/cartesian/line.d.ts","./node_modules/recharts/types/cartesian/area.d.ts","./node_modules/recharts/types/util/barutils.d.ts","./node_modules/recharts/types/cartesian/bar.d.ts","./node_modules/recharts/types/cartesian/zaxis.d.ts","./node_modules/recharts/types/cartesian/errorbar.d.ts","./node_modules/recharts/types/cartesian/scatter.d.ts","./node_modules/recharts/types/util/getlegendprops.d.ts","./node_modules/recharts/types/util/chartutils.d.ts","./node_modules/recharts/types/chart/accessibilitymanager.d.ts","./node_modules/recharts/types/chart/types.d.ts","./node_modules/recharts/types/chart/generatecategoricalchart.d.ts","./node_modules/recharts/types/chart/linechart.d.ts","./node_modules/recharts/types/chart/barchart.d.ts","./node_modules/recharts/types/chart/piechart.d.ts","./node_modules/recharts/types/chart/treemap.d.ts","./node_modules/recharts/types/chart/sankey.d.ts","./node_modules/recharts/types/chart/radarchart.d.ts","./node_modules/recharts/types/chart/scatterchart.d.ts","./node_modules/recharts/types/chart/areachart.d.ts","./node_modules/recharts/types/chart/radialbarchart.d.ts","./node_modules/recharts/types/chart/composedchart.d.ts","./node_modules/recharts/types/chart/sunburstchart.d.ts","./node_modules/recharts/types/shape/trapezoid.d.ts","./node_modules/recharts/types/numberaxis/funnel.d.ts","./node_modules/recharts/types/chart/funnelchart.d.ts","./node_modules/recharts/types/util/global.d.ts","./node_modules/recharts/types/index.d.ts","./components/ui/chart.tsx","./components/ui/collapsible.tsx","./node_modules/cmdk/dist/index.d.ts","./components/ui/command.tsx","./node_modules/@radix-ui/react-arrow/dist/index.d.mts","./node_modules/@radix-ui/rect/dist/index.d.mts","./node_modules/@radix-ui/react-popper/dist/index.d.mts","./node_modules/@radix-ui/react-roving-focus/dist/index.d.mts","./node_modules/@radix-ui/react-menu/dist/index.d.mts","./node_modules/@radix-ui/react-context-menu/dist/index.d.mts","./components/ui/context-menu.tsx","./node_modules/vaul/dist/index.d.mts","./components/ui/drawer.tsx","./node_modules/@radix-ui/react-dropdown-menu/dist/index.d.mts","./components/ui/dropdown-menu.tsx","./components/ui/empty.tsx","./node_modules/@radix-ui/react-label/node_modules/@radix-ui/react-primitive/dist/index.d.mts","./node_modules/@radix-ui/react-label/dist/index.d.mts","./components/ui/label.tsx","./components/ui/field.tsx","./node_modules/react-hook-form/dist/constants.d.ts","./node_modules/react-hook-form/dist/utils/createsubject.d.ts","./node_modules/react-hook-form/dist/types/events.d.ts","./node_modules/react-hook-form/dist/types/path/common.d.ts","./node_modules/react-hook-form/dist/types/path/eager.d.ts","./node_modules/react-hook-form/dist/types/path/index.d.ts","./node_modules/react-hook-form/dist/types/fieldarray.d.ts","./node_modules/react-hook-form/dist/types/resolvers.d.ts","./node_modules/react-hook-form/dist/types/form.d.ts","./node_modules/react-hook-form/dist/types/utils.d.ts","./node_modules/react-hook-form/dist/types/fields.d.ts","./node_modules/react-hook-form/dist/types/errors.d.ts","./node_modules/react-hook-form/dist/types/validator.d.ts","./node_modules/react-hook-form/dist/types/controller.d.ts","./node_modules/react-hook-form/dist/types/watch.d.ts","./node_modules/react-hook-form/dist/types/index.d.ts","./node_modules/react-hook-form/dist/controller.d.ts","./node_modules/react-hook-form/dist/form.d.ts","./node_modules/react-hook-form/dist/formstatesubscribe.d.ts","./node_modules/react-hook-form/dist/logic/appenderrors.d.ts","./node_modules/react-hook-form/dist/logic/createformcontrol.d.ts","./node_modules/react-hook-form/dist/logic/index.d.ts","./node_modules/react-hook-form/dist/usecontroller.d.ts","./node_modules/react-hook-form/dist/usefieldarray.d.ts","./node_modules/react-hook-form/dist/useform.d.ts","./node_modules/react-hook-form/dist/useformcontext.d.ts","./node_modules/react-hook-form/dist/useformstate.d.ts","./node_modules/react-hook-form/dist/usewatch.d.ts","./node_modules/react-hook-form/dist/utils/get.d.ts","./node_modules/react-hook-form/dist/utils/set.d.ts","./node_modules/react-hook-form/dist/utils/index.d.ts","./node_modules/react-hook-form/dist/watch.d.ts","./node_modules/react-hook-form/dist/index.d.ts","./components/ui/form.tsx","./node_modules/@radix-ui/react-hover-card/dist/index.d.mts","./components/ui/hover-card.tsx","./components/ui/input.tsx","./components/ui/textarea.tsx","./components/ui/input-group.tsx","./node_modules/input-otp/dist/index.d.ts","./components/ui/input-otp.tsx","./components/ui/item.tsx","./components/ui/kbd.tsx","./node_modules/@radix-ui/react-menubar/dist/index.d.mts","./components/ui/menubar.tsx","./node_modules/@radix-ui/react-visually-hidden/dist/index.d.mts","./node_modules/@radix-ui/react-navigation-menu/dist/index.d.mts","./components/ui/navigation-menu.tsx","./components/ui/pagination.tsx","./node_modules/@radix-ui/react-popover/dist/index.d.mts","./components/ui/popover.tsx","./node_modules/@radix-ui/react-progress/node_modules/@radix-ui/react-context/dist/index.d.mts","./node_modules/@radix-ui/react-progress/node_modules/@radix-ui/react-primitive/dist/index.d.mts","./node_modules/@radix-ui/react-progress/dist/index.d.mts","./components/ui/progress.tsx","./node_modules/@radix-ui/react-radio-group/dist/index.d.mts","./components/ui/radio-group.tsx","./node_modules/react-resizable-panels/dist/declarations/src/panel.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/types.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/panelgroup.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/panelresizehandleregistry.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/panelresizehandle.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/constants.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/utils/assert.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/utils/csp.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/utils/cursor.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/utils/dom/getpanelelement.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/utils/dom/getpanelelementsforgroup.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/utils/dom/getpanelgroupelement.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/utils/dom/getresizehandleelement.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/utils/dom/getresizehandleelementindex.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/utils/dom/getresizehandleelementsforgroup.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/utils/dom/getresizehandlepanelids.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/utils/rects/types.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/utils/rects/getintersectingrectangle.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/utils/rects/intersects.d.ts","./node_modules/react-resizable-panels/dist/declarations/src/index.d.ts","./node_modules/react-resizable-panels/dist/react-resizable-panels.cjs.d.mts","./components/ui/resizable.tsx","./node_modules/@radix-ui/react-scroll-area/dist/index.d.mts","./components/ui/scroll-area.tsx","./node_modules/@radix-ui/react-select/dist/index.d.mts","./components/ui/select.tsx","./components/ui/sheet.tsx","./components/ui/skeleton.tsx","./node_modules/@radix-ui/react-tooltip/dist/index.d.mts","./components/ui/tooltip.tsx","./components/ui/sidebar.tsx","./node_modules/@radix-ui/react-slider/dist/index.d.mts","./components/ui/slider.tsx","./node_modules/sonner/dist/index.d.ts","./components/ui/sonner.tsx","./components/ui/spinner.tsx","./node_modules/@radix-ui/react-switch/dist/index.d.mts","./components/ui/switch.tsx","./components/ui/table.tsx","./node_modules/@radix-ui/react-tabs/dist/index.d.mts","./components/ui/tabs.tsx","./components/ui/toaster.tsx","./node_modules/@radix-ui/react-toggle/dist/index.d.mts","./node_modules/@radix-ui/react-toggle-group/dist/index.d.mts","./components/ui/toggle.tsx","./components/ui/toggle-group.tsx","./components/ui/use-mobile.tsx","./.next/types/cache-life.d.ts","./.next/types/routes.d.ts","./.next/types/validator.ts","./.next/dev/types/cache-life.d.ts","./.next/dev/types/validator.ts","./node_modules/@types/d3-array/index.d.ts","./node_modules/@types/d3-color/index.d.ts","./node_modules/@types/d3-ease/index.d.ts","./node_modules/@types/d3-interpolate/index.d.ts","./node_modules/@types/d3-timer/index.d.ts"],"fileIdsList":[[93,141,158,159,483,484,485,486,1309],[93,141,158,159,1309,1312],[93,141,158,159,226,527,530,553,610,612,656,658,659,1309,1312],[93,141,158,159,483,484,485,486,1312],[93,141,158,159,226,527,553,610,612,656,658,659,1309,1310,1312],[81,93,141,158,159,226,539,559,564,611,1309,1312],[93,141,158,159,226,525,528,549,551,552,1309,1312],[93,141,158,159,226,491,517,655,1309,1312],[81,93,141,158,159,226,507,517,539,556,558,559,560,564,566,567,608,609,1309,1312],[93,141,158,159,226,546,657,1309,1312],[81,93,141,158,159,226,507,539,558,559,560,1309,1312],[93,141,158,159,226,507,539,558,559,611,1309,1312],[81,93,141,158,159,226,517,525,539,558,560,614,654,1309,1312],[81,93,141,158,159,226,507,517,539,558,1309,1312],[93,141,158,159,226,567,1309,1312],[81,93,141,158,159,226,507,559,560,604,607,1309,1312],[81,93,141,158,159,226,660,1309,1312],[81,93,141,158,159,226,539,541,663,1309,1312],[81,93,141,158,159,226,541,558,665,1309,1312],[81,93,141,158,159,226,538,541,1309,1312],[93,141,158,159,226,669,1309,1312],[81,93,141,158,159,226,541,673,1309,1312],[81,93,141,158,159,226,538,541,557,1309,1312],[81,93,141,158,159,226,539,541,557,1309,1312],[93,141,158,159,226,538,541,557,678,1309,1312],[81,93,141,158,159,226,539,541,558,1113,1309,1312],[81,93,141,158,159,226,541,1309,1312],[81,93,141,158,159,226,539,541,558,606,1309,1312],[81,93,141,158,159,226,541,1184,1309,1312],[81,93,141,158,159,226,539,541,565,1309,1312],[93,141,158,159,226,662,1309,1312],[81,93,141,158,159,226,539,541,564,1187,1309,1312],[81,93,141,158,159,226,539,541,1194,1309,1312],[81,93,141,158,159,226,539,541,563,1309,1312],[81,93,141,158,159,226,541,1196,1309,1312],[81,93,141,158,159,226,539,541,1198,1309,1312],[93,141,158,159,226,538,541,1309,1312],[81,93,141,158,159,226,538,541,678,1203,1309,1312],[81,93,141,158,159,226,541,557,1202,1203,1237,1309,1312],[81,93,141,158,159,226,541,1239,1309,1312],[93,141,158,159,226,538,541,558,1241,1242,1309,1312],[81,93,141,158,159,226,539,541,1244,1309,1312],[81,93,141,158,159,226,538,541,557,678,1309,1312],[93,141,158,159,226,541,1309,1312],[81,93,141,158,159,226,541,1202,1309,1312],[81,93,141,158,159,226,539,541,1248,1309,1312],[81,93,141,158,159,226,538,539,541,1251,1309,1312],[81,93,141,158,159,226,539,541,558,1309,1312],[81,93,141,158,159,226,541,1254,1309,1312],[81,93,141,158,159,226,541,1258,1309,1312],[81,93,141,158,159,226,539,541,1260,1309,1312],[81,93,141,158,159,226,539,541,1282,1309,1312],[81,93,141,158,159,226,541,1284,1309,1312],[81,93,141,158,159,226,539,541,1286,1309,1312],[81,93,141,158,159,226,541,677,1309,1312],[81,93,141,158,159,226,538,539,541,544,557,558,678,1241,1288,1289,1291,1309,1312],[81,93,141,158,159,226,541,1293,1309,1312],[93,141,158,159,226,660,1295,1309,1312],[93,141,158,159,226,539,541,1309,1312],[81,93,141,158,159,226,541,1298,1309,1312],[81,93,141,158,159,226,541,1301,1309,1312],[81,93,141,158,159,226,535,538,539,541,1309,1312],[93,141,158,159,226,542,545,1309,1312],[81,93,141,158,159,226,538,541,1305,1306,1309,1312],[81,93,141,158,159,226,538,541,1304,1309,1312],[81,93,141,158,159,226,541,1290,1309,1312],[81,93,141,158,159,226,1309,1312],[81,93,141,158,159,226,542,1309,1312],[81,93,141,158,159,226,539,564,607,1309,1312],[93,141,153,158,159,163,226,1309,1312],[93,141,158,159,226,536,540,1309,1312],[93,141,158,159,528,529,530,1309,1312],[93,141,158,159,680,1309,1312],[93,141,158,159,681,1309,1312],[93,141,158,159,680,681,682,683,684,685,686,1309,1312],[81,93,141,158,159,532,533,662,1309,1312],[81,93,141,158,159,532,563,1309,1312],[81,93,141,158,159,533,1309,1312],[81,93,141,158,159,668,1309,1312],[81,93,141,158,159,1309,1312],[81,93,141,158,159,668,671,1309,1312],[81,93,141,158,159,226,532,533,1309,1312],[81,93,141,158,159,532,533,1309,1312],[81,93,141,158,159,532,533,1193,1309,1312],[81,93,141,158,159,532,533,534,561,562,1309,1312],[81,93,141,158,159,532,533,534,562,1191,1309,1312],[81,93,141,158,159,532,533,534,561,562,1191,1192,1309,1312],[81,93,141,158,159,226,532,533,1192,1193,1309,1312],[81,93,141,158,159,532,533,534,1250,1309,1312],[81,93,141,158,159,532,533,534,561,562,1191,1309,1312],[81,93,141,158,159,532,533,1189,1190,1309,1312],[81,93,141,158,159,532,533,1192,1309,1312],[81,85,93,141,158,159,192,193,194,195,196,478,523,1309,1312],[81,93,141,158,159,532,533,534,1309,1312],[81,93,141,158,159,532,533,1192,1304,1309,1312],[93,141,158,159,614,1309,1312],[81,93,141,158,159,614,622,1309,1312],[81,93,141,158,159,619,624,1309,1312],[81,93,141,158,159,614,1309,1312],[93,141,158,159,614,619,1309,1312],[93,141,158,159,614,618,619,621,1309,1312],[81,93,141,158,159,618,1309,1312],[81,93,141,158,159,614,618,619,621,622,624,625,1309,1312],[93,141,158,159,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,1309,1312],[93,141,158,159,614,618,619,620,1309,1312],[93,141,158,159,614,621,1309,1312],[93,141,158,159,614,618,1309,1312],[93,141,158,159,614,619,621,1309,1312],[93,141,158,159,1309,1312,1315],[93,141,158,159,1117,1309,1312],[93,141,158,159,1135,1309,1312],[93,141,158,159,613,1309,1312],[93,138,139,141,158,159,1309,1312],[93,140,141,158,159,1309,1312],[141,158,159,1309,1312],[93,141,146,158,159,176,1309,1312],[93,141,142,147,152,158,159,161,173,184,1309,1312],[93,141,142,143,152,158,159,161,1309,1312],[88,89,90,93,141,158,159,1309,1312],[93,141,144,158,159,185,1309,1312],[93,141,145,146,153,158,159,162,1309,1312],[93,141,146,158,159,173,181,1309,1312],[93,141,147,149,152,158,159,161,1309,1312],[93,140,141,148,158,159,1309,1312],[93,141,149,150,158,159,1309,1312],[93,141,151,152,158,159,1309,1312],[93,140,141,152,158,159,1309,1312],[93,141,152,153,154,158,159,173,184,1309,1312],[93,141,152,153,154,158,159,168,173,176,1309,1312],[93,134,141,149,152,155,158,159,161,173,184,1309,1312],[93,141,152,153,155,156,158,159,161,173,181,184,1309,1312],[93,141,155,157,158,159,173,181,184,1309,1312],[91,92,93,94,95,96,97,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,1309,1312],[93,141,152,158,159,1309,1312],[93,141,158,159,160,184,1309,1312],[93,141,149,152,158,159,161,173,1309,1312],[93,141,158,159,162,1309,1312],[93,141,158,159,163,1309,1312],[93,140,141,158,159,164,1309,1312],[93,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,1309,1312],[93,141,158,159,166,1309,1312],[93,141,158,159,167,1309,1312],[93,141,152,158,159,168,169,1309,1312],[93,141,158,159,168,170,185,187,1309,1312],[93,141,153,158,159,1309,1312],[93,141,152,158,159,173,174,176,1309,1312],[93,141,158,159,175,176,1309,1312],[93,141,158,159,173,174,1309,1312],[93,141,158,159,176,1309,1312],[93,141,158,159,177,1309,1312],[93,138,141,158,159,173,178,184,1309,1312],[93,141,152,158,159,179,180,1309,1312],[93,141,158,159,179,180,1309,1312],[93,141,146,158,159,161,173,181,1309,1312],[93,141,158,159,182,1309,1312],[93,141,158,159,161,183,1309,1312],[93,141,155,158,159,167,184,1309,1312],[93,141,146,158,159,185,1309,1312],[93,141,158,159,173,186,1309,1312],[93,141,158,159,160,187,1309,1312],[93,141,158,159,188,1309,1312],[93,134,141,158,159,1309,1312],[93,134,141,152,154,158,159,164,173,176,184,186,187,189,1309,1312],[93,141,158,159,173,190,1309,1312],[81,85,93,141,158,159,192,193,194,196,478,523,557,1309,1312],[81,85,93,141,158,159,192,193,194,195,459,478,523,557,1309,1312],[81,85,93,141,158,159,192,193,195,196,478,523,557,1309,1312],[81,93,141,158,159,196,459,460,1309,1312],[81,93,141,158,159,196,459,1309,1312],[81,85,93,141,158,159,193,194,195,196,478,523,557,1309,1312],[81,85,93,141,158,159,192,194,195,196,478,523,557,1309,1312],[79,80,93,141,158,159,1309,1312],[93,141,158,159,536,537,1309,1312],[93,141,158,159,536,1309,1312],[81,93,141,158,159,563,1309,1312],[93,141,158,159,691,1309,1312],[93,141,158,159,689,691,1309,1312],[93,141,158,159,689,1309,1312],[93,141,158,159,691,755,756,1309,1312],[93,141,158,159,691,758,1309,1312],[93,141,158,159,691,759,1309,1312],[93,141,158,159,776,1309,1312],[93,141,158,159,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,1309,1312],[93,141,158,159,691,852,1309,1312],[93,141,158,159,689,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1309,1312],[93,141,158,159,691,756,876,1309,1312],[93,141,158,159,689,873,874,1309,1312],[93,141,158,159,875,1309,1312],[93,141,158,159,691,873,1309,1312],[93,141,158,159,688,689,690,1309,1312],[93,141,158,159,601,602,603,1309,1312],[93,141,158,159,601,603,1309,1312],[93,141,158,159,603,1309,1312],[93,141,158,159,605,1309,1312],[93,141,158,159,575,595,1309,1312],[93,141,158,159,569,1309,1312],[93,141,158,159,570,574,575,576,577,578,580,582,583,588,589,598,1309,1312],[93,141,158,159,570,575,1309,1312],[93,141,158,159,578,595,597,600,1309,1312],[93,141,158,159,569,570,571,572,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,599,600,1309,1312],[93,141,158,159,598,1309,1312],[93,141,158,159,568,570,571,573,581,590,593,594,599,1309,1312],[93,141,158,159,575,600,1309,1312],[93,141,158,159,596,598,600,1309,1312],[93,141,158,159,569,570,575,578,598,1309,1312],[93,141,158,159,582,1309,1312],[93,141,158,159,572,580,582,583,1309,1312],[93,141,158,159,572,1309,1312],[93,141,158,159,572,582,1309,1312],[93,141,158,159,576,577,578,582,583,588,1309,1312],[93,141,158,159,578,579,583,587,589,598,1309,1312],[93,141,158,159,570,582,591,1309,1312],[93,141,158,159,571,572,573,1309,1312],[93,141,158,159,578,598,1309,1312],[93,141,158,159,578,1309,1312],[93,141,158,159,569,570,1309,1312],[93,141,158,159,570,1309,1312],[93,141,158,159,574,1309,1312],[93,141,158,159,578,583,595,596,597,598,600,1309,1312],[81,93,141,158,159,226,554,555,1309,1312],[93,141,158,159,554,1309,1312],[93,141,158,159,481,1309,1312],[93,141,158,159,483,484,485,486,1309,1312],[93,141,158,159,429,492,493,1309,1312],[93,141,158,159,201,202,204,216,240,355,366,474,1309,1312],[93,141,158,159,204,235,236,237,239,474,1309,1312],[93,141,158,159,204,372,374,376,377,379,474,476,1309,1312],[93,141,158,159,204,238,275,474,1309,1312],[93,141,158,159,202,204,215,216,222,228,233,354,355,356,365,474,476,1309,1312],[93,141,158,159,474,1309,1312],[93,141,158,159,211,217,236,256,351,1309,1312],[93,141,158,159,204,1309,1312],[93,141,158,159,197,211,217,1309,1312],[93,141,158,159,383,1309,1312],[93,141,158,159,380,381,383,1309,1312],[93,141,158,159,380,382,474,1309,1312],[93,141,155,158,159,256,453,471,1309,1312],[93,141,155,158,159,327,330,346,351,471,1309,1312],[93,141,155,158,159,299,471,1309,1312],[93,141,158,159,359,1309,1312],[93,141,158,159,358,359,360,1309,1312],[93,141,158,159,358,1309,1312],[87,93,141,155,158,159,197,204,216,222,228,234,236,240,241,254,255,322,352,353,366,474,478,1309,1312],[93,141,158,159,201,204,238,275,372,373,378,474,526,1309,1312],[93,141,158,159,238,526,1309,1312],[93,141,158,159,201,255,424,474,526,1309,1312],[93,141,158,159,526,1309,1312],[93,141,158,159,204,238,239,526,1309,1312],[93,141,158,159,375,526,1309,1312],[93,141,158,159,241,354,357,364,1309,1312],[81,93,141,158,159,429,1309,1312],[93,141,158,159,167,211,226,1309,1312],[93,141,158,159,211,226,1309,1312],[81,93,141,158,159,296,1309,1312],[81,93,141,158,159,217,226,429,1309,1312],[93,141,158,159,211,282,296,297,508,515,1309,1312],[93,141,158,159,281,509,510,511,512,514,1309,1312],[93,141,158,159,332,1309,1312],[93,141,158,159,332,333,1309,1312],[93,141,158,159,215,217,284,285,1309,1312],[93,141,158,159,217,291,292,1309,1312],[93,141,158,159,217,286,294,1309,1312],[93,141,158,159,291,1309,1312],[93,141,158,159,209,217,284,285,286,287,288,289,290,291,294,1309,1312],[93,141,158,159,217,284,291,292,293,295,1309,1312],[93,141,158,159,217,285,287,288,1309,1312],[93,141,158,159,285,287,290,292,1309,1312],[93,141,158,159,513,1309,1312],[93,141,158,159,217,1309,1312],[81,93,141,158,159,205,502,1309,1312],[81,93,141,158,159,184,1309,1312],[81,93,141,158,159,238,273,1309,1312],[81,93,141,158,159,238,366,1309,1312],[93,141,158,159,271,276,1309,1312],[81,93,141,158,159,272,480,1309,1312],[93,141,158,159,547,1309,1312],[81,85,93,141,155,158,159,192,193,194,195,196,478,522,557,1309,1312],[93,141,155,158,159,217,1309,1312],[93,141,155,158,159,216,221,302,319,361,362,366,421,423,474,475,1309,1312],[93,141,158,159,254,363,1309,1312],[93,141,158,159,478,1309,1312],[93,141,158,159,203,1309,1312],[81,93,141,158,159,208,211,426,442,444,1309,1312],[93,141,158,159,167,211,426,441,442,443,525,1309,1312],[93,141,158,159,435,436,437,438,439,440,1309,1312],[93,141,158,159,437,1309,1312],[93,141,158,159,441,1309,1312],[93,141,158,159,226,390,391,393,1309,1312],[81,93,141,158,159,217,384,385,386,387,392,1309,1312],[93,141,158,159,390,392,1309,1312],[93,141,158,159,388,1309,1312],[93,141,158,159,389,1309,1312],[81,93,141,158,159,226,272,480,1309,1312],[81,93,141,158,159,226,479,480,1309,1312],[81,93,141,158,159,226,480,1309,1312],[93,141,158,159,319,320,1309,1312],[93,141,158,159,320,1309,1312],[93,141,155,158,159,475,480,1309,1312],[93,141,158,159,349,1309,1312],[93,140,141,158,159,348,1309,1312],[93,141,158,159,211,217,223,225,327,340,344,346,423,426,463,464,471,475,1309,1312],[93,141,158,159,217,266,288,1309,1312],[93,141,158,159,327,338,341,346,1309,1312],[81,93,141,158,159,208,211,327,330,346,349,383,430,431,432,433,434,445,446,447,448,449,450,451,452,526,1309,1312],[93,141,158,159,208,211,236,327,334,335,336,339,340,1309,1312],[93,141,158,159,173,217,236,338,345,426,427,471,1309,1312],[93,141,158,159,342,1309,1312],[93,141,155,158,159,167,205,217,221,231,263,264,267,319,322,387,421,422,463,474,475,476,478,526,1309,1312],[93,141,158,159,208,209,211,1309,1312],[93,141,158,159,327,1309,1312],[93,140,141,158,159,236,263,264,321,322,323,324,325,326,475,1309,1312],[93,141,158,159,346,1309,1312],[93,140,141,158,159,210,211,221,225,261,327,334,335,336,337,338,341,342,343,344,345,464,1309,1312],[93,141,155,158,159,261,262,334,475,476,1309,1312],[93,141,158,159,236,264,319,322,327,423,475,1309,1312],[93,141,155,158,159,474,476,1309,1312],[93,141,155,158,159,173,471,475,476,1309,1312],[93,141,155,158,159,167,197,211,216,223,225,228,231,238,258,263,264,265,266,267,302,303,305,308,310,313,314,315,316,318,366,421,423,471,474,475,476,1309,1312],[93,141,155,158,159,173,1309,1312],[93,141,158,159,204,205,206,234,471,472,473,478,480,526,1309,1312],[93,141,158,159,201,202,474,1309,1312],[93,141,158,159,395,1309,1312],[93,141,155,158,159,173,184,213,379,383,384,385,386,387,393,394,526,1309,1312],[93,141,158,159,167,184,197,211,213,225,228,264,303,308,318,319,372,399,400,401,407,410,411,421,423,471,474,1309,1312],[93,141,158,159,228,234,241,254,264,322,474,1309,1312],[93,141,155,158,159,184,205,216,225,264,405,471,474,1309,1312],[93,141,158,159,425,1309,1312],[93,141,155,158,159,395,408,409,418,1309,1312],[93,141,158,159,471,474,1309,1312],[93,141,158,159,324,464,1309,1312],[93,141,158,159,225,263,366,480,1309,1312],[93,141,155,158,159,167,203,308,368,372,401,407,410,413,471,1309,1312],[93,141,155,158,159,241,254,372,414,1309,1312],[93,141,158,159,204,265,366,416,474,476,1309,1312],[93,141,155,158,159,184,387,474,1309,1312],[93,141,155,158,159,238,265,366,367,368,377,395,415,417,474,1309,1312],[87,93,141,155,158,159,263,420,478,480,1309,1312],[93,141,158,159,317,421,1309,1312],[93,141,155,158,159,167,211,214,216,217,223,225,231,240,241,254,264,267,303,305,315,318,319,366,399,400,401,402,404,406,421,423,471,480,1309,1312],[93,141,155,158,159,173,241,407,412,418,471,1309,1312],[93,141,158,159,244,245,246,247,248,249,250,251,252,253,1309,1312],[93,141,158,159,258,309,1309,1312],[93,141,158,159,311,1309,1312],[93,141,158,159,309,1309,1312],[93,141,158,159,311,312,1309,1312],[93,141,155,158,159,215,216,217,221,222,475,1309,1312],[93,141,155,158,159,167,203,205,223,227,263,266,267,301,421,471,476,478,480,1309,1312],[93,141,155,158,159,167,184,207,214,215,225,227,264,419,464,470,475,1309,1312],[93,141,158,159,334,1309,1312],[93,141,158,159,335,1309,1312],[93,141,158,159,217,228,463,1309,1312],[93,141,158,159,336,1309,1312],[93,141,158,159,210,1309,1312],[93,141,158,159,212,224,1309,1312],[93,141,155,158,159,212,216,223,1309,1312],[93,141,158,159,219,224,1309,1312],[93,141,158,159,220,1309,1312],[93,141,158,159,212,213,1309,1312],[93,141,158,159,212,268,1309,1312],[93,141,158,159,212,1309,1312],[93,141,158,159,214,258,307,1309,1312],[93,141,158,159,306,1309,1312],[93,141,158,159,211,213,214,1309,1312],[93,141,158,159,214,304,1309,1312],[93,141,158,159,211,213,1309,1312],[93,141,158,159,263,366,1309,1312],[93,141,158,159,463,1309,1312],[93,141,155,158,159,184,223,225,229,263,366,420,423,426,427,428,454,455,458,462,464,471,475,1309,1312],[93,141,158,159,277,280,282,283,296,297,1309,1312],[81,93,141,158,159,194,196,226,456,457,1309,1312],[81,93,141,158,159,194,196,226,456,457,461,1309,1312],[93,141,158,159,350,1309,1312],[93,141,158,159,236,257,262,263,327,328,329,330,331,333,346,347,349,352,420,423,474,476,1309,1312],[93,141,158,159,296,1309,1312],[93,141,155,158,159,301,471,1309,1312],[93,141,158,159,301,1309,1312],[93,141,155,158,159,223,269,298,300,302,420,471,478,480,1309,1312],[93,141,158,159,277,278,279,280,282,283,296,297,479,1309,1312],[87,93,141,155,158,159,167,184,212,213,225,231,263,264,267,366,418,419,421,471,474,475,478,1309,1312],[93,141,158,159,208,211,218,1309,1312],[93,141,158,159,262,264,396,399,1309,1312],[93,141,158,159,262,397,465,466,467,468,469,1309,1312],[93,141,155,158,159,258,474,1309,1312],[93,141,155,158,159,1309,1312],[93,141,158,159,261,346,1309,1312],[93,141,158,159,260,1309,1312],[93,141,158,159,262,315,1309,1312],[93,141,158,159,259,261,474,1309,1312],[93,141,155,158,159,207,262,396,397,398,471,474,475,1309,1312],[81,93,141,158,159,211,217,295,1309,1312],[81,93,141,158,159,209,1309,1312],[93,141,158,159,199,200,1309,1312],[81,93,141,158,159,205,1309,1312],[81,93,141,158,159,211,281,1309,1312],[81,87,93,141,158,159,263,267,478,480,1309,1312],[93,141,158,159,205,502,503,1309,1312],[81,93,141,158,159,276,1309,1312],[81,93,141,158,159,167,184,203,270,272,274,275,480,1309,1312],[93,141,158,159,211,238,475,1309,1312],[93,141,158,159,211,403,1309,1312],[81,93,141,153,155,158,159,167,201,203,276,374,478,479,1309,1312],[81,93,141,158,159,192,193,194,195,196,478,523,557,1309,1312],[81,82,83,84,85,93,141,158,159,1309,1312],[93,141,146,158,159,1309,1312],[93,141,158,159,369,370,371,1309,1312],[93,141,158,159,369,1309,1312],[81,85,93,141,155,157,158,159,167,191,192,193,194,195,196,197,203,231,236,413,441,476,477,480,523,557,1309,1312],[93,141,158,159,488,1309,1312],[93,141,158,159,490,1309,1312],[93,141,158,159,494,1309,1312],[93,141,158,159,548,1309,1312],[93,141,158,159,550,1309,1312],[93,141,158,159,496,1309,1312],[93,141,158,159,498,499,500,1309,1312],[93,141,158,159,504,1309,1312],[86,93,141,158,159,482,487,489,491,495,497,501,505,507,517,518,520,524,525,526,527,1309,1312],[93,141,158,159,506,1309,1312],[93,141,158,159,516,1309,1312],[93,141,158,159,272,1309,1312],[93,141,158,159,519,1309,1312],[93,140,141,158,159,262,396,397,399,465,466,468,469,521,523,1309,1312],[93,141,158,159,191,1309,1312],[93,141,158,159,1099,1309,1312],[93,141,158,159,1060,1309,1312],[93,141,158,159,1100,1309,1312],[93,141,158,159,945,1041,1097,1098,1309,1312],[93,141,158,159,1060,1061,1099,1100,1309,1312],[93,141,158,159,1042,1043,1044,1045,1046,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1309,1312],[81,93,141,158,159,1066,1101,1309,1312],[81,93,141,158,159,1066,1309,1312],[81,93,141,158,159,1061,1309,1312],[81,93,141,158,159,1101,1309,1312],[81,93,141,158,159,1069,1309,1312],[93,141,158,159,1089,1090,1091,1092,1093,1094,1095,1309,1312],[93,141,158,159,1066,1309,1312],[93,141,158,159,1103,1309,1312],[93,141,158,159,687,1058,1059,1064,1066,1088,1096,1101,1102,1104,1112,1309,1312],[93,141,158,159,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1309,1312],[93,141,158,159,1066,1099,1309,1312],[93,141,158,159,1045,1046,1058,1059,1062,1064,1097,1309,1312],[93,141,158,159,1062,1063,1065,1097,1309,1312],[81,93,141,158,159,1059,1097,1099,1309,1312],[93,141,158,159,1062,1097,1309,1312],[81,93,141,158,159,1058,1059,1088,1096,1309,1312],[81,93,141,158,159,1061,1062,1063,1097,1100,1309,1312],[93,141,158,159,1105,1106,1107,1108,1109,1110,1111,1309,1312],[81,93,141,158,159,1220,1309,1312],[93,141,158,159,1220,1221,1222,1223,1226,1227,1228,1229,1230,1231,1232,1235,1236,1309,1312],[93,141,158,159,1220,1309,1312],[93,141,158,159,1224,1225,1309,1312],[81,93,141,158,159,1217,1220,1309,1312],[93,141,158,159,1214,1215,1217,1309,1312],[93,141,158,159,1210,1213,1215,1217,1309,1312],[93,141,158,159,1214,1217,1309,1312],[81,93,141,158,159,1205,1206,1207,1210,1211,1212,1214,1215,1216,1217,1309,1312],[93,141,158,159,1207,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1309,1312],[93,141,158,159,1214,1309,1312],[93,141,158,159,1208,1214,1215,1309,1312],[93,141,158,159,1208,1209,1309,1312],[93,141,158,159,1213,1215,1216,1309,1312],[93,141,158,159,1213,1309,1312],[93,141,158,159,1205,1210,1213,1215,1216,1309,1312],[81,93,141,158,159,1210,1213,1214,1215,1309,1312],[93,141,158,159,1233,1234,1309,1312],[81,93,141,158,159,614,632,1309,1312],[81,93,141,158,159,614,632,635,1309,1312],[81,93,141,158,159,613,614,632,635,1309,1312],[93,141,158,159,615,616,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,1309,1312],[81,93,141,158,159,613,614,632,1309,1312],[93,141,158,159,1262,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1279,1280,1309,1312],[81,93,141,158,159,1263,1309,1312],[81,93,141,158,159,1265,1309,1312],[93,141,158,159,1263,1309,1312],[93,141,158,159,1262,1309,1312],[93,141,158,159,1278,1309,1312],[93,141,158,159,1281,1309,1312],[81,93,141,158,159,1120,1121,1122,1138,1141,1309,1312],[81,93,141,158,159,1120,1121,1122,1131,1139,1159,1309,1312],[81,93,141,158,159,1119,1122,1309,1312],[81,93,141,158,159,1122,1309,1312],[81,93,141,158,159,1120,1121,1122,1309,1312],[81,93,141,158,159,1120,1121,1122,1157,1160,1163,1309,1312],[81,93,141,158,159,1120,1121,1122,1131,1138,1141,1309,1312],[81,93,141,158,159,1120,1121,1122,1131,1139,1151,1309,1312],[81,93,141,158,159,1120,1121,1122,1131,1141,1151,1309,1312],[81,93,141,158,159,1120,1121,1122,1131,1151,1309,1312],[81,93,141,158,159,1120,1121,1122,1126,1132,1138,1143,1161,1162,1309,1312],[93,141,158,159,1122,1309,1312],[81,93,141,158,159,1122,1166,1167,1168,1309,1312],[81,93,141,158,159,1122,1165,1166,1167,1309,1312],[81,93,141,158,159,1122,1139,1309,1312],[81,93,141,158,159,1122,1165,1309,1312],[81,93,141,158,159,1122,1131,1309,1312],[81,93,141,158,159,1122,1123,1124,1309,1312],[81,93,141,158,159,1122,1124,1126,1309,1312],[93,141,158,159,1115,1116,1120,1121,1122,1123,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1152,1153,1154,1155,1156,1157,1158,1160,1161,1162,1163,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1309,1312],[81,93,141,158,159,1122,1180,1309,1312],[81,93,141,158,159,1122,1134,1309,1312],[81,93,141,158,159,1122,1141,1145,1146,1309,1312],[81,93,141,158,159,1122,1132,1134,1309,1312],[81,93,141,158,159,1122,1137,1309,1312],[81,93,141,158,159,1122,1160,1309,1312],[81,93,141,158,159,1122,1137,1164,1309,1312],[81,93,141,158,159,1125,1165,1309,1312],[81,93,141,158,159,1119,1120,1121,1309,1312],[93,141,158,159,173,191,1309,1312],[93,106,110,141,158,159,184,1309,1312],[93,106,141,158,159,173,184,1309,1312],[93,101,141,158,159,1309,1312],[93,103,106,141,158,159,181,184,1309,1312],[93,141,158,159,161,181,1309,1312],[93,101,141,158,159,191,1309,1312],[93,103,106,141,158,159,161,184,1309,1312],[93,98,99,102,105,141,152,158,159,173,184,1309,1312],[93,106,113,141,158,159,1309,1312],[93,98,104,141,158,159,1309,1312],[93,106,127,128,141,158,159,1309,1312],[93,102,106,141,158,159,176,184,191,1309,1312],[93,127,141,158,159,191,1309,1312],[93,100,101,141,158,159,191,1309,1312],[93,106,141,158,159,1309,1312],[93,100,101,102,103,104,105,106,107,108,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,128,129,130,131,132,133,141,158,159,1309,1312],[93,106,121,141,158,159,1309,1312],[93,106,113,114,141,158,159,1309,1312],[93,104,106,114,115,141,158,159,1309,1312],[93,105,141,158,159,1309,1312],[93,98,101,106,141,158,159,1309,1312],[93,106,110,114,115,141,158,159,1309,1312],[93,110,141,158,159,1309,1312],[93,104,106,109,141,158,159,184,1309,1312],[93,98,103,106,113,141,158,159,1309,1312],[93,141,158,159,173,1309,1312],[93,101,106,127,141,158,159,189,191,1309,1312],[93,141,158,159,1118,1309,1312],[93,141,158,159,1136,1309,1312]],"fileInfos":[{"version":"e41c290ef7dd7dab3493e6cbe5909e0148edf4a8dad0271be08edec368a0f7b9","affectsGlobalScope":true,"impliedFormat":1},{"version":"45b7ab580deca34ae9729e97c13cfd999df04416a79116c3bfb483804f85ded4","impliedFormat":1},{"version":"3facaf05f0c5fc569c5649dd359892c98a85557e3e0c847964caeb67076f4d75","impliedFormat":1},{"version":"e44bb8bbac7f10ecc786703fe0a6a4b952189f908707980ba8f3c8975a760962","impliedFormat":1},{"version":"5e1c4c362065a6b95ff952c0eab010f04dcd2c3494e813b493ecfd4fcb9fc0d8","impliedFormat":1},{"version":"68d73b4a11549f9c0b7d352d10e91e5dca8faa3322bfb77b661839c42b1ddec7","impliedFormat":1},{"version":"5efce4fc3c29ea84e8928f97adec086e3dc876365e0982cc8479a07954a3efd4","impliedFormat":1},{"version":"feecb1be483ed332fad555aff858affd90a48ab19ba7272ee084704eb7167569","impliedFormat":1},{"version":"ee7bad0c15b58988daa84371e0b89d313b762ab83cb5b31b8a2d1162e8eb41c2","impliedFormat":1},{"version":"27bdc30a0e32783366a5abeda841bc22757c1797de8681bbe81fbc735eeb1c10","impliedFormat":1},{"version":"8fd575e12870e9944c7e1d62e1f5a73fcf23dd8d3a321f2a2c74c20d022283fe","impliedFormat":1},{"version":"e12a46ce14b817d4c9e6b2b478956452330bf00c9801b79de46f7a1815b5bd40","impliedFormat":1},{"version":"4fd3f3422b2d2a3dfd5cdd0f387b3a8ec45f006c6ea896a4cb41264c2100bb2c","affectsGlobalScope":true,"impliedFormat":1},{"version":"69e65d976bf166ce4a9e6f6c18f94d2424bf116e90837ace179610dbccad9b42","affectsGlobalScope":true,"impliedFormat":1},{"version":"c57796738e7f83dbc4b8e65132f11a377649c00dd3eee333f672b8f0a6bea671","affectsGlobalScope":true,"impliedFormat":1},{"version":"dc2df20b1bcdc8c2d34af4926e2c3ab15ffe1160a63e58b7e09833f616efff44","affectsGlobalScope":true,"impliedFormat":1},{"version":"515d0b7b9bea2e31ea4ec968e9edd2c39d3eebf4a2d5cbd04e88639819ae3b71","affectsGlobalScope":true,"impliedFormat":1},{"version":"62bb211266ee48b2d0edf0d8d1b191f0c24fc379a82bd4c1692a082c540bc6b1","affectsGlobalScope":true,"impliedFormat":1},{"version":"0dc1e7ceda9b8b9b455c3a2d67b0412feab00bd2f66656cd8850e8831b08b537","affectsGlobalScope":true,"impliedFormat":1},{"version":"ce691fb9e5c64efb9547083e4a34091bcbe5bdb41027e310ebba8f7d96a98671","affectsGlobalScope":true,"impliedFormat":1},{"version":"8d697a2a929a5fcb38b7a65594020fcef05ec1630804a33748829c5ff53640d0","affectsGlobalScope":true,"impliedFormat":1},{"version":"4ff2a353abf8a80ee399af572debb8faab2d33ad38c4b4474cff7f26e7653b8d","affectsGlobalScope":true,"impliedFormat":1},{"version":"936e80ad36a2ee83fc3caf008e7c4c5afe45b3cf3d5c24408f039c1d47bdc1df","affectsGlobalScope":true,"impliedFormat":1},{"version":"d15bea3d62cbbdb9797079416b8ac375ae99162a7fba5de2c6c505446486ac0a","affectsGlobalScope":true,"impliedFormat":1},{"version":"68d18b664c9d32a7336a70235958b8997ebc1c3b8505f4f1ae2b7e7753b87618","affectsGlobalScope":true,"impliedFormat":1},{"version":"eb3d66c8327153d8fa7dd03f9c58d351107fe824c79e9b56b462935176cdf12a","affectsGlobalScope":true,"impliedFormat":1},{"version":"38f0219c9e23c915ef9790ab1d680440d95419ad264816fa15009a8851e79119","affectsGlobalScope":true,"impliedFormat":1},{"version":"69ab18c3b76cd9b1be3d188eaf8bba06112ebbe2f47f6c322b5105a6fbc45a2e","affectsGlobalScope":true,"impliedFormat":1},{"version":"fef8cfad2e2dc5f5b3d97a6f4f2e92848eb1b88e897bb7318cef0e2820bceaab","affectsGlobalScope":true,"impliedFormat":1},{"version":"2f11ff796926e0832f9ae148008138ad583bd181899ab7dd768a2666700b1893","affectsGlobalScope":true,"impliedFormat":1},{"version":"4de680d5bb41c17f7f68e0419412ca23c98d5749dcaaea1896172f06435891fc","affectsGlobalScope":true,"impliedFormat":1},{"version":"954296b30da6d508a104a3a0b5d96b76495c709785c1d11610908e63481ee667","affectsGlobalScope":true,"impliedFormat":1},{"version":"ac9538681b19688c8eae65811b329d3744af679e0bdfa5d842d0e32524c73e1c","affectsGlobalScope":true,"impliedFormat":1},{"version":"0a969edff4bd52585473d24995c5ef223f6652d6ef46193309b3921d65dd4376","affectsGlobalScope":true,"impliedFormat":1},{"version":"9e9fbd7030c440b33d021da145d3232984c8bb7916f277e8ffd3dc2e3eae2bdb","affectsGlobalScope":true,"impliedFormat":1},{"version":"811ec78f7fefcabbda4bfa93b3eb67d9ae166ef95f9bff989d964061cbf81a0c","affectsGlobalScope":true,"impliedFormat":1},{"version":"717937616a17072082152a2ef351cb51f98802fb4b2fdabd32399843875974ca","affectsGlobalScope":true,"impliedFormat":1},{"version":"d7e7d9b7b50e5f22c915b525acc5a49a7a6584cf8f62d0569e557c5cfc4b2ac2","affectsGlobalScope":true,"impliedFormat":1},{"version":"71c37f4c9543f31dfced6c7840e068c5a5aacb7b89111a4364b1d5276b852557","affectsGlobalScope":true,"impliedFormat":1},{"version":"576711e016cf4f1804676043e6a0a5414252560eb57de9faceee34d79798c850","affectsGlobalScope":true,"impliedFormat":1},{"version":"89c1b1281ba7b8a96efc676b11b264de7a8374c5ea1e6617f11880a13fc56dc6","affectsGlobalScope":true,"impliedFormat":1},{"version":"74f7fa2d027d5b33eb0471c8e82a6c87216223181ec31247c357a3e8e2fddc5b","affectsGlobalScope":true,"impliedFormat":1},{"version":"f1e2a172204962276504466a6393426d2ca9c54894b1ad0a6c9dad867a65f876","affectsGlobalScope":true,"impliedFormat":1},{"version":"063600664504610fe3e99b717a1223f8b1900087fab0b4cad1496a114744f8df","affectsGlobalScope":true,"impliedFormat":1},{"version":"934019d7e3c81950f9a8426d093458b65d5aff2c7c1511233c0fd5b941e608ab","affectsGlobalScope":true,"impliedFormat":1},{"version":"52ada8e0b6e0482b728070b7639ee42e83a9b1c22d205992756fe020fd9f4a47","affectsGlobalScope":true,"impliedFormat":1},{"version":"3bdefe1bfd4d6dee0e26f928f93ccc128f1b64d5d501ff4a8cf3c6371200e5e6","affectsGlobalScope":true,"impliedFormat":1},{"version":"59fb2c069260b4ba00b5643b907ef5d5341b167e7d1dbf58dfd895658bda2867","affectsGlobalScope":true,"impliedFormat":1},{"version":"639e512c0dfc3fad96a84caad71b8834d66329a1f28dc95e3946c9b58176c73a","affectsGlobalScope":true,"impliedFormat":1},{"version":"368af93f74c9c932edd84c58883e736c9e3d53cec1fe24c0b0ff451f529ceab1","affectsGlobalScope":true,"impliedFormat":1},{"version":"af3dd424cf267428f30ccfc376f47a2c0114546b55c44d8c0f1d57d841e28d74","affectsGlobalScope":true,"impliedFormat":1},{"version":"995c005ab91a498455ea8dfb63aa9f83fa2ea793c3d8aa344be4a1678d06d399","affectsGlobalScope":true,"impliedFormat":1},{"version":"959d36cddf5e7d572a65045b876f2956c973a586da58e5d26cde519184fd9b8a","affectsGlobalScope":true,"impliedFormat":1},{"version":"965f36eae237dd74e6cca203a43e9ca801ce38824ead814728a2807b1910117d","affectsGlobalScope":true,"impliedFormat":1},{"version":"3925a6c820dcb1a06506c90b1577db1fdbf7705d65b62b99dce4be75c637e26b","affectsGlobalScope":true,"impliedFormat":1},{"version":"0a3d63ef2b853447ec4f749d3f368ce642264246e02911fcb1590d8c161b8005","affectsGlobalScope":true,"impliedFormat":1},{"version":"b5ce7a470bc3628408429040c4e3a53a27755022a32fd05e2cb694e7015386c7","affectsGlobalScope":true,"impliedFormat":1},{"version":"8444af78980e3b20b49324f4a16ba35024fef3ee069a0eb67616ea6ca821c47a","affectsGlobalScope":true,"impliedFormat":1},{"version":"3287d9d085fbd618c3971944b65b4be57859f5415f495b33a6adc994edd2f004","affectsGlobalScope":true,"impliedFormat":1},{"version":"b4b67b1a91182421f5df999988c690f14d813b9850b40acd06ed44691f6727ad","affectsGlobalScope":true,"impliedFormat":1},{"version":"bab26767638ab3557de12c900f0b91f710c7dc40ee9793d5a27d32c04f0bf646","affectsGlobalScope":true,"impliedFormat":1},{"version":"436aaf437562f276ec2ddbee2f2cdedac7664c1e4c1d2c36839ddd582eeb3d0a","affectsGlobalScope":true,"impliedFormat":1},{"version":"8e3c06ea092138bf9fa5e874a1fdbc9d54805d074bee1de31b99a11e2fec239d","affectsGlobalScope":true,"impliedFormat":1},{"version":"87dc0f382502f5bbce5129bdc0aea21e19a3abbc19259e0b43ae038a9fc4e326","affectsGlobalScope":true,"impliedFormat":1},{"version":"b1cb28af0c891c8c96b2d6b7be76bd394fddcfdb4709a20ba05a7c1605eea0f9","affectsGlobalScope":true,"impliedFormat":1},{"version":"2fef54945a13095fdb9b84f705f2b5994597640c46afeb2ce78352fab4cb3279","affectsGlobalScope":true,"impliedFormat":1},{"version":"ac77cb3e8c6d3565793eb90a8373ee8033146315a3dbead3bde8db5eaf5e5ec6","affectsGlobalScope":true,"impliedFormat":1},{"version":"56e4ed5aab5f5920980066a9409bfaf53e6d21d3f8d020c17e4de584d29600ad","affectsGlobalScope":true,"impliedFormat":1},{"version":"4ece9f17b3866cc077099c73f4983bddbcb1dc7ddb943227f1ec070f529dedd1","affectsGlobalScope":true,"impliedFormat":1},{"version":"0a6282c8827e4b9a95f4bf4f5c205673ada31b982f50572d27103df8ceb8013c","affectsGlobalScope":true,"impliedFormat":1},{"version":"1c9319a09485199c1f7b0498f2988d6d2249793ef67edda49d1e584746be9032","affectsGlobalScope":true,"impliedFormat":1},{"version":"e3a2a0cee0f03ffdde24d89660eba2685bfbdeae955a6c67e8c4c9fd28928eeb","affectsGlobalScope":true,"impliedFormat":1},{"version":"811c71eee4aa0ac5f7adf713323a5c41b0cf6c4e17367a34fbce379e12bbf0a4","affectsGlobalScope":true,"impliedFormat":1},{"version":"51ad4c928303041605b4d7ae32e0c1ee387d43a24cd6f1ebf4a2699e1076d4fa","affectsGlobalScope":true,"impliedFormat":1},{"version":"d4b1d2c51d058fc21ec2629fff7a76249dec2e36e12960ea056e3ef89174080f","affectsGlobalScope":true,"impliedFormat":1},{"version":"61d6a2092f48af66dbfb220e31eea8b10bc02b6932d6e529005fd2d7b3281290","affectsGlobalScope":true,"impliedFormat":1},{"version":"8e7f8264d0fb4c5339605a15daadb037bf238c10b654bb3eee14208f860a32ea","affectsGlobalScope":true,"impliedFormat":1},{"version":"782dec38049b92d4e85c1585fbea5474a219c6984a35b004963b00beb1aab538","affectsGlobalScope":true,"impliedFormat":1},{"version":"7e29f41b158de217f94cb9676bf9cbd0cd9b5a46e1985141ed36e075c52bf6ad","affectsGlobalScope":true,"impliedFormat":1},{"version":"ac51dd7d31333793807a6abaa5ae168512b6131bd41d9c5b98477fc3b7800f9f","impliedFormat":1},{"version":"dc0a7f107690ee5cd8afc8dbf05c4df78085471ce16bdd9881642ec738bc81fe","impliedFormat":1},{"version":"acd8fd5090ac73902278889c38336ff3f48af6ba03aa665eb34a75e7ba1dccc4","impliedFormat":1},{"version":"d6258883868fb2680d2ca96bc8b1352cab69874581493e6d52680c5ffecdb6cc","impliedFormat":1},{"version":"1b61d259de5350f8b1e5db06290d31eaebebc6baafd5f79d314b5af9256d7153","impliedFormat":1},{"version":"f258e3960f324a956fc76a3d3d9e964fff2244ff5859dcc6ce5951e5413ca826","impliedFormat":1},{"version":"643f7232d07bf75e15bd8f658f664d6183a0efaca5eb84b48201c7671a266979","impliedFormat":1},{"version":"21da358700a3893281ce0c517a7a30cbd46be020d9f0c3f2834d0a8ad1f5fc75","impliedFormat":1},{"version":"6c7176368037af28cb72f2392010fa1cef295d6d6744bca8cfb54985f3a18c3e","affectsGlobalScope":true,"impliedFormat":1},{"version":"ab41ef1f2cdafb8df48be20cd969d875602483859dc194e9c97c8a576892c052","affectsGlobalScope":true,"impliedFormat":1},{"version":"437e20f2ba32abaeb7985e0afe0002de1917bc74e949ba585e49feba65da6ca1","affectsGlobalScope":true,"impliedFormat":1},{"version":"21d819c173c0cf7cc3ce57c3276e77fd9a8a01d35a06ad87158781515c9a438a","impliedFormat":1},{"version":"98cffbf06d6bab333473c70a893770dbe990783904002c4f1a960447b4b53dca","affectsGlobalScope":true,"impliedFormat":1},{"version":"3af97acf03cc97de58a3a4bc91f8f616408099bc4233f6d0852e72a8ffb91ac9","affectsGlobalScope":true,"impliedFormat":1},{"version":"808069bba06b6768b62fd22429b53362e7af342da4a236ed2d2e1c89fcca3b4a","affectsGlobalScope":true,"impliedFormat":1},{"version":"1db0b7dca579049ca4193d034d835f6bfe73096c73663e5ef9a0b5779939f3d0","affectsGlobalScope":true,"impliedFormat":1},{"version":"9798340ffb0d067d69b1ae5b32faa17ab31b82466a3fc00d8f2f2df0c8554aaa","affectsGlobalScope":true,"impliedFormat":1},{"version":"f26b11d8d8e4b8028f1c7d618b22274c892e4b0ef5b3678a8ccbad85419aef43","affectsGlobalScope":true,"impliedFormat":1},{"version":"5929864ce17fba74232584d90cb721a89b7ad277220627cc97054ba15a98ea8f","impliedFormat":1},{"version":"763fe0f42b3d79b440a9b6e51e9ba3f3f91352469c1e4b3b67bfa4ff6352f3f4","impliedFormat":1},{"version":"25c8056edf4314820382a5fdb4bb7816999acdcb929c8f75e3f39473b87e85bc","impliedFormat":1},{"version":"c464d66b20788266e5353b48dc4aa6bc0dc4a707276df1e7152ab0c9ae21fad8","impliedFormat":1},{"version":"78d0d27c130d35c60b5e5566c9f1e5be77caf39804636bc1a40133919a949f21","impliedFormat":1},{"version":"c6fd2c5a395f2432786c9cb8deb870b9b0e8ff7e22c029954fabdd692bff6195","impliedFormat":1},{"version":"1d6e127068ea8e104a912e42fc0a110e2aa5a66a356a917a163e8cf9a65e4a75","impliedFormat":1},{"version":"5ded6427296cdf3b9542de4471d2aa8d3983671d4cac0f4bf9c637208d1ced43","impliedFormat":1},{"version":"7f182617db458e98fc18dfb272d40aa2fff3a353c44a89b2c0ccb3937709bfb5","impliedFormat":1},{"version":"cadc8aced301244057c4e7e73fbcae534b0f5b12a37b150d80e5a45aa4bebcbd","impliedFormat":1},{"version":"385aab901643aa54e1c36f5ef3107913b10d1b5bb8cbcd933d4263b80a0d7f20","impliedFormat":1},{"version":"9670d44354bab9d9982eca21945686b5c24a3f893db73c0dae0fd74217a4c219","impliedFormat":1},{"version":"0b8a9268adaf4da35e7fa830c8981cfa22adbbe5b3f6f5ab91f6658899e657a7","impliedFormat":1},{"version":"11396ed8a44c02ab9798b7dca436009f866e8dae3c9c25e8c1fbc396880bf1bb","impliedFormat":1},{"version":"ba7bc87d01492633cb5a0e5da8a4a42a1c86270e7b3d2dea5d156828a84e4882","impliedFormat":1},{"version":"4893a895ea92c85345017a04ed427cbd6a1710453338df26881a6019432febdd","impliedFormat":1},{"version":"c21dc52e277bcfc75fac0436ccb75c204f9e1b3fa5e12729670910639f27343e","impliedFormat":1},{"version":"13f6f39e12b1518c6650bbb220c8985999020fe0f21d818e28f512b7771d00f9","impliedFormat":1},{"version":"9b5369969f6e7175740bf51223112ff209f94ba43ecd3bb09eefff9fd675624a","impliedFormat":1},{"version":"4fe9e626e7164748e8769bbf74b538e09607f07ed17c2f20af8d680ee49fc1da","impliedFormat":1},{"version":"24515859bc0b836719105bb6cc3d68255042a9f02a6022b3187948b204946bd2","impliedFormat":1},{"version":"ea0148f897b45a76544ae179784c95af1bd6721b8610af9ffa467a518a086a43","impliedFormat":1},{"version":"24c6a117721e606c9984335f71711877293a9651e44f59f3d21c1ea0856f9cc9","impliedFormat":1},{"version":"dd3273ead9fbde62a72949c97dbec2247ea08e0c6952e701a483d74ef92d6a17","impliedFormat":1},{"version":"405822be75ad3e4d162e07439bac80c6bcc6dbae1929e179cf467ec0b9ee4e2e","impliedFormat":1},{"version":"0db18c6e78ea846316c012478888f33c11ffadab9efd1cc8bcc12daded7a60b6","impliedFormat":1},{"version":"e61be3f894b41b7baa1fbd6a66893f2579bfad01d208b4ff61daef21493ef0a8","impliedFormat":1},{"version":"bd0532fd6556073727d28da0edfd1736417a3f9f394877b6d5ef6ad88fba1d1a","impliedFormat":1},{"version":"89167d696a849fce5ca508032aabfe901c0868f833a8625d5a9c6e861ef935d2","impliedFormat":1},{"version":"615ba88d0128ed16bf83ef8ccbb6aff05c3ee2db1cc0f89ab50a4939bfc1943f","impliedFormat":1},{"version":"a4d551dbf8746780194d550c88f26cf937caf8d56f102969a110cfaed4b06656","impliedFormat":1},{"version":"8bd86b8e8f6a6aa6c49b71e14c4ffe1211a0e97c80f08d2c8cc98838006e4b88","impliedFormat":1},{"version":"317e63deeb21ac07f3992f5b50cdca8338f10acd4fbb7257ebf56735bf52ab00","impliedFormat":1},{"version":"4732aec92b20fb28c5fe9ad99521fb59974289ed1e45aecb282616202184064f","impliedFormat":1},{"version":"2e85db9e6fd73cfa3d7f28e0ab6b55417ea18931423bd47b409a96e4a169e8e6","impliedFormat":1},{"version":"c46e079fe54c76f95c67fb89081b3e399da2c7d109e7dca8e4b58d83e332e605","impliedFormat":1},{"version":"bf67d53d168abc1298888693338cb82854bdb2e69ef83f8a0092093c2d562107","impliedFormat":1},{"version":"b52476feb4a0cbcb25e5931b930fc73cb6643fb1a5060bf8a3dda0eeae5b4b68","affectsGlobalScope":true,"impliedFormat":1},{"version":"f9501cc13ce624c72b61f12b3963e84fad210fbdf0ffbc4590e08460a3f04eba","affectsGlobalScope":true,"impliedFormat":1},{"version":"e7721c4f69f93c91360c26a0a84ee885997d748237ef78ef665b153e622b36c1","affectsGlobalScope":true,"impliedFormat":1},{"version":"0fa06ada475b910e2106c98c68b10483dc8811d0c14a8a8dd36efb2672485b29","impliedFormat":1},{"version":"33e5e9aba62c3193d10d1d33ae1fa75c46a1171cf76fef750777377d53b0303f","impliedFormat":1},{"version":"2b06b93fd01bcd49d1a6bd1f9b65ddcae6480b9a86e9061634d6f8e354c1468f","impliedFormat":1},{"version":"6a0cd27e5dc2cfbe039e731cf879d12b0e2dded06d1b1dedad07f7712de0d7f4","affectsGlobalScope":true,"impliedFormat":1},{"version":"13f5c844119c43e51ce777c509267f14d6aaf31eafb2c2b002ca35584cd13b29","impliedFormat":1},{"version":"e60477649d6ad21542bd2dc7e3d9ff6853d0797ba9f689ba2f6653818999c264","impliedFormat":1},{"version":"c2510f124c0293ab80b1777c44d80f812b75612f297b9857406468c0f4dafe29","affectsGlobalScope":true,"impliedFormat":1},{"version":"5524481e56c48ff486f42926778c0a3cce1cc85dc46683b92b1271865bcf015a","impliedFormat":1},{"version":"4c829ab315f57c5442c6667b53769975acbf92003a66aef19bce151987675bd1","affectsGlobalScope":true,"impliedFormat":1},{"version":"b2ade7657e2db96d18315694789eff2ddd3d8aea7215b181f8a0b303277cc579","impliedFormat":1},{"version":"9855e02d837744303391e5623a531734443a5f8e6e8755e018c41d63ad797db2","impliedFormat":1},{"version":"4d631b81fa2f07a0e63a9a143d6a82c25c5f051298651a9b69176ba28930756d","impliedFormat":1},{"version":"836a356aae992ff3c28a0212e3eabcb76dd4b0cc06bcb9607aeef560661b860d","impliedFormat":1},{"version":"1e0d1f8b0adfa0b0330e028c7941b5a98c08b600efe7f14d2d2a00854fb2f393","impliedFormat":1},{"version":"41670ee38943d9cbb4924e436f56fc19ee94232bc96108562de1a734af20dc2c","affectsGlobalScope":true,"impliedFormat":1},{"version":"c906fb15bd2aabc9ed1e3f44eb6a8661199d6c320b3aa196b826121552cb3695","impliedFormat":1},{"version":"22295e8103f1d6d8ea4b5d6211e43421fe4564e34d0dd8e09e520e452d89e659","impliedFormat":1},{"version":"58647d85d0f722a1ce9de50955df60a7489f0593bf1a7015521efe901c06d770","impliedFormat":1},{"version":"0958335a19c90bf5e69e6654bac7dfb120e432558f8143263d8b2324bd85e61c","impliedFormat":1},{"version":"a10f0e1854f3316d7ee437b79649e5a6ae3ae14ffe6322b02d4987071a95362e","impliedFormat":1},{"version":"e208f73ef6a980104304b0d2ca5f6bf1b85de6009d2c7e404028b875020fa8f2","impliedFormat":1},{"version":"d163b6bc2372b4f07260747cbc6c0a6405ab3fbcea3852305e98ac43ca59f5bc","impliedFormat":1},{"version":"e6fa9ad47c5f71ff733744a029d1dc472c618de53804eae08ffc243b936f87ff","affectsGlobalScope":true,"impliedFormat":1},{"version":"a6f137d651076822d4fe884287e68fd61785a0d3d1fdb250a5059b691fa897db","impliedFormat":1},{"version":"24826ed94a78d5c64bd857570fdbd96229ad41b5cb654c08d75a9845e3ab7dde","impliedFormat":1},{"version":"8b479a130ccb62e98f11f136d3ac80f2984fdc07616516d29881f3061f2dd472","impliedFormat":1},{"version":"928af3d90454bf656a52a48679f199f64c1435247d6189d1caf4c68f2eaf921f","affectsGlobalScope":true,"impliedFormat":1},{"version":"bceb58df66ab8fb00170df20cd813978c5ab84be1d285710c4eb005d8e9d8efb","affectsGlobalScope":true,"impliedFormat":1},{"version":"3f16a7e4deafa527ed9995a772bb380eb7d3c2c0fd4ae178c5263ed18394db2c","impliedFormat":1},{"version":"933921f0bb0ec12ef45d1062a1fc0f27635318f4d294e4d99de9a5493e618ca2","impliedFormat":1},{"version":"71a0f3ad612c123b57239a7749770017ecfe6b66411488000aba83e4546fde25","impliedFormat":1},{"version":"77fbe5eecb6fac4b6242bbf6eebfc43e98ce5ccba8fa44e0ef6a95c945ff4d98","impliedFormat":1},{"version":"4f9d8ca0c417b67b69eeb54c7ca1bedd7b56034bb9bfd27c5d4f3bc4692daca7","impliedFormat":1},{"version":"814118df420c4e38fe5ae1b9a3bafb6e9c2aa40838e528cde908381867be6466","impliedFormat":1},{"version":"a3fc63c0d7b031693f665f5494412ba4b551fe644ededccc0ab5922401079c95","impliedFormat":1},{"version":"80523c00b8544a2000ae0143e4a90a00b47f99823eb7926c1e03c494216fc363","impliedFormat":1},{"version":"37ba7b45141a45ce6e80e66f2a96c8a5ab1bcef0fc2d0f56bb58df96ec67e972","impliedFormat":1},{"version":"45650f47bfb376c8a8ed39d4bcda5902ab899a3150029684ee4c10676d9fbaee","impliedFormat":1},{"version":"746911b62b329587939560deb5c036aca48aece03147b021fa680223255d5183","affectsGlobalScope":true,"impliedFormat":1},{"version":"18fd40412d102c5564136f29735e5d1c3b455b8a37f920da79561f1fde068208","impliedFormat":1},{"version":"c8d3e5a18ba35629954e48c4cc8f11dc88224650067a172685c736b27a34a4dc","impliedFormat":1},{"version":"f0be1b8078cd549d91f37c30c222c2a187ac1cf981d994fb476a1adc61387b14","affectsGlobalScope":true,"impliedFormat":1},{"version":"0aaed1d72199b01234152f7a60046bc947f1f37d78d182e9ae09c4289e06a592","impliedFormat":1},{"version":"2b55d426ff2b9087485e52ac4bc7cfafe1dc420fc76dad926cd46526567c501a","impliedFormat":1},{"version":"66ba1b2c3e3a3644a1011cd530fb444a96b1b2dfe2f5e837a002d41a1a799e60","impliedFormat":1},{"version":"7e514f5b852fdbc166b539fdd1f4e9114f29911592a5eb10a94bb3a13ccac3c4","impliedFormat":1},{"version":"5b7aa3c4c1a5d81b411e8cb302b45507fea9358d3569196b27eb1a27ae3a90ef","affectsGlobalScope":true,"impliedFormat":1},{"version":"5987a903da92c7462e0b35704ce7da94d7fdc4b89a984871c0e2b87a8aae9e69","affectsGlobalScope":true,"impliedFormat":1},{"version":"ea08a0345023ade2b47fbff5a76d0d0ed8bff10bc9d22b83f40858a8e941501c","impliedFormat":1},{"version":"47613031a5a31510831304405af561b0ffaedb734437c595256bb61a90f9311b","impliedFormat":1},{"version":"ae062ce7d9510060c5d7e7952ae379224fb3f8f2dd74e88959878af2057c143b","impliedFormat":1},{"version":"8a1a0d0a4a06a8d278947fcb66bf684f117bf147f89b06e50662d79a53be3e9f","affectsGlobalScope":true,"impliedFormat":1},{"version":"358765d5ea8afd285d4fd1532e78b88273f18cb3f87403a9b16fef61ac9fdcfe","impliedFormat":1},{"version":"9f55299850d4f0921e79b6bf344b47c420ce0f507b9dcf593e532b09ea7eeea1","impliedFormat":1},{"version":"2beff543f6e9a9701df88daeee3cdd70a34b4a1c11cb4c734472195a5cb2af54","impliedFormat":1},{"version":"2e07abf27aa06353d46f4448c0bbac73431f6065eef7113128a5cd804d0c384d","impliedFormat":1},{"version":"be1cc4d94ea60cbe567bc29ed479d42587bf1e6cba490f123d329976b0fe4ee5","impliedFormat":1},{"version":"42bc0e1a903408137c3df2b06dfd7e402cdab5bbfa5fcfb871b22ebfdb30bd0b","impliedFormat":1},{"version":"9894dafe342b976d251aac58e616ac6df8db91fb9d98934ff9dd103e9e82578f","impliedFormat":1},{"version":"413df52d4ea14472c2fa5bee62f7a40abd1eb49be0b9722ee01ee4e52e63beb2","impliedFormat":1},{"version":"db6d2d9daad8a6d83f281af12ce4355a20b9a3e71b82b9f57cddcca0a8964a96","impliedFormat":1},{"version":"446a50749b24d14deac6f8843e057a6355dd6437d1fac4f9e5ce4a5071f34bff","impliedFormat":1},{"version":"182e9fcbe08ac7c012e0a6e2b5798b4352470be29a64fdc114d23c2bab7d5106","impliedFormat":1},{"version":"2f4e6b4d39426a1b85ecf4bdeb9dddbf4d9b3397d95d8555d46f925c9519ec7d","impliedFormat":1},{"version":"78a2869ad0cbf3f9045dda08c0d4562b7e1b2bfe07b19e0db072f5c3c56e9584","impliedFormat":1},{"version":"89d5d28d4f57e000b836ac273079be1b75710e28ce14750d081fb420d37e2ca5","impliedFormat":1},{"version":"fd4e24ccff3966390600d7f5d6aa1fed5a512e92ada735ea5fbc933d313ad3d3","impliedFormat":1},{"version":"b7cddfe1aa6b86b5fad3c9ccb30d05b3ccb165aebbf112f48d2d8a5f69dd98b1","impliedFormat":1},{"version":"a86f82d646a739041d6702101afa82dcb935c416dd93cbca7fd754fd0282ce1f","impliedFormat":1},{"version":"ad0d1d75d129b1c80f911be438d6b61bfa8703930a8ff2be2f0e1f8a91841c64","impliedFormat":1},{"version":"bd2c7ada3dee03653d3f601011d30072194bc3970cd93208f9588fbdc0c69347","impliedFormat":1},{"version":"e480da45d32313e7174b265674da504f075f59ef326852f0c5a5d863b438ae85","impliedFormat":1},{"version":"ad54850f61fcf5d014e11be80d2f46fea9265cfa7e77456da876f7833ef81769","impliedFormat":1},{"version":"6f7c9e8bd2b5b6a080b07080065f94900bd3c7e5ebbd3047bc33fcce2fab1dd8","impliedFormat":1},{"version":"3e7efde639c6a6c3edb9847b3f61e308bf7a69685b92f665048c45132f51c218","impliedFormat":1},{"version":"df45ca1176e6ac211eae7ddf51336dc075c5314bc5c253651bae639defd5eec5","impliedFormat":1},{"version":"8a0e762ceb20c7e72504feef83d709468a70af4abccb304f32d6b9bac1129b2c","impliedFormat":1},{"version":"da5950ee2a90721df6f3fba45f5d05308f7e4c35835392215dd2cd404505e2de","impliedFormat":1},{"version":"ce75b1aebb33d510ff28af960a9221410a3eaf7f18fc5f21f9404075fba77256","impliedFormat":1},{"version":"f42d5fed19610d485c646a0c430e768115567d078c7fc855c57b0c578b3d6cd3","impliedFormat":1},{"version":"ee8df1cb8d0faaca4013a1b442e99130769ce06f438d18d510fed95890067563","impliedFormat":1},{"version":"d5630f2ad9b4541e5ce891648121022f9412ecdca1820baa1f0104f70fd7eff7","impliedFormat":1},{"version":"4d15375ab13497104bc8fe56fdef2b5fd6853f29255737d23a33fa306ff7fd69","impliedFormat":1},{"version":"2cd3fc1d0d6a1e85baffd2d4f50f5efb192b5446eef567e97c94765402f0aad4","impliedFormat":1},{"version":"e4cbf2f1e89ecccaddd2c045e600ae41b732295953fb06247c7dcbc2d281ed30","impliedFormat":1},{"version":"6dcedaef57dff0d79a05ab0ab602cde74db803d1e765468bf91263786a383e1b","impliedFormat":1},{"version":"8c1697d90c394a6fd955b98eae01238eff628e129b987a68aea10f898a48e7da","impliedFormat":1},{"version":"7580e62139cb2b44a0270c8d01abcbfcba2819a02514a527342447fa69b34ef1","impliedFormat":1},{"version":"42c169fb8c2d42f4f668c624a9a11e719d5d07dacbebb63cbcf7ef365b0a75b3","impliedFormat":1},{"version":"f374cb24e93e7798c4d9e83ff872fa52d2cdb36306392b840a6ddf46cb925cb6","impliedFormat":1},{"version":"d10d63718e1646c2279e3b33831f82c60e31f622b2b7020f1196409ca4c09242","impliedFormat":1},{"version":"106c6025f1d99fd468fd8bf6e5bda724e11e5905a4076c5d29790b6c3745e50c","impliedFormat":1},{"version":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","impliedFormat":1},{"version":"148679c6d0f449210a96e7d2e562d589e56fcde87f843a92808b3ff103f1a774","impliedFormat":1},{"version":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","impliedFormat":1},{"version":"02436d7e9ead85e09a2f8e27d5f47d9464bced31738dec138ca735390815c9f0","impliedFormat":1},{"version":"f8d5ff8eafd37499f2b6a98659dd9b45a321de186b8db6b6142faed0fea3de77","impliedFormat":1},{"version":"c86fe861cf1b4c46a0fb7d74dffe596cf679a2e5e8b1456881313170f092e3fa","impliedFormat":1},{"version":"a22dd55aa4d39906252000ab8e8a1b83b195eef7f4274eb51e457c1f11cf6580","impliedFormat":1},{"version":"540cc83ab772a2c6bc509fe1354f314825b5dba3669efdfbe4693ecd3048e34f","impliedFormat":1},{"version":"121b0696021ab885c570bbeb331be8ad82c6efe2f3b93a6e63874901bebc13e3","impliedFormat":1},{"version":"612d9da66bb046a9c1e2e8d026245ded881fc4b9f98cbfae714415d57ee0ae0b","impliedFormat":1},{"version":"32c2ad9494dad5d11b0564a619fee18f388db6c1e9e2cd3c360b3122549691eb","impliedFormat":1},{"version":"6c301d40aec56a74ec7bd7324e31a728dadf9bfba3e96def02938d3d973534ec","impliedFormat":1},{"version":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","impliedFormat":1},{"version":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","impliedFormat":1},{"version":"8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881","impliedFormat":1},{"version":"8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881","impliedFormat":1},{"version":"aa14cee20aa0db79f8df101fc027d929aec10feb5b8a8da3b9af3895d05b7ba2","impliedFormat":1},{"version":"493c700ac3bd317177b2eb913805c87fe60d4e8af4fb39c41f04ba81fae7e170","impliedFormat":1},{"version":"aeb554d876c6b8c818da2e118d8b11e1e559adbe6bf606cc9a611c1b6c09f670","impliedFormat":1},{"version":"acf5a2ac47b59ca07afa9abbd2b31d001bf7448b041927befae2ea5b1951d9f9","impliedFormat":1},{"version":"8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881","impliedFormat":1},{"version":"d71291eff1e19d8762a908ba947e891af44749f3a2cbc5bd2ec4b72f72ea795f","impliedFormat":1},{"version":"c0480e03db4b816dff2682b347c95f2177699525c54e7e6f6aa8ded890b76be7","impliedFormat":1},{"version":"25a5f6fd3a2243c859eddc99ab5fba11d970af2fe7a5df9c32b7668f76f97b01","impliedFormat":1},{"version":"8d207e1f9d2c30d6f77dfa693f3827c3fbf0d89240297e10bdfe1041d433df68","impliedFormat":1},{"version":"b620391fe8060cf9bedc176a4d01366e6574d7a71e0ac0ab344a4e76576fcbb8","impliedFormat":1},{"version":"6ac6715916fa75a1f7ebdfeacac09513b4d904b667d827b7535e84ff59679aff","impliedFormat":1},{"version":"2652448ac55a2010a1f71dd141f828b682298d39728f9871e1cdf8696ef443fd","impliedFormat":1},{"version":"d682336018141807fb602709e2d95a192828fcb8d5ba06dda3833a8ea98f69e3","impliedFormat":1},{"version":"6124e973eab8c52cabf3c07575204efc1784aca6b0a30c79eb85fe240a857efa","impliedFormat":1},{"version":"0d891735a21edc75df51f3eb995e18149e119d1ce22fd40db2b260c5960b914e","impliedFormat":1},{"version":"3b414b99a73171e1c4b7b7714e26b87d6c5cb03d200352da5342ab4088a54c85","impliedFormat":1},{"version":"4fbd3116e00ed3a6410499924b6403cc9367fdca303e34838129b328058ede40","impliedFormat":1},{"version":"9c82171d836c47486074e4ca8e059735bf97b205e70b196535b5efd40cbe1bc5","impliedFormat":1},{"version":"8c70ddc0c22d85e56011d49fddfaae3405eb53d47b59327b9dd589e82df672e7","impliedFormat":1},{"version":"2f9c89cbb29d362290531b48880a4024f258c6033aaeb7e59fbc62db26819650","impliedFormat":1},{"version":"a365c4d3bed3be4e4e20793c999c51f5cd7e6792322f14650949d827fbcd170f","impliedFormat":1},{"version":"c5426dbfc1cf90532f66965a7aa8c1136a78d4d0f96d8180ecbfc11d7722f1a5","impliedFormat":1},{"version":"65a15fc47900787c0bd18b603afb98d33ede930bed1798fc984d5ebb78b26cf9","impliedFormat":1},{"version":"9d202701f6e0744adb6314d03d2eb8fc994798fc83d91b691b75b07626a69801","impliedFormat":1},{"version":"de9d2df7663e64e3a91bf495f315a7577e23ba088f2949d5ce9ec96f44fba37d","impliedFormat":1},{"version":"c7af78a2ea7cb1cd009cfb5bdb48cd0b03dad3b54f6da7aab615c2e9e9d570c5","impliedFormat":1},{"version":"1ee45496b5f8bdee6f7abc233355898e5bf9bd51255db65f5ff7ede617ca0027","impliedFormat":1},{"version":"273782b8454e78f6a8b30d2cfbf6860499c930595095fcc1689637115f0eddda","affectsGlobalScope":true,"impliedFormat":1},{"version":"3fbdd025f9d4d820414417eeb4107ffa0078d454a033b506e22d3a23bc3d9c41","affectsGlobalScope":true,"impliedFormat":1},{"version":"dba114fb6a32b355a9cfc26ca2276834d72fe0e94cd2c3494005547025015369","impliedFormat":1},{"version":"a8f8e6ab2fa07b45251f403548b78eaf2022f3c2254df3dc186cb2671fe4996d","affectsGlobalScope":true,"impliedFormat":1},{"version":"fa6c12a7c0f6b84d512f200690bfc74819e99efae69e4c95c4cd30f6884c526e","impliedFormat":1},{"version":"f1c32f9ce9c497da4dc215c3bc84b722ea02497d35f9134db3bb40a8d918b92b","impliedFormat":1},{"version":"b73c319af2cc3ef8f6421308a250f328836531ea3761823b4cabbd133047aefa","affectsGlobalScope":true,"impliedFormat":1},{"version":"e433b0337b8106909e7953015e8fa3f2d30797cea27141d1c5b135365bb975a6","impliedFormat":1},{"version":"9f9bb6755a8ce32d656ffa4763a8144aa4f274d6b69b59d7c32811031467216e","impliedFormat":1},{"version":"5c32bdfbd2d65e8fffbb9fbda04d7165e9181b08dad61154961852366deb7540","impliedFormat":1},{"version":"ddff7fc6edbdc5163a09e22bf8df7bef75f75369ebd7ecea95ba55c4386e2441","impliedFormat":1},{"version":"0c05e9842ec4f8b7bfebfd3ca61604bb8c914ba8da9b5337c4f25da427a005f2","impliedFormat":1},{"version":"faed7a5153215dbd6ebe76dfdcc0af0cfe760f7362bed43284be544308b114cf","impliedFormat":1},{"version":"7029e566b8df176f703fb59fd437a38670c7a0e02c58b2d66dfb5b2e2b2defdb","impliedFormat":1},{"version":"7f2aa4d4989a82530aaac3f72b3dceca90e9c25bee0b1a327e8a08a1262435ad","impliedFormat":1},{"version":"d96b39301d0ded3f1a27b47759676a33a02f6f5049bfcbde81e533fd10f50dcb","impliedFormat":1},{"version":"e9f147ecca73d9346a4c073432843c159ccbe50bdcb678a78f6da10eae2cecf4","impliedFormat":1},{"version":"de061f7d72bd65c06fc1419f841dfdcb29a8e22fe6fa527d1e6eb20b897d4de0","impliedFormat":1},{"version":"663beafc2446079574570cba86e9b15f986f908ddb1b01274509970126fee945","impliedFormat":1},{"version":"a3102887d5058bf4cb5b37fa6964c09e9527c42053b3b5c642b89878620748de","impliedFormat":1},{"version":"0aaaa1727edd29673d85c9b26d7ca4d54e5407a48586903c51b48b7f7d196f61","impliedFormat":1},{"version":"d35bca0b261bff02635758c48e8ab99c61c420d0dfabbcf467e847171d876b7d","impliedFormat":1},{"version":"3bc12c40d90c342ff88a3d876996c555ed5cbee5fe8c3308a240b321f401ee46","impliedFormat":1},{"version":"ba130768aae855a5477e9e148e5c879548e6e7ccbcc56fd1934c8a18ea5b7569","impliedFormat":1},{"version":"2e4f37ffe8862b14d8e24ae8763daaa8340c0df0b859d9a9733def0eee7562d9","impliedFormat":1},{"version":"d38530db0601215d6d767f280e3a3c54b2a83b709e8d9001acb6f61c67e965fc","impliedFormat":1},{"version":"6ac6715916fa75a1f7ebdfeacac09513b4d904b667d827b7535e84ff59679aff","impliedFormat":1},{"version":"b499af2054a037a162b3b72cd886f48bbf32a3502c865c6e29fac7d2ab3ce0b5","impliedFormat":1},{"version":"b83cb14474fa60c5f3ec660146b97d122f0735627f80d82dd03e8caa39b4388c","impliedFormat":1},{"version":"48773ca557b0319c2ee62ae249cf52a81709e8be139920d6479a66274de7c4ed","impliedFormat":1},{"version":"7274fbffbd7c9589d8d0ffba68157237afd5cecff1e99881ea3399127e60572f","impliedFormat":1},{"version":"b73cbf0a72c8800cf8f96a9acfe94f3ad32ca71342a8908b8ae484d61113f647","impliedFormat":1},{"version":"bae6dd176832f6423966647382c0d7ba9e63f8c167522f09a982f086cd4e8b23","impliedFormat":1},{"version":"20865ac316b8893c1a0cc383ccfc1801443fbcc2a7255be166cf90d03fac88c9","impliedFormat":1},{"version":"c9958eb32126a3843deedda8c22fb97024aa5d6dd588b90af2d7f2bfac540f23","impliedFormat":1},{"version":"461d0ad8ae5f2ff981778af912ba71b37a8426a33301daa00f21c6ccb27f8156","impliedFormat":1},{"version":"e927c2c13c4eaf0a7f17e6022eee8519eb29ef42c4c13a31e81a611ab8c95577","impliedFormat":1},{"version":"fcafff163ca5e66d3b87126e756e1b6dfa8c526aa9cd2a2b0a9da837d81bbd72","impliedFormat":1},{"version":"70246ad95ad8a22bdfe806cb5d383a26c0c6e58e7207ab9c431f1cb175aca657","impliedFormat":1},{"version":"f00f3aa5d64ff46e600648b55a79dcd1333458f7a10da2ed594d9f0a44b76d0b","impliedFormat":1},{"version":"772d8d5eb158b6c92412c03228bd9902ccb1457d7a705b8129814a5d1a6308fc","impliedFormat":1},{"version":"802e797bcab5663b2c9f63f51bdf67eff7c41bc64c0fd65e6da3e7941359e2f7","impliedFormat":1},{"version":"b01bd582a6e41457bc56e6f0f9de4cb17f33f5f3843a7cf8210ac9c18472fb0f","impliedFormat":1},{"version":"8b4327413e5af38cd8cb97c59f48c3c866015d5d642f28518e3a891c469f240e","impliedFormat":1},{"version":"4cceef18d7f088e797a463e90b7a9dad10c6bc667724b7686e3e740ae00122be","impliedFormat":1},{"version":"7ee86fbb3754388e004de0ef9e6505485ddfb3be7640783d6d015711c03d302d","impliedFormat":1},{"version":"cc1954b539604b1e562319119ac7e888172208b32ca873f9a357a92c826bd046","impliedFormat":1},{"version":"a67b87d0281c97dfc1197ef28dfe397fc2c865ccd41f7e32b53f647184cc7307","impliedFormat":1},{"version":"771ffb773f1ddd562492a6b9aaca648192ac3f056f0e1d997678ff97dbb6bf9b","impliedFormat":1},{"version":"43e96a3d5d1411ab40ba2f61d6a3192e58177bcf3b133a80ad2a16591611726d","impliedFormat":1},{"version":"232f70c0cf2b432f3a6e56a8dc3417103eb162292a9fd376d51a3a9ea5fbbf6f","impliedFormat":1},{"version":"bb8f2dbc03533abca2066ce4655c119bff353dd4514375beb93c08590c03e023","impliedFormat":1},{"version":"706dd95827e7ebaabda91d5db2b755233e0952d98570e9c032b0f066a15c1177","affectsGlobalScope":true,"impliedFormat":1},{"version":"0b103e9abfe82d14c0ad06a55d9f91d6747154ef7cacc73cf27ecad2bfb3afcf","impliedFormat":1},{"version":"990b8fad2327b77e6920cc792af320e8867e68f02ce849b12c0a6ab9a1aebb09","impliedFormat":1},{"version":"5eb8cd1cb0c9143d74a8190b577c522720878c31aef67d866fcd29973f83e955","impliedFormat":1},{"version":"120599fd965257b1f4d0ff794bc696162832d9d8467224f4665f713a3119078b","impliedFormat":1},{"version":"43ba4f2fa8c698f5c304d21a3ef596741e8e85a810b7c1f9b692653791d8d97a","impliedFormat":1},{"version":"5433f33b0a20300cca35d2f229a7fc20b0e8477c44be2affeb21cb464af60c76","impliedFormat":1},{"version":"db036c56f79186da50af66511d37d9fe77fa6793381927292d17f81f787bb195","impliedFormat":1},{"version":"a6805fcafed712aea7759f8bc731014f9d22738c1d6ef9d43b8091d1d48346d5","impliedFormat":1},{"version":"c49469a5349b3cc1965710b5b0f98ed6c028686aa8450bcb3796728873eb923e","impliedFormat":1},{"version":"4a889f2c763edb4d55cb624257272ac10d04a1cad2ed2948b10ed4a7fda2a428","impliedFormat":1},{"version":"7bb79aa2fead87d9d56294ef71e056487e848d7b550c9a367523ee5416c44cfa","impliedFormat":1},{"version":"d88ea80a6447d7391f52352ec97e56b52ebec934a4a4af6e2464cfd8b39c3ba8","impliedFormat":1},{"version":"142617b3cdf902b69c6464c9fbd942b60ab3e733ca18c032b19e0f7e2adbefe8","impliedFormat":1},{"version":"0b603555f1881f87256ffd6344d3e3ed6d466c2e701eabf381f28be8c2125892","impliedFormat":1},{"version":"897e4f7662488e3ecc79e743bdd3b78f13bdb69a97851afa5b440c4211e32ea9","impliedFormat":1},{"version":"e2e1c6d3b2d93add5200bd7bc1a8cccb4e446836b2111ece45db8683a2c765de","impliedFormat":1},{"version":"251b03d5cd243854ce870d9a9a39f491faf69898c5d6b5eee28cc7649c57417b","impliedFormat":1},{"version":"27ff4196654e6373c9af16b6165120e2dd2169f9ad6abb5c935af5abd8c7938c","impliedFormat":1},{"version":"2c4de79f406d137390608e8c0a44fba2ff8e00bacfcae7c9d1781fef10e9440d","impliedFormat":1},{"version":"07ba23a10465791be5d22deaf5ef7de7658774ddff53721e5ea17fedea1bc721","impliedFormat":1},{"version":"dca8c645c5afeb03b1ecedbf16323f33e7d0afaa6256c8e047e6e38087a97f53","impliedFormat":1},{"version":"775f181bd4a533d6f8b5e55ec1d9f1624559720ae8a70e9432258da26b38d27c","impliedFormat":1},{"version":"796273b2edc72e78a04e86d7c58ae94d370ab93a0ddf40b1aa85a37a1c29ecd7","impliedFormat":1},{"version":"5df15a69187d737d6d8d066e189ae4f97e41f4d53712a46b2710ff9f8563ec9f","impliedFormat":1},{"version":"9109a1291dd4b9f1541bea81ee11c247a2ca9e1ea89f87f13aa1811c3c069616","impliedFormat":1},{"version":"6ac6715916fa75a1f7ebdfeacac09513b4d904b667d827b7535e84ff59679aff","impliedFormat":1},{"version":"622694a8522b46f6310c2a9b5d2530dde1e2854cb5829354e6d1ff8f371cf469","impliedFormat":1},{"version":"cd8ce8d68567f62dd580b3c3c37777ac3f5b81944c7417f5ea83030eab533385","impliedFormat":1},{"version":"e374d1eaa05b7dc38580062942ac8351ce79cbe11f6dbce4946a582a5680582d","impliedFormat":1},{"version":"9e2739b32f741859263fdba0244c194ca8e96da49b430377930b8f721d77c000","impliedFormat":1},{"version":"a9e6c0ff3f8186fccd05752cf75fc94e147c02645087ac6de5cc16403323d870","impliedFormat":1},{"version":"49af4b52f0d4d2304c5f2c6fe5fab3e153e0acc38830d0202821b877c097dd02","impliedFormat":1},{"version":"49c346823ba6d4b12278c12c977fb3a31c06b9ca719015978cb145eb86da1c61","impliedFormat":1},{"version":"bfac6e50eaa7e73bb66b7e052c38fdc8ccfc8dbde2777648642af33cf349f7f1","impliedFormat":1},{"version":"92f7c1a4da7fbfd67a2228d1687d5c2e1faa0ba865a94d3550a3941d7527a45d","impliedFormat":1},{"version":"f53b120213a9289d9a26f5af90c4c686dd71d91487a0aa5451a38366c70dc64b","impliedFormat":1},{"version":"e68b8e5a1df7c1be2bc105141456ecba70215806e1c28bfbc5c12bfce4be6e68","impliedFormat":1},{"version":"511c8f02329808d47d00b859c532ae9115590048b17325a946c74dac48428650","impliedFormat":1},{"version":"57d67b72e06059adc5e9454de26bbfe567d412b962a501d263c75c2db430f40e","impliedFormat":1},{"version":"b5f9e66625783eefcbe3d2da074b2e7ba2066d61ce3fc6ef4f22805ad946cab4","impliedFormat":1},{"version":"e37115962d284b9f7a37c2bdd2add50f88365dde41f5e0ff591ffc48a8ec7575","impliedFormat":1},{"version":"6459054aabb306821a043e02b89d54da508e3a6966601a41e71c166e4ea1474f","impliedFormat":1},{"version":"bb37588926aba35c9283fe8d46ebf4e79ffe976343105f5c6d45f282793352b2","impliedFormat":1},{"version":"f89488602bec98a142072fae7ea5ba99431a569ff580c64b7be39896474799d8","impliedFormat":1},{"version":"bbbc47961f39a57df103cf4ca3bb8f8732b4b6678a18225a0aa76d59c466956c","impliedFormat":1},{"version":"2e6114a7dd6feeef85b2c80120fdbfb59a5529c0dcc5bfa8447b6996c97a69f5","impliedFormat":1},{"version":"2ffb043dc5163458e473b7010859f86e01dc4edffcae0a93d885d028b426a546","impliedFormat":1},{"version":"c8f004e6036aa1c764ad4ec543cf89a5c1893a9535c80ef3f2b653e370de45e6","impliedFormat":1},{"version":"dd80b1e600d00f5c6a6ba23f455b84a7db121219e68f89f10552c54ba46e4dc9","impliedFormat":1},{"version":"b064c36f35de7387d71c599bfcf28875849a1dbc733e82bd26cae3d1cd060521","impliedFormat":1},{"version":"05c7280d72f3ed26f346cbe7cbbbb002fb7f15739197cbbee6ab3fd1a6cb9347","impliedFormat":1},{"version":"8de9fe97fa9e00ec00666fa77ab6e91b35d25af8ca75dabcb01e14ad3299b150","impliedFormat":1},{"version":"04b7b2e0832dfd3c31e81df3975e8d8fda28e7ff999b0aa2932608a8f6661d5c","impliedFormat":1},{"version":"ca2d34c6ed5cbd3070b8b6f32f42ae54adcc6499c1e4b99f0a5798b3f27cc653","impliedFormat":1},{"version":"9ec68995e66dd6b9dac834bf5ae85fde802714ea2e82151a5d1d53ef01b463ef","impliedFormat":1},{"version":"5c4d626b4902f2ef8a1cc146d761d276cef988016dc674e3b98fbad70e64bc9f","impliedFormat":1},{"version":"fdfaa0aad899524962e2955287b5b991ffe3be50f64e02eb60c933ca44644a94","impliedFormat":1},{"version":"53c972a0f9bc3a4ec70fff7314123ea8cfcf75b3703046f767d2dc1eea87b2fb","impliedFormat":1},{"version":"f974e4a06953682a2c15d5bd5114c0284d5abf8bc0fe4da25cb9159427b70072","impliedFormat":1},{"version":"50256e9c31318487f3752b7ac12ff365c8949953e04568009c8705db802776fb","impliedFormat":1},{"version":"7d73b24e7bf31dfb8a931ca6c4245f6bb0814dfae17e4b60c9e194a631fe5f7b","impliedFormat":1},{"version":"d130c5f73768de51402351d5dc7d1b36eaec980ca697846e53156e4ea9911476","impliedFormat":1},{"version":"413586add0cfe7369b64979d4ec2ed56c3f771c0667fbde1bf1f10063ede0b08","impliedFormat":1},{"version":"06472528e998d152375ad3bd8ebcb69ff4694fd8d2effaf60a9d9f25a37a097a","impliedFormat":1},{"version":"7303b45138d2511035056a5901a1490ebdcbf055cbb1276f8629c5121cbe733e","impliedFormat":1},{"version":"27f874cd5327507eeff699a74567f60c1215b94509f4308633a7b01922471ed2","impliedFormat":1},{"version":"a401617604fa1f6ce437b81689563dfdc377069e4c58465dbd8d16069aede0a5","impliedFormat":1},{"version":"2c6cf04bc525caf6546e859e8ef10bfb9573837ec0bc5ec7b53a7b1b8ca72781","impliedFormat":1},{"version":"8695dec09ad439b0ceef3776ea68a232e381135b516878f0901ed2ea114fd0fe","impliedFormat":1},{"version":"304b44b1e97dd4c94697c3313df89a578dca4930a104454c99863f1784a54357","impliedFormat":1},{"version":"0a437ae178f999b46b6153d79095b60c42c996bc0458c04955f1c996dc68b971","impliedFormat":1},{"version":"74b2a5e5197bd0f2e0077a1ea7c07455bbea67b87b0869d9786d55104006784f","impliedFormat":1},{"version":"4a7baeb6325920044f66c0f8e5e6f1f52e06e6d87588d837bdf44feb6f35c664","impliedFormat":1},{"version":"87cc05fe13108f02e12da7e3efd8e360fef78d96a0c9e11408ea1b1b9fb3e03d","impliedFormat":1},{"version":"1abbf67c218d23c2ce76887caac2df6c7dab3d97ba2b65348432b876f510002a","impliedFormat":1},{"version":"1a82deef4c1d39f6882f28d275cad4c01f907b9b39be9cbc472fcf2cf051e05b","impliedFormat":1},{"version":"4b20fcf10a5413680e39f5666464859fc56b1003e7dfe2405ced82371ebd49b6","impliedFormat":1},{"version":"c06ef3b2569b1c1ad99fcd7fe5fba8d466e2619da5375dfa940a94e0feea899b","impliedFormat":1},{"version":"f7d628893c9fa52ba3ab01bcb5e79191636c4331ee5667ecc6373cbccff8ae12","impliedFormat":1},{"version":"1d879125d1ec570bf04bc1f362fdbe0cb538315c7ac4bcfcdf0c1e9670846aa6","impliedFormat":1},{"version":"8bd496cf710d4873d15e4891a5dbf945673e3321ca74cf75187e347fd5ed295e","impliedFormat":1},{"version":"a6dba407fc287f1e25454e75028c91bbc00675f2d1c4e8b3edcc36c08611a486","impliedFormat":1},{"version":"d663134457d8d669ae0df34eabd57028bddc04fc444c4bc04bc5215afc91e1f4","impliedFormat":1},{"version":"e91f7b1344577a02f051b9b471f33044fef8334a76dc9e1de003d17595a5219b","impliedFormat":1},{"version":"c0723195c85e19656d6b5b9fdb81d3f3403c1ae4679e722c6ea058c516b38d12","impliedFormat":1},{"version":"186eea74805194f04e41038fc5eca653788b9dedbab7c2d7d17e10139622dd92","impliedFormat":1},{"version":"71d9eb4c4e99456b78ae182fb20a5dfc20eb1667f091dbb9335b3c017dd1c783","impliedFormat":1},{"version":"cfa846a7b7847a1d973605fbb8c91f47f3a0f0643c18ac05c47077ebc72e71c7","impliedFormat":1},{"version":"1594da19968752a22b2ac48c2d0e60575700e745c577a8a4a676b841238ad5bb","impliedFormat":1},{"version":"e0cee12109e0a10a4c3d6769fcc7644b7c1ea7f52365bea51728f5af29f8a137","impliedFormat":1},{"version":"7d4254b4c6c67a29d5e7f65e67d72540480ac2cfb041ca484847f5ae70480b62","impliedFormat":1},{"version":"3536968defef8a75514f547ead5e2e9c1e984820290ec9b00c5fdfb6ef786535","impliedFormat":1},{"version":"d83773870080c30a230e322ce13a9c6f3398e8dacea4ea8a83e26370f3bac23e","impliedFormat":1},{"version":"dcfeaf98d66314fec29a9076c4290e45d0b196a65827becc19138e9c7b855f37","impliedFormat":1},{"version":"6849fe9210fe4946d5f085bfed36758f33dc6ae15a751338d178dd4daa017c46","impliedFormat":1},{"version":"888cda0fa66d7f74e985a3f7b1af1f64b8ff03eb3d5e80d051c3cbdeb7f32ab7","impliedFormat":1},{"version":"60681e13f3545be5e9477acb752b741eae6eaf4cc01658a25ec05bff8b82a2ef","impliedFormat":1},{"version":"ffae4e1e06aa848a1e4bcef162cd1c48e5909b26223515981310af9c036bdfc7","impliedFormat":1},{"version":"a57b1802794433adec9ff3fed12aa79d671faed86c49b09e02e1ac41b4f1d33a","impliedFormat":1},{"version":"34e16eb7c31768a11a08aebcfb3d70d7b8f0b016197e98d8419e566ceae6d6c8","impliedFormat":1},{"version":"f94ec1f7e4b709d26960306c9082a7a1b728a6e13089346aa48ba57c74cbf47e","impliedFormat":1},{"version":"9a11cb4033405e96c247cd5aa29790212aaffdd127869e8a5219103f0b389fd5","impliedFormat":1},{"version":"01479d9d5a5dda16d529b91811375187f61a06e74be294a35ecce77e0b9e8d6c","impliedFormat":1},{"version":"aff5213585cb72e94054dfe17250ff315f3569b3919d1ef1ad235f37c4ee894e","impliedFormat":1},{"version":"fb2ea35e1be6388d722d7725e2b49c697d34d9c890c3b96758faaeb86d35cef8","impliedFormat":1},{"version":"ce0df82a9ae6f914ba08409d4d883983cc08e6d59eb2df02d8e4d68309e7848b","impliedFormat":1},{"version":"1a4dc28334a926d90ba6a2d811ba0ff6c22775fcc13679521f034c124269fd40","impliedFormat":1},{"version":"f05315ff85714f0b87cc0b54bcd3dde2716e5a6b99aedcc19cad02bf2403e08c","impliedFormat":1},{"version":"5fad3b31fc17a5bc58095118a8b160f5260964787c52e7eb51e3d4fcf5d4a6f0","impliedFormat":1},{"version":"72105519d0390262cf0abe84cf41c926ade0ff475d35eb21307b2f94de985778","impliedFormat":1},{"version":"456006a6975b26c0a1785feddae165f6d307e2d601ffde27e21fc4a790e448a4","impliedFormat":1},{"version":"c857e0aae3f5f444abd791ec81206020fbcc1223e187316677e026d1c1d6fe08","impliedFormat":1},{"version":"ccf6dd45b708fb74ba9ed0f2478d4eb9195c9dfef0ff83a6092fa3cf2ff53b4f","impliedFormat":1},{"version":"1fe0d18b111e1145a7e7601855bccd4ca20f24e3b9a5aba6bb1fa9d1a7059170","impliedFormat":1},{"version":"5632c3c26d420c063eebe64c45b1248b9492a67bf44f1d0c57e9dc8f6cf449bb","impliedFormat":1},{"version":"0df5aa619ab12993a39ea6dae062ee46eadbb4d738916460e636ada52bced75b","impliedFormat":1},{"version":"8fca3039857709484e5893c05c1f9126ab7451fa6c29e19bb8c2411a2e937345","impliedFormat":1},{"version":"35069c2c417bd7443ae7c7cafd1de02f665bf015479fec998985ffbbf500628c","impliedFormat":1},{"version":"10ab7be91f87ebe8916b62cf28af2e45b5601fc7b0e311adf838f912c6b31dd8","impliedFormat":1},{"version":"bc636fbc08e0979ceb7eb0731a33000283d77a33b62e1f71ee65be50394e40ba","impliedFormat":1},{"version":"7e0b7f91c5ab6e33f511efc640d36e6f933510b11be24f98836a20a2dc914c2d","impliedFormat":1},{"version":"045b752f44bf9bbdcaffd882424ab0e15cb8d11fa94e1448942e338c8ef19fba","impliedFormat":1},{"version":"2894c56cad581928bb37607810af011764a2f511f575d28c9f4af0f2ef02d1ab","impliedFormat":1},{"version":"0a72186f94215d020cb386f7dca81d7495ab6c17066eb07d0f44a5bf33c1b21a","impliedFormat":1},{"version":"75bbd3be047d539988a0ff0b56384ef7a6a25f3b676ad96bee547d44c31622a7","impliedFormat":1},{"version":"42960001a776b089ade681ab5cfddc936e0afb0615133ec1841f3dee89d3e1bf","impliedFormat":1},{"version":"0aedb02516baf3e66b2c1db9fef50666d6ed257edac0f866ea32f1aa05aa474f","impliedFormat":1},{"version":"da47712b394d944328245482603bc6f416d3949b67c9392279caab595076b510","affectsGlobalScope":true,"impliedFormat":1},{"version":"37d0071d8f0a06dc55c2c5e0ec3391affd4fd107c53410bf358196ec0bf3923f","impliedFormat":1},{"version":"b213dad76ca37fd552274c9499056e1c0d9c1bd38a55bb7f68b22ba6b84c3ad7","impliedFormat":1},{"version":"56ccb49443bfb72e5952f7012f0de1a8679f9f75fc93a5c1ac0bafb28725fc5f","impliedFormat":1},{"version":"20fa37b636fdcc1746ea0738f733d0aed17890d1cd7cb1b2f37010222c23f13e","impliedFormat":1},{"version":"d90b9f1520366d713a73bd30c5a9eb0040d0fb6076aff370796bc776fd705943","impliedFormat":1},{"version":"bc03c3c352f689e38c0ddd50c39b1e65d59273991bfc8858a9e3c0ebb79c023b","impliedFormat":1},{"version":"19df3488557c2fc9b4d8f0bac0fd20fb59aa19dec67c81f93813951a81a867f8","affectsGlobalScope":true,"impliedFormat":1},{"version":"b25350193e103ae90423c5418ddb0ad1168dc9c393c9295ef34980b990030617","affectsGlobalScope":true,"impliedFormat":1},{"version":"bef86adb77316505c6b471da1d9b8c9e428867c2566270e8894d4d773a1c4dc2","impliedFormat":1},{"version":"5a49adaef698b7ad7e6127949fa1b0bbd3d46b7cbd11c54e392a4dcdd51f5190","impliedFormat":1},{"version":"96171c03c2e7f314d66d38acd581f9667439845865b7f85da8df598ff9617476","impliedFormat":1},{"version":"27be6622e2922a1b412eb057faa854831b95db9db5035c3f6d4b677b902ab3b7","impliedFormat":1},{"version":"5c634644d45a1b6bc7b05e71e05e52ec04f3d73d9ac85d5927f647a5f965181a","impliedFormat":1},{"version":"2489bf04d77dc025ba67f49f1a56eb24b9db477d5ff88123d887e163ed1776aa","impliedFormat":1},{"version":"63a7595a5015e65262557f883463f934904959da563b4f788306f699411e9bac","impliedFormat":1},{"version":"4ba137d6553965703b6b55fd2000b4e07ba365f8caeb0359162ad7247f9707a6","impliedFormat":1},{"version":"0b77b819b5417775fccb20c678293cf614c054a5b1a65421a5b933a9124ba998","impliedFormat":1},{"version":"e1f6076688a95bd82deaac740fccbe3cdea0d8a22057cccc9c5bce4398bdd33b","impliedFormat":1},{"version":"9252d498a77517aab5d8d4b5eb9d71e4b225bbc7123df9713e08181de63180f6","impliedFormat":1},{"version":"b1f1d57fde8247599731b24a733395c880a6561ec0c882efaaf20d7df968c5af","impliedFormat":1},{"version":"6715dc4eb59c8ea9abe2b78c235ed331dc710a06fe56798868dbc4d40cd1b707","impliedFormat":1},{"version":"35e6379c3f7cb27b111ad4c1aa69538fd8e788ab737b8ff7596a1b40e96f4f90","impliedFormat":1},{"version":"1fffe726740f9787f15b532e1dc870af3cd964dbe29e191e76121aa3dd8693f2","impliedFormat":1},{"version":"5a3ea721d03a361ccbdd7390ccd75f6e84cbca3a3f01f4b331ecc9af31890c49","impliedFormat":1},{"version":"e7dfaee4af38d45b1cab8a1ee0b3bc1f85ddcf64545ed391d675d78ae6526274","affectsGlobalScope":true,"impliedFormat":1},{"version":"e8daa443eaf9a27fd382cc1f8ebe30330c0f4d89511cfb469166874806751d35","impliedFormat":1},{"version":"af48e58339188d5737b608d41411a9c054685413d8ae88b8c1d0d9bfabdf6e7e","impliedFormat":1},{"version":"616775f16134fa9d01fc677ad3f76e68c051a056c22ab552c64cc281a9686790","impliedFormat":1},{"version":"65c24a8baa2cca1de069a0ba9fba82a173690f52d7e2d0f1f7542d59d5eb4db0","impliedFormat":1},{"version":"f9fe6af238339a0e5f7563acee3178f51db37f32a2e7c09f85273098cee7ec49","impliedFormat":1},{"version":"1de8c302fd35220d8f29dea378a4ae45199dc8ff83ca9923aca1400f2b28848a","impliedFormat":1},{"version":"77e71242e71ebf8528c5802993697878f0533db8f2299b4d36aa015bae08a79c","impliedFormat":1},{"version":"98a787be42bd92f8c2a37d7df5f13e5992da0d967fab794adbb7ee18370f9849","impliedFormat":1},{"version":"332248ee37cca52903572e66c11bef755ccc6e235835e63d3c3e60ddda3e9b93","impliedFormat":1},{"version":"94e8cc88ae2ef3d920bb3bdc369f48436db123aa2dc07f683309ad8c9968a1e1","impliedFormat":1},{"version":"4545c1a1ceca170d5d83452dd7c4994644c35cf676a671412601689d9a62da35","impliedFormat":1},{"version":"320f4091e33548b554d2214ce5fc31c96631b513dffa806e2e3a60766c8c49d9","impliedFormat":1},{"version":"a2d648d333cf67b9aeac5d81a1a379d563a8ffa91ddd61c6179f68de724260ff","impliedFormat":1},{"version":"d90d5f524de38889d1e1dbc2aeef00060d779f8688c02766ddb9ca195e4a713d","impliedFormat":1},{"version":"07ed3ddab975995eea41b22f3010506fb9f5fb301d04820b07d7a1aee5477d7c","impliedFormat":1},{"version":"969d8b0965849f4bae7cab0ba90bd1e1220e95999c2c6f01117fa7500901c017","impliedFormat":1},{"version":"6ec840ee5e2bc103f557fe38b1d585ee250540468713d7634ee066de372bf332","impliedFormat":1},{"version":"b0309e1eda99a9e76f87c18992d9c3689b0938266242835dd4611f2b69efe456","impliedFormat":1},{"version":"47699512e6d8bebf7be488182427189f999affe3addc1c87c882d36b7f2d0b0e","impliedFormat":1},{"version":"6ceb10ca57943be87ff9debe978f4ab73593c0c85ee802c051a93fc96aaf7a20","impliedFormat":1},{"version":"1de3ffe0cc28a9fe2ac761ece075826836b5a02f340b412510a59ba1d41a505a","impliedFormat":1},{"version":"e46d6cc08d243d8d0d83986f609d830991f00450fb234f5b2f861648c42dc0d8","impliedFormat":1},{"version":"1c0a98de1323051010ce5b958ad47bc1c007f7921973123c999300e2b7b0ecc0","impliedFormat":1},{"version":"ff863d17c6c659440f7c5c536e4db7762d8c2565547b2608f36b798a743606ca","impliedFormat":1},{"version":"5412ad0043cd60d1f1406fc12cb4fb987e9a734decbdd4db6f6acf71791e36fe","impliedFormat":1},{"version":"ad036a85efcd9e5b4f7dd5c1a7362c8478f9a3b6c3554654ca24a29aa850a9c5","impliedFormat":1},{"version":"fedebeae32c5cdd1a85b4e0504a01996e4a8adf3dfa72876920d3dd6e42978e7","impliedFormat":1},{"version":"e297c0a524edee7677939122f90027bfbe5f2698939d9a85728e5044b39c7124","impliedFormat":1},{"version":"cdf21eee8007e339b1b9945abf4a7b44930b1d695cc528459e68a3adc39a622e","impliedFormat":1},{"version":"bc9ee0192f056b3d5527bcd78dc3f9e527a9ba2bdc0a2c296fbc9027147df4b2","impliedFormat":1},{"version":"b62381cae176db34f003cc6172ee8f3e0122014889d66391aa73698105cf4934","impliedFormat":1},{"version":"1d9c0a9a6df4e8f29dc84c25c5aa0bb1da5456ebede7a03e03df08bb8b27bae6","impliedFormat":1},{"version":"84380af21da938a567c65ef95aefb5354f676368ee1a1cbb4cae81604a4c7d17","impliedFormat":1},{"version":"1af3e1f2a5d1332e136f8b0b95c0e6c0a02aaabd5092b36b64f3042a03debf28","impliedFormat":1},{"version":"30d8da250766efa99490fc02801047c2c6d72dd0da1bba6581c7e80d1d8842a4","impliedFormat":1},{"version":"03566202f5553bd2d9de22dfab0c61aa163cabb64f0223c08431fb3fc8f70280","impliedFormat":1},{"version":"41eb514d9ce0a6e87957f08a4b7af70d93f87637f37dee706e2d92a6601c25a9","impliedFormat":1},{"version":"e7765aa8bcb74a38b3230d212b4547686eb9796621ffb4367a104451c3f9614f","impliedFormat":1},{"version":"1de80059b8078ea5749941c9f863aa970b4735bdbb003be4925c853a8b6b4450","impliedFormat":1},{"version":"1d079c37fa53e3c21ed3fa214a27507bda9991f2a41458705b19ed8c2b61173d","impliedFormat":1},{"version":"5bf5c7a44e779790d1eb54c234b668b15e34affa95e78eada73e5757f61ed76a","impliedFormat":1},{"version":"5835a6e0d7cd2738e56b671af0e561e7c1b4fb77751383672f4b009f4e161d70","impliedFormat":1},{"version":"4b7f74b772140395e7af67c4841be1ab867c11b3b82a51b1aeb692822b76c872","impliedFormat":1},{"version":"7bd01f0f28cd3aeb2046274d85208e245965f6f2948edf4f7b2057bcf9f22ccc","impliedFormat":99},{"version":"d2f2cf2b8cc92bea913cda4a076e0f790b23a21e84f989d12f0116a7fe3906e0","impliedFormat":99},{"version":"6de125ea94866c736c6d58d68eb15272cf7d1020a5b459fea1c660027eca9a90","affectsGlobalScope":true,"impliedFormat":1},{"version":"f5b20bc288ee49989c95b20847fc93b96bf61cc0845598897a6a53a967dd7d07","affectsGlobalScope":true,"impliedFormat":1},{"version":"064ac1c2ac4b2867c2ceaa74bbdce0cb6a4c16e7c31a6497097159c18f74aa7c","impliedFormat":1},{"version":"3dc14e1ab45e497e5d5e4295271d54ff689aeae00b4277979fdd10fa563540ae","impliedFormat":1},{"version":"d3b315763d91265d6b0e7e7fa93cfdb8a80ce7cdd2d9f55ba0f37a22db00bdb8","impliedFormat":1},{"version":"b789bf89eb19c777ed1e956dbad0925ca795701552d22e68fd130a032008b9f9","impliedFormat":1},{"version":"5118a67b2f9e0a081bf5c2f2a2f79fb8930bb34ef7d506350ee1e0cc93d5cb34","affectsGlobalScope":true},"083e23c4c5e7761db151134ea1ef7896120c86c5888cdc8a861f534f7e86d6fd",{"version":"a9373d52584b48809ffd61d74f5b3dfd127da846e3c4ee3c415560386df3994b","impliedFormat":99},{"version":"caf4af98bf464ad3e10c46cf7d340556f89197aab0f87f032c7b84eb8ddb24d9","impliedFormat":99},{"version":"7ec047b73f621c526468517fea779fec2007dd05baa880989def59126c98ef79","impliedFormat":99},{"version":"c5013d60cbff572255ccc87c314c39e198c8cc6c5aa7855db7a21b79e06a510f","impliedFormat":99},{"version":"c57b441e0c0a9cbdfa7d850dae1f8a387d6f81cbffbc3cd0465d530084c2417d","impliedFormat":99},{"version":"2fbe402f0ee5aa8ab55367f88030f79d46211c0a0f342becaa9f648bf8534e9d","impliedFormat":1},{"version":"b94258ef37e67474ac5522e9c519489a55dcb3d4a8f645e335fc68ea2215fe88","impliedFormat":1},{"version":"4c54300bb2670678e16cb98079486f3f2bfa061dd1b954e7e4a8999959420507","impliedFormat":1},{"version":"8658354b90861a76abc7b3c04ece2124295c7da0cc4c4d31c2c78d8607188d03","impliedFormat":1},{"version":"76db4720b8835194b5bb3c6e4f1049914e39a24121dee582eca62039c8c16dfb","signature":"400b40fe5d5f4140993b0ac871686d2b7611ab791e8810b2e14f2d89701fc49e"},{"version":"3be518b76a7ec71ccef4b4dc3909123502a8848bcf98a2b1a665417ce1c394cf","signature":"710a00acd5f919a99bdd9b40824b024b39e9d546b5e611558fbc0ce155f422d6"},{"version":"b48129a98629560e496308f0125bb8a153c1665b6d25d76773311961ce44154b","signature":"f238db8bd54a02c277895ef9300e2d809ef738cfda6e91dd295e48d7196a7f0b"},{"version":"86cd781770e3b67544538f3816f55e219d43a0ecca79665fd748e9979e0b10ee","signature":"32f7c168ee545e9b432d2a861f4fb0bc645e21e88c774cedf54e72d1e3ccc049"},{"version":"b48129a98629560e496308f0125bb8a153c1665b6d25d76773311961ce44154b","signature":"f238db8bd54a02c277895ef9300e2d809ef738cfda6e91dd295e48d7196a7f0b"},{"version":"e4d0dbd0b4f272d76678b95e50a460210f899c6a8ac51f23a49fd76b52f8aa18","signature":"ad70f0521fc9530df0f9c8b996ca61e10d8a548c4309c12eeef7a79eeaebcbf4"},{"version":"fe93c474ab38ac02e30e3af073412b4f92b740152cf3a751fdaee8cbea982341","impliedFormat":1},{"version":"3255b97f3f24af29c79cc1aa88004efb13b6285ebdde0a567bf32e19bb65250d","impliedFormat":1},{"version":"1e00b8bf9e3766c958218cd6144ffe08418286f89ff44ba5a2cc830c03dd22c7","impliedFormat":1},{"version":"8f6c5ed472c91dc2d8b6d5d4b18617c611239a0d0d0ad15fb6205aec62e369ca","impliedFormat":1},{"version":"0b960be5d075602748b6ebaa52abd1a14216d4dbd3f6374e998f3a0f80299a3a","impliedFormat":1},{"version":"6e33223b4de404a63f431d223ce05f7c6afbeff873199b608773bdd9ad70f9cc","affectsGlobalScope":true,"impliedFormat":99},{"version":"82398f857190f9aa36f8e7da63ecf2f6fe905ed30a93affb8e8bde1d81587848","signature":"bcf440ab7f63aab75d8dcccf47453ad624e3add44a1f8518be5fa71574720d7e"},{"version":"ffeb91f2c925ded5147acdeaef2b5060a8e48f5c5e528e646ea872f4440bd2be","impliedFormat":1},{"version":"92b04f33102a008e5c0a41ed19d1bcd72bf443bd092e6d52f96d714a5ab5cb57","affectsGlobalScope":true,"impliedFormat":1},{"version":"5e8ef26ea90fb5636ac95a08903ffec4f20b585575dcffa56c32da0df53830b9","impliedFormat":1},{"version":"a346701ad6dcdaa58e388fe0995fc5304c09c395b8cba68ed872780f8c102004","impliedFormat":99},{"version":"6eabffde44eb5f55314b219046110037dcf0f828bba2a2a4b484ca0ceb83997e","signature":"0448f70efc9a42e30f88e7b12b7b92001ac2ef5eab8b6ef7c0e9ec02ea057e51"},{"version":"62e0a73f63e74fb82a4ff455e9072d3b4862e2d7e229ef51a842b6e3c8861b0d","signature":"93cbe28740c0a714593faad25b594962c03c44e6d9fc85b3c467ae4c2f39f005"},{"version":"1889f8e8d355e002e8e34d8d009b2accd4898aa890047cbead95ef83c53c3120","signature":"cfc4a11c819b4e98539a9c4f69627654f6aa0855c056b4af897fd31ca5bbcb54"},{"version":"8dd450de6d756cee0761f277c6dc58b0b5a66b8c274b980949318b8cad26d712","impliedFormat":99},{"version":"904d6ad970b6bd825449480488a73d9b98432357ab38cf8d31ffd651ae376ff5","impliedFormat":99},{"version":"dfcf16e716338e9fe8cf790ac7756f61c85b83b699861df970661e97bf482692","impliedFormat":99},{"version":"d08c203c1b616e8e712702205d671fd5a54e5aa8f446f95ae801e98ecc7bda16","signature":"7cc49a13d6dc95645c5e5d5fd44f7b3f5c69dfe80b50bbfb48ee0598195798ea"},{"version":"2c57db2bf2dbd9e8ef4853be7257d62a1cb72845f7b976bb4ee827d362675f96","impliedFormat":99},{"version":"4c27fe7be7610ea56deb130ea0a4ca95b2fc2c9aaba102240cb35b4da1578cbe","signature":"f0be1892cb7f2a9d3ad1905cb890ba8ce14f31fdd29160043ea88830717b284b"},{"version":"49ebbc2c1ba3dd33c195333741bb8f72c06a26795aca1a0b1088d650fa17e056","signature":"565b2d46f8ea3ce801422c0fccfaea2c83be3b331c217eacfa9a69049b4bb7a4"},{"version":"e516240bc1e5e9faef055432b900bc0d3c9ca7edce177fdabbc6c53d728cced8","impliedFormat":99},{"version":"5402765feacf44e052068ccb4535a346716fa1318713e3dae1af46e1e85f29a9","impliedFormat":99},{"version":"e16ec5d4796e7a765810efee80373675cedc4aa4814cf7272025a88addf5f0be","impliedFormat":99},{"version":"1f57157fcd45f9300c6efcfc53e2071fbe43396b0a7ed2701fbd1efb5599f07f","impliedFormat":99},{"version":"9f1886f3efddfac35babcada2d454acd4e23164345d11c979966c594af63468b","impliedFormat":99},{"version":"a3541c308f223863526df064933e408eba640c0208c7345769d7dc330ad90407","impliedFormat":99},{"version":"59af208befeb7b3c9ab0cb6c511e4fec54ede11922f2ffb7b497351deaf8aa2e","impliedFormat":99},{"version":"928b16f344f6cddaba565da8238f4cf2ddf12fe03eb426ab46a7560e9b3078fa","impliedFormat":99},{"version":"120bdf62bccef4ea96562a3d30dd60c9d55481662f5cf31c19725f56c0056b34","impliedFormat":99},{"version":"39e0da933908de42ba76ea1a92e4657305ae195804cfaa8760664e80baac2d6a","impliedFormat":99},{"version":"55ce6ca8df9d774d60cef58dd5d716807d5cc8410b8b065c06d3edac13f2e726","impliedFormat":99},{"version":"788a0faf3f28d43ce3793b4147b7539418a887b4a15a00ffb037214ed8f0b7f6","impliedFormat":99},{"version":"a3e66e7b8ccdab967cd4ada0f178151f1c42746eabb589a06958482fd4ed354e","impliedFormat":99},{"version":"bf45a2964a872c9966d06b971d0823daecbd707f97e927f2368ba54bb1b13a90","impliedFormat":99},{"version":"39973a12c57e06face646fb79462aabe8002e5523eec4e86e399228eb34b32c9","impliedFormat":99},{"version":"f01091e9b5028acfb38208113ae051fad8a0b4b8ec1f7137a2a5cf903c47eefc","impliedFormat":99},{"version":"b3e87824c9e7e3a3be7f76246e45c8d603ce83d116733047200b3aa95875445b","impliedFormat":99},{"version":"7e1f7f9ae14e362d41167dc861be6a8d76eca30dde3a9893c42946dc5a5fc686","impliedFormat":99},{"version":"9308ef3b9433063ac753a55c3f36d6d89fa38a8e6c51e05d9d8329c7f1174f24","impliedFormat":99},{"version":"cd3bb1aa24726a0abd67558fde5759fe968c3c6aa3ec7bad272e718851502894","impliedFormat":99},{"version":"1ae0f22c3b8420b5c2fec118f07b7ebd5ae9716339ab3477f63c603fe7a151c8","impliedFormat":99},{"version":"919ff537fff349930acc8ad8b875fd985a17582fb1beb43e2f558c541fd6ecd9","impliedFormat":99},{"version":"4e67811e45bae6c44bd6f13a160e4188d72fd643665f40c2ac3e8a27552d3fd9","impliedFormat":99},{"version":"3d1450fd1576c1073f6f4db9ebae5104e52e2c4599afb68d7d6c3d283bdbaf4f","impliedFormat":99},{"version":"c072af873c33ff11af126c56a846dfada32461b393983a72b6da7bff373e0002","impliedFormat":99},{"version":"de66e997ea5376d4aeb16d77b86f01c7b7d6d72fbb738241966459d42a4089e0","impliedFormat":99},{"version":"d77ea3b91e4bc44d710b7c9487c2c6158e8e5a3439d25fc578befeb27b03efd7","impliedFormat":99},{"version":"a3d5c695c3d1ebc9b0bd55804afaf2ac7c97328667cbeedf2c0861b933c45d3e","impliedFormat":99},{"version":"270724545d446036f42ddea422ee4d06963db1563ccc5e18b01c76f6e67968ae","impliedFormat":99},{"version":"85441c4f6883f7cfd1c5a211c26e702d33695acbabec8044e7fa6831ed501b45","impliedFormat":99},{"version":"0f268017a6b1891fdeea69c2a11d576646d7fd9cdfc8aac74d003cd7e87e9c5a","impliedFormat":99},{"version":"9ece188c336c80358742a5a0279f2f550175f5a07264349d8e0ce64db9701c0b","impliedFormat":99},{"version":"cf41b0fc7d57643d1a8d21af07b0247db2f2d7e2391c2e55929e9c00fbe6ab9a","impliedFormat":99},{"version":"11e7ddddd9eddaac56a6f23d8699ae7a94c2a55ae8c986fdabc719d3c3e875a1","impliedFormat":99},{"version":"36e3eb67df2d2ff3187b4b40391f14d70e47f4818599b050e86faee36e318052","impliedFormat":99},{"version":"5c44b3eec57983546666ba931b822bd9002e9af72e68af8d93549e2cc308473e","impliedFormat":99},{"version":"a1e91dce7758dc0c3ce7739cb33fcabca89022dc9dbc73306759ae064e6e135f","impliedFormat":99},{"version":"dd129c2d348be7dbf9f15d34661defdfc11ee00628ca6f7161bead46095c6bc3","impliedFormat":99},{"version":"c38d8e7cfc64bbfc14a63346388249c1cfa2cc02166c5f37e5a57da4790ce27f","impliedFormat":99},{"version":"5e95791be922d351dc6dcae9d54a14599e81d22abf1438bb323fc5647d780995","signature":"0d2ec35e98301af187839a1a6110c5f2dd8202b514755c1b6450394eac8cb5bc"},{"version":"80145d6ae663145d57499f5fcb81da344f62bc2b1f9c52136299ce871531c13b","signature":"779206814f349dabaca33ac66ecb8bb64a5ed56dcdb99137d0de9df3abdcd22d"},{"version":"5646643e2e06a7c83bdcb0113173aa15eba2c07f85af04a88ebdf16712065bbf","signature":"04421bf9b76ac311bd729d3fa6a7447b7bb168e3bc0c7ceb4e1e099e4a7704e0"},{"version":"965ea789e73f20f6a9d4043f63e918acb122dde4f732532963df1cd7d6894593","signature":"7b87720aae5dbfb749d597c437531239e4019502dc0e78633561735db617b6f3"},{"version":"a78a429f0c4db6fd5d15db08d308eb1685bde79c66cee5396645adcb390006dc","signature":"b5207c418c884d53d0f8265c4f89c1650280cba16860dff92876b757db7a856d"},{"version":"5b27a7ee75eca22d495e9ebdea9e85cfe70d7e6a4448250f586a61343139f1e6","signature":"d3499fe498ad8480ee7cac1967432397754929fc8b9134713f21e77be66ff20b"},{"version":"d30e67059f5c545c5f8f0cc328a36d2e03b8c4a091b4301bc1d6afb2b1491a3a","impliedFormat":1},{"version":"a356d9a0ba90d10ec6c0fa33386c0b0e2843fd6f0a49513c44f7809926ac25ff","impliedFormat":1},{"version":"980ce2b93e7a6acb3ddf674ef7ce38190048c532e51e21f91fa0b4e76bd9da24","impliedFormat":99},{"version":"782d3adbf885a766ca59ac64614b94be24ddf43364aee8fcf0aaeac78f22c409","impliedFormat":99},{"version":"9a3563739f42de842bf6416a4291fd974f41247cf536ce9a46f8e2d27ff3c9ac","impliedFormat":99},{"version":"8fcbab45a764abd33e19fde93b7bbafdd7a84f7eaf24c4d75a8b47a1153c2367","impliedFormat":99},{"version":"7e462fd642d79001523b2750ee16b439dfee35e3fc8d29befd9c9b85a8473555","impliedFormat":99},{"version":"b0c2fde8e0877c3d412550846ae6eb32c5be23bcade4db9752680fdfc8ee2912","impliedFormat":99},{"version":"4528dccc5a895a9f83e4a5d374d13f974d4e7dd5b767b9255db3a16c4a8b6af1","impliedFormat":99},{"version":"35d4cc70e2aebadb8983c4ebee05fb39b2d4251f283626cf2d877777878a25f1","impliedFormat":99},{"version":"3a8e5767ddb941a6e3a3349be35372ba82741e48b2ad0bc5012096f01259271a","impliedFormat":99},{"version":"877eebb657ae8f9ff4fea6d6160d7dbd7cb86c44b4e5969a34faa0f6bb178281","impliedFormat":99},{"version":"7d4cbd66f135c4dee1dc0e8e83d1c64012afd1e60b3e9fb0c614837614c2150e","impliedFormat":99},{"version":"0e85b2d7628363eea950d41358445a657fd52e5c90c665f89d85ded309a8513d","impliedFormat":99},{"version":"113aef5576cd65f310927b17ae5f6ac8745c542a660bace5f019034d536fbd04","impliedFormat":99},{"version":"c3eadb01eeb845c16e05003ba361c48ffaa5aa282b0cc3391cd1f512716cb8f7","impliedFormat":99},{"version":"a2c1678ec68c42795e2ac068a7d026b61680357d2a881c9df211dd0f83d077fd","impliedFormat":99},{"version":"d913ea1d0389ac20bd683211b0189f2fe4b50daf1aec40579a9de9adcaac321c","impliedFormat":99},{"version":"a7af5f01007f450dc8cf2cdbbb11f4d4bf8bf3faa869d21267db5de74ebf665a","impliedFormat":99},{"version":"723ac403322245c7270585a8f878f9a835f4da110f3b0b23e7971d404587685b","impliedFormat":99},{"version":"092ce9ed3440c57a829d2b47f767d6ab08828bc63fd9a4fa2aaec93e905eb9dd","impliedFormat":99},{"version":"8e34268962765c29f02f67e508ae6fb4485533675b316e3624c45f3b4f4d4a59","impliedFormat":99},{"version":"e02ed9f98527f807856ac9dc722a076064cb59f798b28106597527eb36f6ec88","impliedFormat":99},{"version":"0b67d1d5f611d99afc9ba55060a37e947664d61a5152469895ed5b64551c5e12","impliedFormat":99},{"version":"ce4088bd3b3fed9def201b87d072fcbdc8e0b43366a9489949abeca20c55464e","impliedFormat":99},{"version":"f3d31927b7a3d0f2f119a05a102af2bdd1fc4f759fe43d508a64a80b3b341f6b","impliedFormat":99},{"version":"9af1ebdf1ad0f65d11b952adc31dca4b56344c9ab41a5d0fb75dc6c3279e14b1","impliedFormat":99},{"version":"b3d7be31ee4d5386773e05a57ff97f74fc2559116cec17d21a6d0e26065d4b8c","impliedFormat":99},{"version":"9a4496ad6d48bc801a122c11e94ee1e3f0710bda38b125573f67f5cb0add1733","impliedFormat":99},{"version":"7c8d0fe14db06e4c48dc3697f26975e209fc0ac05480c1502e62af6ada3137a5","impliedFormat":99},{"version":"3f51976480d40cb1b00bd5ce27fbb8c8d6c72ff06e5203c2c06d83ec060d7052","impliedFormat":99},{"version":"dc21879e45f3a023b5fe459c3da5f2f3cf995f21a1ac533049d8950ce394c045","impliedFormat":99},{"version":"622d6ce66ac838d5d7e968daf4ae760cf49797e3fbfaa2b21d01e0fb5d625bc9","impliedFormat":99},{"version":"ecfa30418b2200ba6496b5f59b4c09a95cce9ea37c1daaf5a5db9bb306ee038f","impliedFormat":99},{"version":"01e02b5605d954a0329fe44d775c8fde41fa1b494b2506b524f461def33b3d7b","impliedFormat":99},{"version":"d6e7c7254b9a5168f868503a28d54368537783c4989dc060176de6f8d3042bf7","impliedFormat":99},{"version":"b5fced0ac3ffee12413503b6887a047181054a5a133ab2946b81e7d252f09181","impliedFormat":99},{"version":"c874e98cd875727ea62fdcd978ac9e067ce07cf7493aa4b8b193fdc3b7318eea","impliedFormat":99},{"version":"455e843c1f8e0df452f101c9ec0b63ab8e749f296c947249f8bbc29bff58c83c","impliedFormat":99},{"version":"dc52fbf76167f89ba36d883dae3935675700a59f9977d063a8b781947fae76b0","impliedFormat":99},{"version":"f2c5a01d18de21ad039c0eaed43c8ef57b02f4de1f4d85223eaa0c562f124736","impliedFormat":99},{"version":"fc741907f6d8158b2c4722932d745b11dd41f9355a5b325c8cd3cdfbd966d76d","impliedFormat":99},{"version":"1f21ec91b9a3539edecf23e1afb4d168be7424c45537385d583da4171bae7e93","signature":"017c86a586b286722ac3f8f6a9101a58bc01d963040c329560bf06f65bc44405"},{"version":"73238bd96b66986c04a3785a25f191fa678b018de695df75f607bca71121e3d8","signature":"0c9f316dbaa39e23a00dffa6085226503694b056a6709a8dde5f2e263bc34385"},{"version":"cc12a033819b73ff20dd748f22c87c50c9f11b44613a66bf7e8459ceaafe62d3","signature":"0eb8aa004a3d7165e4dc2a0ae1f571bcd371a23bc70e23678f762cb3a6948899"},{"version":"a1e4dde9d568d56bed1ad8c2c9a39d60a55fe1db04c198e5b4c958435c6dccd8","signature":"668cb5a7d7aa33c7a571de52d66318e1ab1c173e1bf476394b52be32cded828f"},{"version":"711a93891eaf107bd627fdc55a3c709e1922c10a66fd6c274d1ce98431fa09ad","signature":"9ed9888d244894d3853a73d30660793c5f26cc45b61613fe7ef7bcb22c19fd5f"},{"version":"6c05d0fcee91437571513c404e62396ee798ff37a2d8bef2104accdc79deb9c0","impliedFormat":1},{"version":"c3ad0a142080a20c3229c1ceefd74e3fe0fd1f371dec8b07889c9d2b448d5c50","signature":"8ced3e19a179346437c1ac65e063a793f4559fd0281c8b4c6ab4e34e51892085"},{"version":"0943a6e4e026d0de8a4969ee975a7283e0627bf41aa4635d8502f6f24365ac9b","impliedFormat":99},{"version":"1461efc4aefd3e999244f238f59c9b9753a7e3dfede923ebe2b4a11d6e13a0d0","impliedFormat":99},{"version":"7e5c1d7ad0c44737d6bac890ecbd5f95c2a8cd0d5629c2c1059ebbc0b3140853","signature":"0bb7dc51869cf43a818dd6d08599897543f5375fc02213c86c980cd8a56eb396"},{"version":"31c30cc54e8c3da37c8e2e40e5658471f65915df22d348990d1601901e8c9ff3","impliedFormat":99},{"version":"b1e624af25588bd48c9f44d6c467fd2fd10fefe931d2029d426d1901f5a61a3e","signature":"506de066b3c5993482ff65065ba1d1fa69180a24eb20b6c5fb15141fc9d42400"},{"version":"cea0f2235d4cbb0a00bdb4269e03cd1ac6aab75783d21eb04ef754a7b51f983f","signature":"6730bbdfd0ecd7e5e023e8609313bb5a25a7f1594a133669f4febf373eb5c6f1"},{"version":"caf4af98bf464ad3e10c46cf7d340556f89197aab0f87f032c7b84eb8ddb24d9","impliedFormat":99},{"version":"36d8011f1437aecf0e6e88677d933e4fb3403557f086f4ac00c5a4cb6d028ac2","impliedFormat":99},{"version":"8b96e88915893b8315199bc6897f28eb82595c57336fc8c47900d812b9f99c29","signature":"fca9bc9ef189961ee8b8ae7a29d2ee2ddbab2e15d1fefa8f3fb4d6005ef35bd8"},{"version":"a9373d52584b48809ffd61d74f5b3dfd127da846e3c4ee3c415560386df3994b","impliedFormat":99},{"version":"caf4af98bf464ad3e10c46cf7d340556f89197aab0f87f032c7b84eb8ddb24d9","impliedFormat":99},{"version":"8085954ba165e611c6230596078063627f3656fed3fb68ad1e36a414c4d7599a","impliedFormat":99},{"version":"1b86eeb3d1c4ffc1e3bb43ba22f0ae342f6c59e8266bdfcb4f1366194f632513","signature":"a548630f941a3440739c0de45a1e20495f57ea8abebe98425a124bfc6ebb8d75"},{"version":"de707f7b731c9644736b14b80a79e5f35ffb7502c24d0904424fd30fc897a507","signature":"5759cb11825992823d4a1b694974bf261d262a376225b14bb295845851160aa2"},{"version":"caf4af98bf464ad3e10c46cf7d340556f89197aab0f87f032c7b84eb8ddb24d9","impliedFormat":99},{"version":"9c580c6eae94f8c9a38373566e59d5c3282dc194aa266b23a50686fe10560159","impliedFormat":99},{"version":"4e291f794c76ffe1f9c59ae922fc17eeff33cd25b5eb9dc8e22fdf7daf352203","signature":"dbb75a08150c6031b2a036d35c99fe58bd58afb83ea378200726f7686979b649"},{"version":"e3563b787876a4dfd559a4115f0ec29da8d3f1b9c845d42c82ab5870bfedfcf1","signature":"7f1a63df38832b63ac8fd0d109e01b04dca1a8911debb304a6e6a6b129dda6f5"},{"version":"57ae71d27ee71b7d1f2c6d867ddafbbfbaa629ad75565e63a508dbaa3ef9f859","impliedFormat":99},{"version":"60924ca0c60f0674f208bfa1eaaa54e6973ced7650df7c7a81ae069730ef665a","impliedFormat":99},{"version":"e3181c7595a89dd03ba9a20eb5065fa37e0b0a514261bed774f6ae2241634470","impliedFormat":99},{"version":"c42d5cbf94816659c01f7c2298d0370247f1a981f8ca6370301b7a03b3ced950","impliedFormat":99},{"version":"18c18ab0341fd5fdfefb5d992c365be1696bfe000c7081c964582b315e33f8f2","impliedFormat":99},{"version":"dafbd4199902d904e3d4a233b5faf5dc4c98847fcd8c0ddd7617b2aed50e90d8","impliedFormat":99},{"version":"9fc866f9783d12d0412ed8d68af5e4c9e44f0072d442b0c33c3bda0a5c8cae15","impliedFormat":99},{"version":"5fc13d24a2d0328eac00c4e73cc052a987fbced2151bc0d3b7eb8f3ba4d0f4e2","impliedFormat":99},{"version":"2cef84bf00cbdb452fdc5d8ecfe7b8c0aa3fa788bdc4ad8961e2e636530dbb60","impliedFormat":99},{"version":"24104650185414f379d5cc35c0e2c19f06684a73de5b472bae79e0d855771ecf","impliedFormat":99},{"version":"799003c0ab928582fca04977f47b8d85b43a8de610f4eef0ad2d069fbb9f9399","impliedFormat":99},{"version":"b13dd41c344a23e085f81b2f5cd96792e6b35ae814f32b25e39d9841844ad240","impliedFormat":99},{"version":"17d8b4e6416e48b6e23b73d05fd2fde407e2af8fddbe9da2a98ede14949c3489","impliedFormat":99},{"version":"6d17b2b41f874ab4369b8e04bdbe660163ea5c8239785c850f767370604959e3","impliedFormat":99},{"version":"04b4c044c8fe6af77b6c196a16c41e0f7d76b285d036d79dcaa6d92e24b4982b","impliedFormat":99},{"version":"30bdeead5293c1ddfaea4097d3e9dd5a6b0bc59a1e07ff4714ea1bbe7c5b2318","impliedFormat":99},{"version":"e7df226dcc1b0ce76b32f160556f3d1550124c894aae2d5f73cefaaf28df7779","impliedFormat":99},{"version":"f2b7eef5c46c61e6e72fba9afd7cc612a08c0c48ed44c3c5518559d8508146a2","impliedFormat":99},{"version":"00f0ba57e829398d10168b7db1e16217f87933e61bd8612b53a894bd7d6371da","impliedFormat":99},{"version":"126b20947d9fa74a88bb4e9281462bda05e529f90e22d08ee9f116a224291e84","impliedFormat":99},{"version":"40d9e43acee39702745eb5c641993978ac40f227475eacc99a83ba893ad995db","impliedFormat":99},{"version":"8a66b69b21c8de9cb88b4b6d12f655d5b7636e692a014c5aa1bd81745c8c51d5","impliedFormat":99},{"version":"ebbb846bdd5a78fdacff59ae04cea7a097912aeb1a2b34f8d88f4ebb84643069","impliedFormat":99},{"version":"7321adb29ffd637acb33ee67ea035f1a97d0aa0b14173291cc2fd58e93296e04","impliedFormat":99},{"version":"320816f1a4211188f07a782bdb6c1a44555b3e716ce13018f528ad7387108d5f","impliedFormat":99},{"version":"b2cc8a474b7657f4a03c67baf6bff75e26635fd4b5850675e8cad524a09ddd0c","impliedFormat":99},{"version":"0d081e9dc251063cc69611041c17d25847e8bdbe18164baaa89b7f1f1633c0ab","impliedFormat":99},{"version":"a64c25d8f4ec16339db49867ea2324e77060782993432a875d6e5e8608b0de1e","impliedFormat":99},{"version":"0739310b6b777f3e2baaf908c0fbc622c71160e6310eb93e0d820d86a52e2e23","impliedFormat":99},{"version":"37b32e4eadd8cd3c263e7ac1681c58b2ac54f3f77bb34c5e4326cc78516d55a9","impliedFormat":99},{"version":"9b7a8974e028c4ed6f7f9abb969e3eb224c069fd7f226e26fcc3a5b0e2a1eba8","impliedFormat":99},{"version":"e8100b569926a5592146ed68a0418109d625a045a94ed878a8c5152b1379237c","impliedFormat":99},{"version":"594201c616c318b7f3149a912abd8d6bdf338d765b7bcbde86bca2e66b144606","impliedFormat":99},{"version":"03e380975e047c5c6ded532cf8589e6cc85abb7be3629e1e4b0c9e703f2fd36f","impliedFormat":99},{"version":"fae14b53b7f52a8eb3274c67c11f261a58530969885599efe3df0277b48909e1","impliedFormat":99},{"version":"c41206757c428186f2e0d1fd373915c823504c249336bdc9a9c9bbdf9da95fef","impliedFormat":99},{"version":"e961f853b7b0111c42b763a6aa46fc70d06a697db3d8ed69b38f7ba0ae42a62b","impliedFormat":99},{"version":"3db90f79e36bcb60b3f8de1bc60321026800979c150e5615047d598c787a64b7","impliedFormat":99},{"version":"639b6fb3afbb8f6067c1564af2bd284c3e883f0f1556d59bd5eb87cdbbdd8486","impliedFormat":99},{"version":"49795f5478cb607fd5965aa337135a8e7fd1c58bc40c0b6db726adf186dd403f","impliedFormat":99},{"version":"7d8890e6e2e4e215959e71d5b5bd49482cf7a23be68d48ea446601a4c99bd511","impliedFormat":99},{"version":"d56f72c4bb518de5702b8b6ae3d3c3045c99e0fd48b3d3b54c653693a8378017","impliedFormat":99},{"version":"4c9ac40163e4265b5750510d6d2933fb7b39023eed69f7b7c68b540ad960826e","impliedFormat":99},{"version":"8dfab17cf48e7be6e023c438a9cdf6d15a9b4d2fa976c26e223ba40c53eb8da8","impliedFormat":99},{"version":"38bdf7ccacfd8e418de3a7b1e3cecc29b5625f90abc2fa4ac7843a290f3bf555","impliedFormat":99},{"version":"9819e46a914735211fbc04b8dc6ba65152c62e3a329ca0601a46ba6e05b2c897","impliedFormat":99},{"version":"50f0dc9a42931fb5d65cdd64ba0f7b378aedd36e0cfca988aa4109aad5e714cb","impliedFormat":99},{"version":"894f23066f9fafccc6e2dd006ed5bd85f3b913de90f17cf1fe15a2eb677fd603","impliedFormat":99},{"version":"abdf39173867e6c2d6045f120a316de451bbb6351a6929546b8470ddf2e4b3b9","impliedFormat":99},{"version":"aa2cb4053f948fbd606228195bbe44d78733861b6f7204558bbee603202ee440","impliedFormat":99},{"version":"6911b41bfe9942ac59c2da1bbcbe5c3c1f4e510bf65cae89ed00f434cc588860","impliedFormat":99},{"version":"7b81bc4d4e2c764e85d869a8dd9fe3652b34b45c065482ac94ffaacc642b2507","impliedFormat":99},{"version":"895df4edb46ccdcbce2ec982f5eed292cf7ea3f7168f1efea738ee346feab273","impliedFormat":99},{"version":"8692bb1a4799eda7b2e3288a6646519d4cebb9a0bddf800085fc1bd8076997a0","impliedFormat":99},{"version":"239c9e98547fe99711b01a0293f8a1a776fc10330094aa261f3970aaba957c82","impliedFormat":99},{"version":"34833ec50360a32efdc12780ae624e9a710dd1fd7013b58c540abf856b54285a","impliedFormat":99},{"version":"647538e4007dcc351a8882067310a0835b5bb8559d1cfa5f378e929bceb2e64d","impliedFormat":99},{"version":"992d6b1abcc9b6092e5a574d51d441238566b6461ade5de53cb9718e4f27da46","impliedFormat":99},{"version":"938702305649bf1050bd79f3803cf5cc2904596fc1edd4e3b91033184eae5c54","impliedFormat":99},{"version":"1e931d3c367d4b96fe043e792196d9c2cf74f672ff9c0b894be54e000280a79d","impliedFormat":99},{"version":"05bec322ea9f6eb9efcd6458bb47087e55bd688afdd232b78379eb5d526816ed","impliedFormat":99},{"version":"4c449a874c2d2e5e5bc508e6aa98f3140218e78c585597a21a508a647acd780a","impliedFormat":99},{"version":"dae15e326140a633d7693e92b1af63274f7295ea94fb7c322d5cbe3f5e48be88","impliedFormat":99},{"version":"c2b0a869713bca307e58d81d1d1f4b99ebfc7ec8b8f17e80dde40739aa8a2bc6","impliedFormat":99},{"version":"6e4b4ff6c7c54fa9c6022e88f2f3e675eac3c6923143eb8b9139150f09074049","impliedFormat":99},{"version":"69559172a9a97bbe34a32bff8c24ef1d8c8063feb5f16a6d3407833b7ee504cf","impliedFormat":99},{"version":"86b94a2a3edcb78d9bfcdb3b382547d47cb017e71abe770c9ee8721e9c84857f","impliedFormat":99},{"version":"e3fafafda82853c45c0afc075fea1eaf0df373a06daf6e6c7f382f9f61b2deb3","impliedFormat":99},{"version":"a4ba4b31de9e9140bc49c0addddbfaf96b943a7956a46d45f894822e12bf5560","impliedFormat":99},{"version":"d8a7926fc75f2ed887f17bae732ee31a4064b8a95a406c87e430c58578ee1f67","impliedFormat":99},{"version":"9886ffbb134b0a0059fd82219eba2a75f8af341d98bc6331b6ef8a921e10ec68","impliedFormat":99},{"version":"c2ead057b70d0ae7b87a771461a6222ebdb187ba6f300c974768b0ae5966d10e","impliedFormat":99},{"version":"46687d985aed8485ab2c71085f82fafb11e69e82e8552cf5d3849c00e64a00a5","impliedFormat":99},{"version":"999ca66d4b5e2790b656e0a7ce42267737577fc7a52b891e97644ec418eff7ec","impliedFormat":99},{"version":"ec948ee7e92d0888f92d4a490fdd0afb27fbf6d7aabebe2347a3e8ac82c36db9","impliedFormat":99},{"version":"03ef2386c683707ce741a1c30cb126e8c51a908aa0acc01c3471fafb9baaacd5","impliedFormat":99},{"version":"66a372e03c41d2d5e920df5282dadcec2acae4c629cb51cab850825d2a144cea","impliedFormat":99},{"version":"ddf9b157bd4c06c2e4646c9f034f36267a0fbd028bd4738214709de7ea7c548b","impliedFormat":99},{"version":"3e795aac9be23d4ad9781c00b153e7603be580602e40e5228e2dafe8a8e3aba1","impliedFormat":99},{"version":"98c461ec5953dfb1b5d5bca5fee0833c8a932383b9e651ca6548e55f1e2c71c3","impliedFormat":99},{"version":"5c42107b46cb1d36b6f1dee268df125e930b81f9b47b5fa0b7a5f2a42d556c10","impliedFormat":99},{"version":"7e32f1251d1e986e9dd98b6ff25f62c06445301b94aeebdf1f4296dbd2b8652f","impliedFormat":99},{"version":"2f7e328dda700dcb2b72db0f58c652ae926913de27391bd11505fc5e9aae6c33","impliedFormat":99},{"version":"3de7190e4d37da0c316db53a8a60096dbcd06d1a50677ccf11d182fa26882080","impliedFormat":99},{"version":"a9d6f87e59b32b02c861aade3f4477d7277c30d43939462b93f48644fa548c58","impliedFormat":99},{"version":"2bce8fd2d16a9432110bbe0ba1e663fd02f7d8b8968cd10178ea7bc306c4a5df","impliedFormat":99},{"version":"798bedbf45a8f1e55594e6879cd46023e8767757ecce1d3feaa78d16ad728703","impliedFormat":99},{"version":"62723d5ac66f7ed6885a3931dd5cfa017797e73000d590492988a944832e8bc2","impliedFormat":99},{"version":"03db8e7df7514bf17fc729c87fff56ca99567b9aa50821f544587a666537c233","impliedFormat":99},{"version":"9b1f311ba4409968b68bf20b5d892dbd3c5b1d65c673d5841c7dbde351bc0d0b","impliedFormat":99},{"version":"2d1e8b5431502739fe335ceec0aaded030b0f918e758a5d76f61effa0965b189","impliedFormat":99},{"version":"e725839b8f884dab141b42e9d7ff5659212f6e1d7b4054caa23bc719a4629071","impliedFormat":99},{"version":"4fa38a0b8ae02507f966675d0a7d230ed67c92ab8b5736d99a16c5fbe2b42036","impliedFormat":99},{"version":"50ec1e8c23bad160ddedf8debeebc722becbddda127b8fdce06c23eacd3fe689","impliedFormat":99},{"version":"9a0aea3a113064fd607f41375ade308c035911d3c8af5ae9db89593b5ca9f1f9","impliedFormat":99},{"version":"8d643903b58a0bf739ce4e6a8b0e5fb3fbdfaacbae50581b90803934b27d5b89","impliedFormat":99},{"version":"19de2915ccebc0a1482c2337b34cb178d446def2493bf775c4018a4ea355adb8","impliedFormat":99},{"version":"9be8fc03c8b5392cd17d40fd61063d73f08d0ee3457ecf075dcb3768ae1427bd","impliedFormat":99},{"version":"a2d89a8dc5a993514ca79585039eea083a56822b1d9b9d9d85b14232e4782cbe","impliedFormat":99},{"version":"f526f20cae73f17e8f38905de4c3765287575c9c4d9ecacee41cfda8c887da5b","impliedFormat":99},{"version":"d9ec0978b7023612b9b83a71fee8972e290d02f8ff894e95cdd732cd0213b070","impliedFormat":99},{"version":"7ab10c473a058ec8ac4790b05cae6f3a86c56be9b0c0a897771d428a2a48a9f9","impliedFormat":99},{"version":"451d7a93f8249d2e1453b495b13805e58f47784ef2131061821b0e456a9fd0e1","impliedFormat":99},{"version":"21c56fe515d227ed4943f275a8b242d884046001722a4ba81f342a08dbe74ae2","impliedFormat":99},{"version":"d8311f0c39381aa1825081c921efde36e618c5cf46258c351633342a11601208","impliedFormat":99},{"version":"6b50c3bcc92dc417047740810596fcb2df2502aa3f280c9e7827e87896da168a","impliedFormat":99},{"version":"18a6b318d1e7b31e5749a52be0cf9bbce1b275f63190ef32e2c79db0579328ca","impliedFormat":99},{"version":"6a2d0af2c27b993aa85414f3759898502aa198301bc58b0d410948fe908b07b0","impliedFormat":99},{"version":"2da11b6f5c374300e5e66a6b01c3c78ec21b5d3fec0748a28cc28e00be73e006","impliedFormat":99},{"version":"0729691b39c24d222f0b854776b00530877217bfc30aac1dc7fa2f4b1795c536","impliedFormat":99},{"version":"ca45bb5c98c474d669f0e47615e4a5ae65d90a2e78531fda7862ee43e687a059","impliedFormat":99},{"version":"c1c058b91d5b9a24c95a51aea814b0ad4185f411c38ac1d5eef0bf3cebec17dc","impliedFormat":99},{"version":"3ab0ed4060b8e5b5e594138aab3e7f0262d68ad671d6678bcda51568d4fc4ccc","impliedFormat":99},{"version":"e2bf1faba4ff10a6020c41df276411f641d3fdce5c6bae1db0ec84a0bf042106","impliedFormat":99},{"version":"80b0a8fe14d47a71e23d7c3d4dcee9584d4282ef1d843b70cab1a42a4ea1588c","impliedFormat":99},{"version":"a0f02a73f6e3de48168d14abe33bf5970fdacdb52d7c574e908e75ad571e78f7","impliedFormat":99},{"version":"c728002a759d8ec6bccb10eed56184e86aeff0a762c1555b62b5d0fa9d1f7d64","impliedFormat":99},{"version":"586f94e07a295f3d02f847f9e0e47dbf14c16e04ccc172b011b3f4774a28aaea","impliedFormat":99},{"version":"cfe1a0f4ed2df36a2c65ea6bc235dbb8cf6e6c25feb6629989f1fa51210b32e7","impliedFormat":99},{"version":"8ba69c9bf6de79c177329451ffde48ddab7ec495410b86972ded226552f664df","impliedFormat":99},{"version":"15111cbe020f8802ad1d150524f974a5251f53d2fe10eb55675f9df1e82dbb62","impliedFormat":99},{"version":"782dc153c56a99c9ed07b2f6f497d8ad2747764966876dbfef32f3e27ce11421","impliedFormat":99},{"version":"cc2db30c3d8bb7feb53a9c9ff9b0b859dd5e04c83d678680930b5594b2bf99cb","impliedFormat":99},{"version":"46909b8c85a6fd52e0807d18045da0991e3bdc7373435794a6ba425bc23cc6be","impliedFormat":99},{"version":"e4e511ff63bb6bd69a2a51e472c6044298bca2c27835a34a20827bc3ef9b7d13","impliedFormat":99},{"version":"2c86f279d7db3c024de0f21cd9c8c2c972972f842357016bfbbd86955723b223","impliedFormat":99},{"version":"112c895cff9554cf754f928477c7d58a21191c8089bffbf6905c87fe2dc6054f","impliedFormat":99},{"version":"8cfc293b33082003cacbf7856b8b5e2d6dd3bde46abbd575b0c935dc83af4844","impliedFormat":99},{"version":"d2c5c53f85ce0474b3a876d76c4fc44ff7bb766b14ed1bf495f9abac181d7f5f","impliedFormat":99},{"version":"3c523f27926905fcbe20b8301a0cc2da317f3f9aea2273f8fc8d9ae88b524819","impliedFormat":99},{"version":"9ca0d706f6b039cc52552323aeccb4db72e600b67ddc7a54cebc095fc6f35539","impliedFormat":99},{"version":"a64909a9f75081342ddd061f8c6b49decf0d28051bc78e698d347bdcb9746577","impliedFormat":99},{"version":"7d8d55ae58766d0d52033eae73084c4db6a93c4630a3e17f419dd8a0b2a4dcd8","impliedFormat":99},{"version":"b8b5c8ba972d9ffff313b3c8a3321e7c14523fc58173862187e8d1cb814168ac","impliedFormat":99},{"version":"9c42c0fa76ee36cf9cc7cc34b1389fbb4bd49033ec124b93674ec635fabf7ffe","impliedFormat":99},{"version":"6184c8da9d8107e3e67c0b99dedb5d2dfe5ccf6dfea55c2a71d4037caf8ca196","impliedFormat":99},{"version":"4030ceea7bf41449c1b86478b786e3b7eadd13dfe5a4f8f5fe2eb359260e08b3","impliedFormat":99},{"version":"7bf516ec5dfc60e97a5bde32a6b73d772bd9de24a2e0ec91d83138d39ac83d04","impliedFormat":99},{"version":"e6a6fb3e6525f84edf42ba92e261240d4efead3093aca3d6eb1799d5942ba393","impliedFormat":99},{"version":"45df74648934f97d26800262e9b2af2f77ef7191d4a5c2eb1df0062f55e77891","impliedFormat":99},{"version":"3fe361e4e567f32a53af1f2c67ad62d958e3d264e974b0a8763d174102fe3b29","impliedFormat":99},{"version":"28b520acee4bc6911bfe458d1ad3ebc455fa23678463f59946ad97a327c9ab2b","impliedFormat":99},{"version":"121b39b1a9ad5d23ed1076b0db2fe326025150ef476dccb8bf87778fcc4f6dd7","impliedFormat":99},{"version":"f791f92a060b52aa043dde44eb60307938f18d4c7ac13df1b52c82a1e658953f","impliedFormat":99},{"version":"df09443e7743fd6adc7eb108e760084bacdf5914403b7aac5fbd4dc4e24e0c2c","impliedFormat":99},{"version":"eeb4ff4aa06956083eaa2aad59070361c20254b865d986bc997ee345dbd44cbb","impliedFormat":99},{"version":"ed84d5043444d51e1e5908f664addc4472c227b9da8401f13daa565f23624b6e","impliedFormat":99},{"version":"146bf888b703d8baa825f3f2fb1b7b31bda5dff803e15973d9636cdda33f4af3","impliedFormat":99},{"version":"b4ec8b7a8d23bdf7e1c31e43e5beac3209deb7571d2ccf2a9572865bf242da7c","impliedFormat":99},{"version":"3fba0d61d172091638e56fba651aa1f8a8500aac02147d29bd5a9cc0bc8f9ec2","impliedFormat":99},{"version":"a5a57deb0351b03041e0a1448d3a0cc5558c48e0ed9b79b69c99163cdca64ad8","impliedFormat":99},{"version":"9bcecf0cbc2bfc17e33199864c19549905309a0f9ecc37871146107aac6e05ae","impliedFormat":99},{"version":"d6a211db4b4a821e93c978add57e484f2a003142a6aef9dbfa1fe990c66f337b","impliedFormat":99},{"version":"bd4d10bd44ce3f630dd9ce44f102422cb2814ead5711955aa537a52c8d2cae14","impliedFormat":99},{"version":"08e4c39ab1e52eea1e528ee597170480405716bae92ebe7a7c529f490afff1e0","impliedFormat":99},{"version":"625bb2bc3867557ea7912bd4581288a9fca4f3423b8dffa1d9ed57fafc8610e3","impliedFormat":99},{"version":"d1992164ecc334257e0bef56b1fd7e3e1cea649c70c64ffc39999bb480c0ecdf","impliedFormat":99},{"version":"a53ff2c4037481eb357e33b85e0d78e8236e285b6428b93aa286ceea1db2f5dc","impliedFormat":99},{"version":"4fe608d524954b6857d78857efce623852fcb0c155f010710656f9db86e973a5","impliedFormat":99},{"version":"b53b62a9838d3f57b70cc456093662302abb9962e5555f5def046172a4fe0d4e","impliedFormat":99},{"version":"9866369eb72b6e77be2a92589c9df9be1232a1a66e96736170819e8a1297b61f","impliedFormat":99},{"version":"43abfbdf4e297868d780b8f4cfdd8b781b90ecd9f588b05e845192146a86df34","impliedFormat":99},{"version":"582419791241fb851403ae4a08d0712a63d4c94787524a7419c2bc8e0eb1b031","impliedFormat":99},{"version":"18437eeb932fe48590b15f404090db0ab3b32d58f831d5ffc157f63b04885ee5","impliedFormat":99},{"version":"0c5eaedf622d7a8150f5c2ec1f79ac3d51eea1966b0b3e61bfdea35e8ca213a7","impliedFormat":99},{"version":"fac39fc7a9367c0246de3543a6ee866a0cf2e4c3a8f64641461c9f2dac0d8aae","impliedFormat":99},{"version":"3b9f559d0200134f3c196168630997caedeadc6733523c8b6076a09615d5dec8","impliedFormat":99},{"version":"932af64286d9723da5ef7b77a0c4229829ce8e085e6bcc5f874cb0b83e8310d4","impliedFormat":99},{"version":"adeb9278f11f5561157feee565171c72fd48f5fe34ed06f71abf24e561fcaa1e","impliedFormat":99},{"version":"2269fef79b4900fc6b08c840260622ca33524771ff24fda5b9101ad98ea551f3","impliedFormat":99},{"version":"73d47498a1b73d5392d40fb42a3e7b009ae900c8423f4088c4faa663cc508886","impliedFormat":99},{"version":"7efc34cdc4da0968c3ba687bc780d5cacde561915577d8d1c1e46c7ac931d023","impliedFormat":99},{"version":"3c20a3bb0c50c819419f44aa55acc58476dad4754a16884cef06012d02b0722f","impliedFormat":99},{"version":"4569abf6bc7d51a455503670f3f1c0e9b4f8632a3b030e0794c61bfbba2d13be","impliedFormat":99},{"version":"98b2297b4dc1404078a54b61758d8643e4c1d7830af724f3ed2445d77a7a2d57","impliedFormat":99},{"version":"952ba89d75f1b589e07070fea2d8174332e3028752e76fd46e1c16cc51e6e2af","impliedFormat":99},{"version":"b6c9a2deefb6a57ff68d2a38d33c34407b9939487fc9ee9f32ba3ecf2987a88a","impliedFormat":99},{"version":"f6b371377bab3018dac2bca63e27502ecbd5d06f708ad7e312658d3b5315d948","impliedFormat":99},{"version":"31947dd8f1c8eeb7841e1f139a493a73bd520f90e59a6415375d0d8e6a031f01","impliedFormat":99},{"version":"95cd83b807e10b1af408e62caf5fea98562221e8ddca9d7ccc053d482283ddda","impliedFormat":99},{"version":"19287d6b76288c2814f1633bdd68d2b76748757ffd355e73e41151644e4773d6","impliedFormat":99},{"version":"fc4e6ec7dade5f9d422b153c5d8f6ad074bd9cc4e280415b7dc58fb5c52b5df1","impliedFormat":99},{"version":"3aea973106e1184db82d8880f0ca134388b6cbc420f7309d1c8947b842886349","impliedFormat":99},{"version":"765e278c464923da94dda7c2b281ece92f58981642421ae097862effe2bd30fa","impliedFormat":99},{"version":"de260bed7f7d25593f59e859bd7c7f8c6e6bb87e8686a0fcafa3774cb5ca02d8","impliedFormat":99},{"version":"b5c341ce978f5777fbe05bc86f65e9906a492fa6b327bda3c6aae900c22e76c6","impliedFormat":99},{"version":"686ddbfaf88f06b02c6324005042f85317187866ca0f8f4c9584dd9479653344","impliedFormat":99},{"version":"7f789c0c1db29dd3aab6e159d1ba82894a046bf8df595ac48385931ae6ad83e0","impliedFormat":99},{"version":"8eb3057d4fe9b59b2492921b73a795a2455ebe94ccb3d01027a7866612ead137","impliedFormat":99},{"version":"1e43c5d7aee1c5ec20611e28b5417f5840c75d048de9d7f1800d6808499236f8","impliedFormat":99},{"version":"d42610a5a2bee4b71769968a24878885c9910cd049569daa2d2ee94208b3a7a5","impliedFormat":99},{"version":"f6ed95506a6ed2d40ed5425747529befaa4c35fcbbc1e0d793813f6d725690fa","impliedFormat":99},{"version":"a6fcc1cd6583939506c906dff1276e7ebdc38fbe12d3e108ba38ad231bd18d97","impliedFormat":99},{"version":"ed13354f0d96fb6d5878655b1fead51722b54875e91d5e53ef16de5b71a0e278","impliedFormat":99},{"version":"1193b4872c1fb65769d8b164ca48124c7ebacc33eae03abf52087c2b29e8c46c","impliedFormat":99},{"version":"af682dfabe85688289b420d939020a10eb61f0120e393d53c127f1968b3e9f66","impliedFormat":99},{"version":"0dca04006bf13f72240c6a6a502df9c0b49c41c3cab2be75e81e9b592dcd4ea8","impliedFormat":99},{"version":"79d6ac4a2a229047259116688f9cd62fda25422dee3ad304f77d7e9af53a41ef","impliedFormat":99},{"version":"64534c17173990dc4c3d9388d16675a059aac407031cfce8f7fdffa4ee2de988","impliedFormat":99},{"version":"ba46d160a192639f3ca9e5b640b870b1263f24ac77b6895ab42960937b42dcbb","impliedFormat":99},{"version":"5e5ddd6fc5b590190dde881974ab969455e7fad61012e32423415ae3d085b037","impliedFormat":99},{"version":"1c16fd00c42b60b96fe0fa62113a953af58ddf0d93b0a49cb4919cf5644616f0","impliedFormat":99},{"version":"eb240c0e6b412c57f7d9a9f1c6cd933642a929837c807b179a818f6e8d3a4e44","impliedFormat":99},{"version":"4a7bde5a1155107fc7d9483b8830099f1a6072b6afda5b78d91eb5d6549b3956","impliedFormat":99},{"version":"3c1baaffa9a24cc7ef9eea6b64742394498e0616b127ca630aca0e11e3298006","impliedFormat":99},{"version":"87ca1c31a326c898fa3feb99ec10750d775e1c84dbb7c4b37252bcf3742c7b21","impliedFormat":99},{"version":"d7bd26af1f5457f037225602035c2d7e876b80d02663ab4ca644099ad3a55888","impliedFormat":99},{"version":"2ad0a6b93e84a56b64f92f36a07de7ebcb910822f9a72ad22df5f5d642aff6f3","impliedFormat":99},{"version":"523d1775135260f53f672264937ee0f3dc42a92a39de8bee6c48c7ea60b50b5a","impliedFormat":99},{"version":"e441b9eebbc1284e5d995d99b53ed520b76a87cab512286651c4612d86cd408e","impliedFormat":99},{"version":"76f853ee21425c339a79d28e0859d74f2e53dee2e4919edafff6883dd7b7a80f","impliedFormat":99},{"version":"00cf042cd6ba1915648c8d6d2aa00e63bbbc300ea54d28ed087185f0f662e080","impliedFormat":99},{"version":"f57e6707d035ab89a03797d34faef37deefd3dd90aa17d90de2f33dce46a2c56","impliedFormat":99},{"version":"cc8b559b2cf9380ca72922c64576a43f000275c72042b2af2415ce0fb88d7077","impliedFormat":99},{"version":"1a337ca294c428ba8f2eb01e887b28d080ee4a4307ae87e02e468b1d26af4a74","impliedFormat":99},{"version":"5a15362fc2e72765a908c0d4dd89e3ab3b763e8bc8c23f19234a709ecfd202fe","impliedFormat":99},{"version":"2dffdfe62ac8af0943853234519616db6fd8958fc7ff631149fd8364e663f361","impliedFormat":99},{"version":"5dbdb2b2229b5547d8177c34705272da5a10b8d0033c49efbc9f6efba5e617f2","impliedFormat":99},{"version":"6fc0498cd8823d139004baff830343c9a0d210c687b2402c1384fb40f0aa461c","impliedFormat":99},{"version":"8492306a4864a1dc6fc7e0cc0de0ae9279cbd37f3aae3e9dc1065afcdc83dddc","impliedFormat":99},{"version":"c011b378127497d6337a93f020a05f726db2c30d55dc56d20e6a5090f05919a6","impliedFormat":99},{"version":"f4556979e95a274687ae206bbab2bb9a71c3ad923b92df241d9ab88c184b3f40","impliedFormat":99},{"version":"50e82bb6e238db008b5beba16d733b77e8b2a933c9152d1019cf8096845171a4","impliedFormat":99},{"version":"d6011f8b8bbf5163ef1e73588e64a53e8bf1f13533c375ec53e631aad95f1375","impliedFormat":99},{"version":"693cd7936ac7acfa026d4bcb5801fce71cec49835ba45c67af1ef90dbfd30af7","impliedFormat":99},{"version":"195e2cf684ecddfc1f6420564535d7c469f9611ce7a380d6e191811f84556cd2","impliedFormat":99},{"version":"1dc6b6e7b2a7f2962f31c77f4713f3a5a132bbe14c00db75d557568fe82e4311","impliedFormat":99},{"version":"add93b1180e9aaac2dae4ef3b16f7655893e2ecbe62bd9e48366c305f0063d89","impliedFormat":99},{"version":"594bd896fe37c970aafb7a376ebeec4c0d636b62a5f611e2e27d30fb839ad8a5","impliedFormat":99},{"version":"b1c6a6faf60542ba4b4271db045d7faea56e143b326ef507d2797815250f3afc","impliedFormat":99},{"version":"8c8b165beb794260f462679329b131419e9f5f35212de11c4d53e6d4d9cbedf6","impliedFormat":99},{"version":"ee5a4cf57d49fcf977249ab73c690a59995997c4672bb73fcaaf2eed65dbd1b2","impliedFormat":99},{"version":"f9f36051f138ab1c40b76b230c2a12b3ce6e1271179f4508da06a959f8bee4c1","impliedFormat":99},{"version":"9dc2011a3573d271a45c12656326530c0930f92539accbec3531d65131a14a14","impliedFormat":99},{"version":"091521ce3ede6747f784ae6f68ad2ea86bbda76b59d2bf678bcad2f9d141f629","impliedFormat":99},{"version":"202c2be951f53bafe943fb2c8d1245e35ed0e4dfed89f48c9a948e4d186dd6d4","impliedFormat":99},{"version":"c618aead1d799dbf4f5b28df5a6b9ce13d72722000a0ec3fe90a8115b1ea9226","impliedFormat":99},{"version":"9b0bf59708549c3e77fddd36530b95b55419414f88bbe5893f7bc8b534617973","impliedFormat":99},{"version":"7e216f67c4886f1bde564fb4eebdd6b185f262fe85ad1d6128cad9b229b10354","impliedFormat":99},{"version":"cd51e60b96b4d43698df74a665aa7a16604488193de86aa60ec0c44d9f114951","impliedFormat":99},{"version":"b63341fb6c7ba6f2aeabd9fc46b43e6cc2d2b9eec06534cfd583d9709f310ec2","impliedFormat":99},{"version":"be2af50c81b15bcfe54ad60f53eb1c72dae681c72d0a9dce1967825e1b5830a3","impliedFormat":99},{"version":"be5366845dfb9726f05005331b9b9645f237f1ddc594c0def851208e8b7d297b","impliedFormat":99},{"version":"5ddd536aaeadd4bf0f020492b3788ed209a7050ce27abec4e01c7563ff65da81","impliedFormat":99},{"version":"e243b24da119c1ef0d79af2a45217e50682b139cb48e7607efd66cc01bd9dcda","impliedFormat":99},{"version":"5b1398c8257fd180d0bf62e999fe0a89751c641e87089a83b24392efda720476","impliedFormat":99},{"version":"1588b1359f8507a16dbef67cd2759965fc2e8d305e5b3eb71be5aa9506277dff","impliedFormat":99},{"version":"4c99f2524eee1ec81356e2b4f67047a4b7efaf145f1c4eb530cd358c36784423","impliedFormat":99},{"version":"b30c6b9f6f30c35d6ef84daed1c3781e367f4360171b90598c02468b0db2fc3d","impliedFormat":99},{"version":"79c0d32274ccfd45fae74ac61d17a2be27aea74c70806d22c43fc625b7e9f12a","impliedFormat":99},{"version":"1b7e3958f668063c9d24ac75279f3e610755b0f49b1c02bb3b1c232deb958f54","impliedFormat":99},{"version":"779d4022c3d0a4df070f94858a33d9ebf54af3664754536c4ce9fd37c6f4a8db","impliedFormat":99},{"version":"e662f063d46aa8c088edffdf1d96cb13d9a2cbf06bc38dc6fc62b4d125fb7b49","impliedFormat":99},{"version":"d1d612df1e41c90d9678b07740d13d4f8e6acec2f17390d4ff4be5c889a6d37d","impliedFormat":99},{"version":"c95933fe140918892d569186f17b70ef6b1162f851a0f13f6a89e8f4d599c5a1","impliedFormat":99},{"version":"1d8d30677f87c13c2786980a80750ac1e281bdb65aa013ea193766fe9f0edd74","impliedFormat":99},{"version":"4661673cbc984b8a6ee5e14875a71ed529b64e7f8e347e12c0db4cecc25ad67d","impliedFormat":99},{"version":"7f980a414274f0f23658baa9a16e21d828535f9eac538e2eab2bb965325841db","impliedFormat":99},{"version":"20fb747a339d3c1d4a032a31881d0c65695f8167575e01f222df98791a65da9b","impliedFormat":99},{"version":"dd4e7ebd3f205a11becf1157422f98db675a626243d2fbd123b8b93efe5fb505","impliedFormat":99},{"version":"43ec6b74c8d31e88bb6947bb256ad78e5c6c435cbbbad991c3ff39315b1a3dba","impliedFormat":99},{"version":"b27242dd3af2a5548d0c7231db7da63d6373636d6c4e72d9b616adaa2acef7e1","impliedFormat":99},{"version":"e0ee7ba0571b83c53a3d6ec761cf391e7128d8f8f590f8832c28661b73c21b68","impliedFormat":99},{"version":"072bfd97fc61c894ef260723f43a416d49ebd8b703696f647c8322671c598873","impliedFormat":99},{"version":"e70875232f5d5528f1650dd6f5c94a5bed344ecf04bdbb998f7f78a3c1317d02","impliedFormat":99},{"version":"8e495129cb6cd8008de6f4ff8ce34fe1302a9e0dcff8d13714bd5593be3f7898","impliedFormat":99},{"version":"0345bc0b1067588c4ea4c48e34425d3284498c629bc6788ebc481c59949c9037","impliedFormat":99},{"version":"e30f5b5d77c891bc16bd65a2e46cd5384ea57ab3d216c377f482f535db48fc8f","impliedFormat":99},{"version":"f113afe92ee919df8fc29bca91cab6b2ffbdd12e4ac441d2bb56121eb5e7dbe3","impliedFormat":99},{"version":"49d567cc002efb337f437675717c04f207033f7067825b42bb59c9c269313d83","impliedFormat":99},{"version":"1d248f707d02dc76555298a934fba0f337f5028bb1163ce59cd7afb831c9070f","impliedFormat":99},{"version":"5d8debffc9e7b842dc0f17b111673fe0fc0cca65e67655a2b543db2150743385","impliedFormat":99},{"version":"5fccbedc3eb3b23bc6a3a1e44ceb110a1f1a70fa8e76941dce3ae25752caa7a9","impliedFormat":99},{"version":"f4031b95f3bab2b40e1616bd973880fb2f1a97c730bac5491d28d6484fac9560","impliedFormat":99},{"version":"dbe75b3c5ed547812656e7945628f023c4cd0bc1879db0db3f43a57fb8ec0e2b","impliedFormat":99},{"version":"b754718a546a1939399a6d2a99f9022d8a515f2db646bab09f7d2b5bff3cbb82","impliedFormat":99},{"version":"2eef10fb18ed0b4be450accf7a6d5bcce7b7f98e02cac4e6e793b7ad04fc0d79","impliedFormat":99},{"version":"c46f471e172c3be12c0d85d24876fedcc0c334b0dab48060cdb1f0f605f09fed","impliedFormat":99},{"version":"7d6ddeead1d208588586c58c26e4a23f0a826b7a143fb93de62ed094d0056a33","impliedFormat":99},{"version":"7c5782291ff6e7f2a3593295681b9a411c126e3736b83b37848032834832e6b9","impliedFormat":99},{"version":"3a3f09df6258a657dd909d06d4067ee360cd2dccc5f5d41533ae397944a11828","impliedFormat":99},{"version":"ea54615be964503fec7bce04336111a6fa455d3e8d93d44da37b02c863b93eb8","impliedFormat":99},{"version":"2a83694bc3541791b64b0e57766228ea23d92834df5bf0b0fcb93c5bb418069c","impliedFormat":99},{"version":"b5913641d6830e7de0c02366c08b1d26063b5758132d8464c938e78a45355979","impliedFormat":99},{"version":"46c095d39c1887979d9494a824eda7857ec13fb5c20a6d4f7d02c2975309bf45","impliedFormat":99},{"version":"f6e02ca076dc8e624aa38038e3488ebd0091e2faea419082ed764187ba8a6500","impliedFormat":99},{"version":"4d49e8a78aba1d4e0ad32289bf8727ae53bc2def9285dff56151a91e7d770c3e","impliedFormat":99},{"version":"63315cf08117cc728eab8f3eec8801a91d2cd86f91d0ae895d7fd928ab54596d","impliedFormat":99},{"version":"a14a6f3a5636bcaebfe9ec2ccfa9b07dc94deb1f6c30358e9d8ea800a1190d5e","impliedFormat":99},{"version":"21206e7e81876dabf2a7af7aa403f343af1c205bdcf7eff24d9d7f4eee6214c4","impliedFormat":99},{"version":"cd0a9f0ffec2486cad86b7ef1e4da42953ffeb0eb9f79f536e16ff933ec28698","impliedFormat":99},{"version":"f609a6ec6f1ab04dba769e14d6b55411262fd4627a099e333aa8876ea125b822","impliedFormat":99},{"version":"6d8052bb814be030c64cb22ca0e041fe036ad3fc8d66208170f4e90d0167d354","impliedFormat":99},{"version":"851f72a5d3e8a2bf7eeb84a3544da82628f74515c92bdf23c4a40af26dcc1d16","impliedFormat":99},{"version":"59692a7938aab65ea812a8339bbc63c160d64097fe5a457906ea734d6f36bcd4","impliedFormat":99},{"version":"8cb3b95e610c44a9986a7eab94d7b8f8462e5de457d5d10a0b9c6dd16bde563b","impliedFormat":99},{"version":"f571713abd9a676da6237fe1e624d2c6b88c0ca271c9f1acc1b4d8efeea60b66","impliedFormat":99},{"version":"16c5d3637d1517a3d17ed5ebcfbb0524f8a9997a7b60f6100f7c5309b3bb5ac8","impliedFormat":99},{"version":"ca1ec669726352c8e9d897f24899abf27ad15018a6b6bcf9168d5cd1242058ab","impliedFormat":99},{"version":"bffb1b39484facf6d0c5d5feefe6c0736d06b73540b9ce0cf0f12da2edfd8e1d","impliedFormat":99},{"version":"f1663c030754f6171b8bb429096c7d2743282de7733bccd6f67f84a4c588d96e","impliedFormat":99},{"version":"dd09693285e58504057413c3adc84943f52b07d2d2fd455917f50fa2a63c9d69","impliedFormat":99},{"version":"d94c94593d03d44a03810a85186ae6d61ebeb3a17a9b210a995d85f4b584f23d","impliedFormat":99},{"version":"c7c3bf625a8cb5a04b1c0a2fbe8066ecdbb1f383d574ca3ffdabe7571589a935","impliedFormat":99},{"version":"7a2f39a4467b819e873cd672c184f45f548511b18f6a408fe4e826136d0193bb","impliedFormat":99},{"version":"f8a0ae0d3d4993616196619da15da60a6ec5a7dfaf294fe877d274385eb07433","impliedFormat":99},{"version":"2cca80de38c80ef6c26deb4e403ca1ff4efbe3cf12451e26adae5e165421b58d","impliedFormat":99},{"version":"0070d3e17aa5ad697538bf865faaff94c41f064db9304b2b949eb8bcccb62d34","impliedFormat":99},{"version":"53df93f2db5b7eb8415e98242c1c60f6afcac2db44bce4a8830c8f21eee6b1dd","impliedFormat":99},{"version":"d67bf28dc9e6691d165357424c8729c5443290367344263146d99b2f02a72584","impliedFormat":99},{"version":"932557e93fbdf0c36cc29b9e35950f6875425b3ac917fa0d3c7c2a6b4f550078","impliedFormat":99},{"version":"e3dc7ec1597fb61de7959335fb7f8340c17bebf2feb1852ed8167a552d9a4a25","impliedFormat":99},{"version":"b64e15030511c5049542c2e0300f1fe096f926cf612662884f40227267f5cd9f","impliedFormat":99},{"version":"1932796f09c193783801972a05d8fb1bfef941bb46ac76fbe1abb0b3bfb674fa","impliedFormat":99},{"version":"d9575d5787311ee7d61ad503f5061ebcfaf76b531cfecce3dc12afb72bb2d105","impliedFormat":99},{"version":"5b41d96c9a4c2c2d83f1200949f795c3b6a4d2be432b357ad1ab687e0f0de07c","impliedFormat":99},{"version":"38ec829a548e869de4c5e51671245a909644c8fb8e7953259ebb028d36b4dd06","impliedFormat":99},{"version":"20c2c5e44d37dac953b516620b5dba60c9abd062235cdf2c3bfbf722d877a96b","impliedFormat":99},{"version":"875fe6f7103cf87c1b741a0895fda9240fed6353d5e7941c8c8cbfb686f072b4","impliedFormat":99},{"version":"c0ccccf8fbcf5d95f88ed151d0d8ce3015aa88cf98d4fd5e8f75e5f1534ee7ae","impliedFormat":99},{"version":"1b1f4aba21fd956269ced249b00b0e5bfdbd5ebd9e628a2877ab1a2cf493c919","impliedFormat":99},{"version":"939e3299952dff0869330e3324ba16efe42d2cf25456d7721d7f01a43c1b0b34","impliedFormat":99},{"version":"f0a9b52faec508ba22053dedfa4013a61c0425c8b96598cef3dea9e4a22637c6","impliedFormat":99},{"version":"d5b302f50db61181adc6e209af46ae1f27d7ef3d822de5ea808c9f44d7d219fd","impliedFormat":99},{"version":"19131632ba492c83e8eeadf91a481def0e0b39ffc3f155bc20a7f640e0570335","impliedFormat":99},{"version":"4581c03abea21396c3e1bb119e2fd785a4d91408756209cbeed0de7070f0ab5b","impliedFormat":99},{"version":"ebcd3b99e17329e9d542ef2ccdd64fddab7f39bc958ee99bbdb09056c02d6e64","impliedFormat":99},{"version":"4b148999deb1d95b8aedd1a810473a41d9794655af52b40e4894b51a8a4e6a6d","impliedFormat":99},{"version":"1781cc99a0f3b4f11668bb37cca7b8d71f136911e87269e032f15cf5baa339bf","impliedFormat":99},{"version":"33f1b7fa96117d690035a235b60ecd3cd979fb670f5f77b08206e4d8eb2eb521","impliedFormat":99},{"version":"01429b306b94ff0f1f5548ce5331344e4e0f5872b97a4776bd38fd2035ad4764","impliedFormat":99},{"version":"c1bc4f2136de7044943d784e7a18cb8411c558dbb7be4e4b4876d273cbd952af","impliedFormat":99},{"version":"5470f84a69b94643697f0d7ec2c8a54a4bea78838aaa9170189b9e0a6e75d2cf","impliedFormat":99},{"version":"36aaa44ee26b2508e9a6e93cd567e20ec700940b62595caf962249035e95b5e3","impliedFormat":99},{"version":"f8343562f283b7f701f86ad3732d0c7fd000c20fe5dc47fa4ed0073614202b4d","impliedFormat":99},{"version":"a53c572630a78cd99a25b529069c1e1370f8a5d8586d98e798875f9052ad7ad1","impliedFormat":99},{"version":"4ad3451d066711dde1430c544e30e123f39e23c744341b2dfd3859431c186c53","impliedFormat":99},{"version":"8069cbef9efa7445b2f09957ffbc27b5f8946fdbade4358fb68019e23df4c462","impliedFormat":99},{"version":"cd8b4e7ad04ba9d54eb5b28ac088315c07335b837ee6908765436a78d382b4c3","impliedFormat":99},{"version":"d533d8f8e5c80a30c51f0cbfe067b60b89b620f2321d3a581b5ba9ac8ffd7c3a","impliedFormat":99},{"version":"33f49f22fdda67e1ddbacdcba39e62924793937ea7f71f4948ed36e237555de3","impliedFormat":99},{"version":"710c31d7c30437e2b8795854d1aca43b540cb37cefd5900f09cfcd9e5b8540c4","impliedFormat":99},{"version":"b2c03a0e9628273bc26a1a58112c311ffbc7a0d39938f3878837ab14acf3bc41","impliedFormat":99},{"version":"a93beb0aa992c9b6408e355ea3f850c6f41e20328186a8e064173106375876c2","impliedFormat":99},{"version":"efdcba88fcd5421867898b5c0e8ea6331752492bd3547942dea96c7ebcb65194","impliedFormat":99},{"version":"a98e777e7a6c2c32336a017b011ba1419e327320c3556b9139413e48a8460b9a","impliedFormat":99},{"version":"ea44f7f8e1fe490516803c06636c1b33a6b82314366be1bd6ffa4ba89bc09f86","impliedFormat":99},{"version":"c25f22d78cc7f46226179c33bef0e4b29c54912bde47b62e5fdaf9312f22ffcb","impliedFormat":99},{"version":"d57579cfedc5a60fda79be303080e47dfe0c721185a5d95276523612228fcefc","impliedFormat":99},{"version":"a41630012afe0d4a9ff14707f96a7e26e1154266c008ddbd229e3f614e4d1cf7","impliedFormat":99},{"version":"298a858633dfa361bb8306bbd4cfd74f25ab7cc20631997dd9f57164bc2116d1","impliedFormat":99},{"version":"921782c45e09940feb232d8626a0b8edb881be2956520c42c44141d9b1ddb779","impliedFormat":99},{"version":"06117e4cc7399ce1c2b512aa070043464e0561f956bda39ef8971a2fcbcdbf2e","impliedFormat":99},{"version":"daccf332594b304566c7677c2732fed6e8d356da5faac8c5f09e38c2f607a4ab","impliedFormat":99},{"version":"4386051a0b6b072f35a2fc0695fecbe4a7a8a469a1d28c73be514548e95cd558","impliedFormat":99},{"version":"78e41de491fe25947a7fd8eeef7ebc8f1c28c1849a90705d6e33f34b1a083b90","impliedFormat":99},{"version":"3ccd198e0a693dd293ed22e527c8537c76b8fe188e1ebf20923589c7cfb2c270","impliedFormat":99},{"version":"2ebf2ee015d5c8008428493d4987e2af9815a76e4598025dd8c2f138edc1dcae","impliedFormat":99},{"version":"0dcc8f61382c9fcdafd48acc54b6ffda69ca4bb7e872f8ad12fb011672e8b20c","impliedFormat":99},{"version":"9db563287eb527ead0bcb9eb26fbec32f662f225869101af3cabcb6aee9259cf","impliedFormat":99},{"version":"068489bec523be43f12d8e4c5c337be4ff6a7efb4fe8658283673ae5aae14b85","impliedFormat":99},{"version":"838212d0dc5b97f7c5b5e29a89953de3906f72fce13c5ae3c5ade346f561d226","impliedFormat":99},{"version":"ddc78d29af824ad7587152ea523ed5d60f2bc0148d8741c5dacf9b5b44587b1b","impliedFormat":99},{"version":"019b522e3783e5519966927ceeb570eefcc64aba3f9545828a5fb4ae1fde53c6","impliedFormat":99},{"version":"b34623cc86497a5123de522afba770390009a56eebddba38d2aa5798b70b0a87","impliedFormat":99},{"version":"d2a8cbeb0c0caaf531342062b4b5c227118862879f6a25033e31fad00797b7eb","impliedFormat":99},{"version":"14891c20f15be1d0d42ecbbd63de1c56a4d745e3ea2b4c56775a4d5d36855630","impliedFormat":99},{"version":"e55a1f6b198a39e38a3cea3ffe916aab6fde7965c827db3b8a1cacf144a67cd9","impliedFormat":99},{"version":"f7910ccfe56131e99d52099d24f3585570dc9df9c85dd599a387b4499596dd4d","impliedFormat":99},{"version":"9409ac347c5779f339112000d7627f17ede6e39b0b6900679ce5454d3ad2e3c9","impliedFormat":99},{"version":"22dfe27b0aa1c669ce2891f5c89ece9be18074a867fe5dd8b8eb7c46be295ca1","impliedFormat":99},{"version":"684a5c26ce2bb7956ef6b21e7f2d1c584172cd120709e5764bc8b89bac1a10eb","impliedFormat":99},{"version":"93761e39ce9d3f8dd58c4327e615483f0713428fa1a230883eb812292d47bbe8","impliedFormat":99},{"version":"c66be51e3d121c163a4e140b6b520a92e1a6a8a8862d44337be682e6f5ec290a","impliedFormat":99},{"version":"66e486a9c9a86154dc9780f04325e61741f677713b7e78e515938bf54364fee2","impliedFormat":99},{"version":"d211bc80b6b6e98445df46fe9dd3091944825dd924986a1c15f9c66d7659c495","impliedFormat":99},{"version":"8dd2b72f5e9bf88939d066d965144d07518e180efec3e2b6d06ae5e725d84c7d","impliedFormat":99},{"version":"949cb88e315ab1a098c3aa4a8b02496a32b79c7ef6d189eee381b96471a7f609","impliedFormat":99},{"version":"bc43af2a5fa30a36be4a3ed195ff29ffb8067bf4925aa350ace9d9f18f380cc2","impliedFormat":99},{"version":"f280b47f4ad3a3a8d6c53dc31aee21a40da6977ec43ea890b7c86d672933335b","impliedFormat":99},{"version":"8428e71f6d1b63acf55ceb56244aad9cf07678cf9626166e4aded15e3d252f8a","impliedFormat":99},{"version":"11505212ab24aa0f06d719a09add4be866e26f0fc15e96a1a2a8522c0c6a73a8","impliedFormat":99},{"version":"8228186214a5d7da60bd1dd91387a725e19c6c31a7ed4e114cf68d5ce6629c52","impliedFormat":99},{"version":"c44bb0071cededc08236d57d1131c44339c1add98b029a95584dfe1462533575","impliedFormat":99},{"version":"7a4935af71877da3bbc53938af00e5d4f6d445ef850e1573a240447dcb137b5c","impliedFormat":99},{"version":"4e313033202712168ecc70a6d830964ad05c9c93f81d806d7a25d344f6352565","impliedFormat":99},{"version":"8a1fc69eaf8fc8d447e6f776fbfa0c1b12245d7f35f1dbfb18fbc2d941f5edd8","impliedFormat":99},{"version":"afb9b4c8bd38fb43d38a674de56e6f940698f91114fded0aa119de99c6cd049a","impliedFormat":99},{"version":"1d277860f19b8825d027947fca9928ee1f3bfaa0095e85a97dd7a681b0698dfc","impliedFormat":99},{"version":"6d32122bb1e7c0b38b6f126d166dff1f74c8020f8ba050248d182dcafc835d08","impliedFormat":99},{"version":"cfac5627d337b82d2fbeff5f0f638b48a370a8d72d653327529868a70c5bc0f8","impliedFormat":99},{"version":"8a826bc18afa4c5ed096ceb5d923e2791a5bae802219e588a999f535b1c80492","impliedFormat":99},{"version":"73e94021c55ab908a1b8c53792e03bf7e0d195fee223bdc5567791b2ccbfcdec","impliedFormat":99},{"version":"5f73eb47b37f3a957fe2ac6fe654648d60185908cab930fc01c31832a5cb4b10","impliedFormat":99},{"version":"cb6372a2460010a342ba39e06e1dcfd722e696c9d63b4a71577f9a3c72d09e0a","impliedFormat":99},{"version":"1e289698069f553f36bbf12ee0084c492245004a69409066faceb173d2304ec4","impliedFormat":99},{"version":"f1ca71145e5c3bba4d7f731db295d593c3353e9a618b40c4af0a4e9a814bb290","impliedFormat":99},{"version":"ac12a6010ff501e641f5a8334b8eaf521d0e0739a7e254451b6eea924c3035c7","impliedFormat":99},{"version":"97395d1e03af4928f3496cc3b118c0468b560765ab896ce811acb86f6b902b5c","impliedFormat":99},{"version":"7dcfbd6a9f1ce1ddf3050bd469aa680e5259973b4522694dc6291afe20a2ae28","impliedFormat":99},{"version":"6e545419ad200ae4614f8e14d32b7e67e039c26a872c0f93437b0713f54cde53","impliedFormat":99},{"version":"efc225581aae9bb47d421a1b9f278db0238bc617b257ce6447943e59a2d1621e","impliedFormat":99},{"version":"8833b88e26156b685bc6f3d6a014c2014a878ffbd240a01a8aee8a9091014e9c","impliedFormat":99},{"version":"7a2a42a1ac642a9c28646731bd77d9849cb1a05aa1b7a8e648f19ab7d72dd7dc","impliedFormat":99},{"version":"4d371c53067a3cc1a882ff16432b03291a016f4834875b77169a2d10bb1b023e","impliedFormat":99},{"version":"99b38f72e30976fd1946d7b4efe91aa227ecf0c9180e1dd6502c1d39f37445b4","impliedFormat":99},{"version":"df1bcf0b1c413e2945ce63a67a1c5a7b21dbbec156a97d55e9ea0eed90d2c604","impliedFormat":99},{"version":"6e2011a859fa435b1196da1720be944ed59c668bb42d2f2711b49a506b3e4e90","impliedFormat":99},{"version":"b4bfa90fac90c6e0d0185d2fe22f059fec67587cc34281f62294f9c4615a8082","impliedFormat":99},{"version":"036d363e409ebe316a6366aff5207380846f8f82e100c2e3db4af5fe0ad0c378","impliedFormat":99},{"version":"5ae6642588e4a72e5a62f6111cb750820034a7fbe56b5d8ec2bcb29df806ce52","impliedFormat":99},{"version":"6fca09e1abc83168caf36b751dec4ddda308b5714ec841c3ff0f3dc07b93c1b8","impliedFormat":99},{"version":"2f7268e6ac610c7122b6b416e34415ce42b51c56d080bef41786d2365f06772d","impliedFormat":99},{"version":"9a07957f75128ed0be5fc8a692a14da900878d5d5c21880f7c08f89688354aa4","impliedFormat":99},{"version":"8b6f3ae84eab35c50cf0f1b608c143fe95f1f765df6f753cd5855ae61b3efbe2","impliedFormat":99},{"version":"992491d83ff2d1e7f64a8b9117daee73724af13161f1b03171f0fa3ffe9b4e3e","impliedFormat":99},{"version":"12bcf6af851be8dd5f3e66c152bb77a83829a6a8ba8c5acc267e7b15e11aa9ab","impliedFormat":99},{"version":"e2704efc7423b077d7d9a21ddb42f640af1565e668d5ec85f0c08550eff8b833","impliedFormat":99},{"version":"e0513c71fd562f859a98940633830a7e5bcd7316b990310e8bb68b1d41d676a3","impliedFormat":99},{"version":"712071b9066a2d8f4e11c3b8b3d5ada6253f211a90f06c6e131cff413312e26d","impliedFormat":99},{"version":"5a187a7bc1e7514ef1c3d6eaafa470fc45541674d8fca0f9898238728d62666a","impliedFormat":99},{"version":"0c06897f7ab3830cef0701e0e083b2c684ed783ae820b306aedd501f32e9562d","impliedFormat":99},{"version":"56cc6eae48fd08fa709cf9163d01649f8d24d3fea5806f488d2b1b53d25e1d6c","impliedFormat":99},{"version":"57a925b13947b38c34277d93fb1e85d6f03f47be18ca5293b14082a1bd4a48f5","impliedFormat":99},{"version":"9d9d64c1fa76211dd529b6a24061b8d724e2110ee55d3829131bca47f3fe4838","impliedFormat":99},{"version":"c13042e244bb8cf65586e4131ef7aed9ca33bf1e029a43ed0ebab338b4465553","impliedFormat":99},{"version":"54be9b9c71a17cb2519b841fad294fa9dc6e0796ed86c8ac8dd9d8c0d1c3a631","impliedFormat":99},{"version":"10881be85efd595bef1d74dfa7b9a76a5ab1bfed9fb4a4ca7f73396b72d25b90","impliedFormat":99},{"version":"925e71eaa87021d9a1215b5cf5c5933f85fe2371ddc81c32d1191d7842565302","impliedFormat":99},{"version":"faed0b3f8979bfbfb54babcff9d91bd51fda90931c7716effa686b4f30a09575","impliedFormat":99},{"version":"53c72d68328780f711dbd39de7af674287d57e387ddc5a7d94f0ffd53d8d3564","impliedFormat":99},{"version":"51129924d359cdebdccbf20dbabc98c381b58bfebe2457a7defed57002a61316","impliedFormat":99},{"version":"7270a757071e3bc7b5e7a6175f1ac9a4ddf4de09f3664d80cb8805138f7d365b","impliedFormat":99},{"version":"ea7b5c6a79a6511cdeeedc47610370be1b0e932e93297404ef75c90f05fc1b61","impliedFormat":99},{"version":"8f366a30ce9767dddfb13c61b1a558833d5c7c415adcb52b7c54d54e6e672d78","signature":"e7828ab708d23dd98370a8de5d7ad81d44fc5817dffa5a53c4adce749cf30d58"},{"version":"7e3373dde2bba74076250204bd2af3aa44225717435e46396ef076b1954d2729","impliedFormat":1},{"version":"1c3dfad66ff0ba98b41c98c6f41af096fc56e959150bc3f44b2141fb278082fd","impliedFormat":1},{"version":"56208c500dcb5f42be7e18e8cb578f257a1a89b94b3280c506818fed06391805","impliedFormat":1},{"version":"0c94c2e497e1b9bcfda66aea239d5d36cd980d12a6d9d59e66f4be1fa3da5d5a","impliedFormat":1},{"version":"eb9271b3c585ea9dc7b19b906a921bf93f30f22330408ffec6df6a22057f3296","impliedFormat":1},{"version":"82b7bf38f1bc606dc662c35b8c80905e40956e4c2212d523402ae925bd75de63","impliedFormat":1},{"version":"81be14ad77be99cea7343fdc92a0f4058bcdebaa789d944e04ce4f86f0ca5fbb","impliedFormat":1},{"version":"9f1e00eab512de990ba27afa8634ca07362192063315be1f8166bc3dcc7f0e0f","impliedFormat":1},{"version":"1cdbf5cc31860b39bd1881f19809357ee3600331ff1317f9d700c21665649aa8","impliedFormat":1},{"version":"86dac6ce3fcd0a069b67a1ac9abdbce28588ea547fd2b42d73c1a2b7841cf182","impliedFormat":1},{"version":"4d34fbeadba0009ed3a1a5e77c99a1feedec65d88c4d9640910ff905e4e679f7","impliedFormat":1},{"version":"2f3ec8a345eefed1af66b5975da98ccf3178d13ba9308359d34d2f7f87dd4c9c","impliedFormat":1},{"version":"8fcc5571404796a8fe56e5c4d05049acdeac9c7a72205ac15b35cb463916d614","impliedFormat":1},{"version":"a3b3a1712610260c7ab96e270aad82bd7b28a53e5776f25a9a538831057ff44c","impliedFormat":1},{"version":"33a2af54111b3888415e1d81a7a803d37fada1ed2f419c427413742de3948ff5","impliedFormat":1},{"version":"d5a4fca3b69f2f740e447efb9565eecdbbe4e13f170b74dd4a829c5c9a5b8ebf","impliedFormat":1},{"version":"56f1e1a0c56efce87b94501a354729d0a0898508197cb50ab3e18322eb822199","impliedFormat":1},{"version":"8960e8c1730aa7efb87fcf1c02886865229fdbf3a8120dd08bb2305d2241bd7e","impliedFormat":1},{"version":"27bf82d1d38ea76a590cbe56873846103958cae2b6f4023dc59dd8282b66a38a","impliedFormat":1},{"version":"0daaab2afb95d5e1b75f87f59ee26f85a5f8d3005a799ac48b38976b9b521e69","impliedFormat":1},{"version":"2c378d9368abcd2eba8c29b294d40909845f68557bc0b38117e4f04fc56e5f9c","impliedFormat":1},{"version":"9b048390bcffe88c023a4cd742a720b41d4cd7df83bc9270e6f2339bf38de278","affectsGlobalScope":true,"impliedFormat":1},{"version":"c60b14c297cc569c648ddaea70bc1540903b7f4da416edd46687e88a543515a1","impliedFormat":1},{"version":"d03cf6cd011da250c9a67c35a3378de326f6136c4192a90dd11f3a84627b4ef6","impliedFormat":1},{"version":"9c0217750253e3bf9c7e3821e51cff04551c00e63258d5e190cf8bd3181d5d4a","impliedFormat":1},{"version":"5c2e7f800b757863f3ddf1a98d7521b8da892a95c1b2eafb48d652a782891677","impliedFormat":1},{"version":"73ed3ff18ca862b9d7272de3b0d137d284a0c40e1c94cbf37acd5270ce9b7cd6","impliedFormat":1},{"version":"c61d8275c35a76cb12c271b5fa8707bb46b1e5778a370fd6037c244c4df6a725","impliedFormat":1},{"version":"c7793cb5cd2bef461059ca340fbcd19d7ddac7ab3dcc6cd1c90432fca260a6ae","impliedFormat":1},{"version":"fd3bf6d545e796ebd31acc33c3b20255a5bc61d963787fc8473035ea1c09d870","impliedFormat":1},{"version":"c7af51101b509721c540c86bb5fc952094404d22e8a18ced30c38a79619916fa","impliedFormat":1},{"version":"59c8f7d68f79c6e3015f8aee218282d47d3f15b85e5defc2d9d1961b6ffed7a0","impliedFormat":1},{"version":"93a2049cbc80c66aa33582ec2648e1df2df59d2b353d6b4a97c9afcbb111ccab","impliedFormat":1},{"version":"d04d359e40db3ae8a8c23d0f096ad3f9f73a9ef980f7cb252a1fdc1e7b3a2fb9","impliedFormat":1},{"version":"84aa4f0c33c729557185805aae6e0df3bd084e311da67a10972bbcf400321ff0","impliedFormat":1},{"version":"cf6cbe50e3f87b2f4fd1f39c0dc746b452d7ce41b48aadfdb724f44da5b6f6ed","impliedFormat":1},{"version":"3cf494506a50b60bf506175dead23f43716a088c031d3aa00f7220b3fbcd56c9","impliedFormat":1},{"version":"f2d47126f1544c40f2b16fc82a66f97a97beac2085053cf89b49730a0e34d231","impliedFormat":1},{"version":"724ac138ba41e752ae562072920ddee03ba69fe4de5dafb812e0a35ef7fb2c7e","impliedFormat":1},{"version":"e4eb3f8a4e2728c3f2c3cb8e6b60cadeb9a189605ee53184d02d265e2820865c","impliedFormat":1},{"version":"f16cb1b503f1a64b371d80a0018949135fbe06fb4c5f78d4f637b17921a49ee8","impliedFormat":1},{"version":"f4808c828723e236a4b35a1415f8f550ff5dec621f81deea79bf3a051a84ffd0","impliedFormat":1},{"version":"3b810aa3410a680b1850ab478d479c2f03ed4318d1e5bf7972b49c4d82bacd8d","impliedFormat":1},{"version":"0ce7166bff5669fcb826bc6b54b246b1cf559837ea9cc87c3414cc70858e6097","impliedFormat":1},{"version":"90ae889ba2396d54fe9c517fcb0d5a8923d3023c3e6cbd44676748045853d433","impliedFormat":1},{"version":"3549400d56ee2625bb5cc51074d3237702f1f9ffa984d61d9a2db2a116786c22","impliedFormat":1},{"version":"5ffe02488a8ffd06804b75084ecc66b512f85186508e7c9b57b5335283b1f487","impliedFormat":1},{"version":"b60f6734309d20efb9b0e0c7e6e68282ee451592b9c079dd1a988bb7a5eeb5e7","impliedFormat":1},{"version":"f4187a4e2973251fd9655598aa7e6e8bba879939a73188ee3290bb090cc46b15","impliedFormat":1},{"version":"44c1a26f578277f8ccef3215a4bd642a0a4fbbaf187cf9ae3053591c891fdc9c","impliedFormat":1},{"version":"a5989cd5e1e4ca9b327d2f93f43e7c981f25ee12a81c2ebde85ec7eb30f34213","impliedFormat":1},{"version":"f65b8fa1532dfe0ef2c261d63e72c46fe5f089b28edcd35b3526328d42b412b8","impliedFormat":1},{"version":"1060083aacfc46e7b7b766557bff5dafb99de3128e7bab772240877e5bfe849d","impliedFormat":1},{"version":"1b32f14ef9e26be36776d6115d3661747508a3437f5bb2528a39ce60f622b5aa","impliedFormat":1},{"version":"9ee50ea4e24ac33273880940358802dd98baddf27173f19ea061752eb192c44d","impliedFormat":1},{"version":"111e1ef247e53abc607bd921154a477a4b19b3e876abb79c672012f06f69b368","impliedFormat":1},{"version":"7ec569bb000dbd2ae79f6e5888fa16765a7c579936054a4f50b021eaf31b0998","impliedFormat":1},{"version":"dd0b9b00a39436c1d9f7358be8b1f32571b327c05b5ed0e88cc91f9d6b6bc3c9","impliedFormat":1},{"version":"a951a7b2224a4e48963762f155f5ad44ca1145f23655dde623ae312d8faeb2f2","impliedFormat":1},{"version":"f7eb7fc7e7c956605835e5bbbdfc4b6d1c36f1d41a162bfffba4540eae5d4257","impliedFormat":1},{"version":"cf7698e227b8f0e3373106ef29db72fc52661c0fdaa823205fbfc357985ec219","impliedFormat":1},{"version":"9f20de1b5776e653764e55f059d02ef460d7e2c064c304bfda1d7ba2dda43886","impliedFormat":1},{"version":"890ed5cccf66fdced5795066488cd006379dfc84b1670e459f03d40c625341ca","impliedFormat":1},{"version":"d8e8ab0dbaee5220b21dfbbb33fefc684ef4d87b07743a998f39e9d88ffe9776","impliedFormat":1},{"version":"977aeb024f773799d20985c6817a4c0db8fed3f601982a52d4093e0c60aba85f","impliedFormat":1},{"version":"d59cf5116848e162c7d3d954694f215b276ad10047c2854ed2ee6d14a481411f","impliedFormat":1},{"version":"50098be78e7cbfc324dfc04983571c80539e55e11a0428f83a090c13c41824a2","impliedFormat":1},{"version":"40894bcf307f326ec4d371cd2ff304dac0fa303d1c6c71ad7dc65742239114da","impliedFormat":1},{"version":"dd6051c7b02af0d521857069c49897adb8595d1f0e94487d53ebc157294ef864","impliedFormat":1},{"version":"79c6a11f75a62151848da39f6098549af0dd13b22206244961048326f451b2a8","impliedFormat":1},{"version":"c2ef20552d779aaf56b064427a7da8d831e5de6eed20fa28b64c93e89f07acd2","signature":"e382d9aa86ae57a0634861cd952e44d2676f508b963e4243c35546caa86c7d86"},{"version":"2dec0182f0394ec195ac9461c71833166cbdfc45cda3a236d04101d2a9b3293e","signature":"160fbcda3ae5291ff8861d7328a3bc0b086a02cf45e521cbef69bc50817bbdba"},{"version":"bb703864a1bc9ca5ac3589ffd83785f6dc86f7f6c485c97d7ffd53438777cb9e","impliedFormat":1},{"version":"cfb27244d8cfb10b344f35110ea253cb9428df3fb4cde76401dd6cae2abf1f3a","signature":"143126980202f9d9cf7ba155552d23da27f196afa8812c1155ee28780e8fcbc5"},{"version":"6b5f886fe41e2e767168e491fe6048398ed6439d44e006d9f51cc31265f08978","impliedFormat":99},{"version":"56a87e37f91f5625eb7d5f8394904f3f1e2a90fb08f347161dc94f1ae586bdd0","impliedFormat":99},{"version":"6b863463764ae572b9ada405bf77aac37b5e5089a3ab420d0862e4471051393b","impliedFormat":99},{"version":"68b6a7501a56babd7bcd840e0d638ee7ec582f1e70b3c36ebf32e5e5836913c8","impliedFormat":99},{"version":"89783bd45ab35df55203b522f8271500189c3526976af533a599a86caaf31362","impliedFormat":99},{"version":"6da2e0928bdab05861abc4e4abebea0c7cf0b67e25374ba35a94df2269563dd8","impliedFormat":99},{"version":"0e896c4667e1d37a57f08e578a3011616565fe5af058406e598463439bf22a08","signature":"704c09fbf8cab1b4da84a0fb0b9229185746bb65f8c2db5ebb52ecc121389aa4"},{"version":"e7441be68f390975c6155c805cea8f54cc1b7f3656b6b9440ecbbbd7753499e6","impliedFormat":99},{"version":"8086dd4b86a2845a05c39ea7eaf251b9c2f1274182a6e008cd0a7849e8134310","signature":"0c744d06c45e1d7281cbb0ed29c102a48716bb845436ad02ec4b2b2b101b8318"},{"version":"26e6c521a290630ea31f0205a46a87cab35faac96e2b30606f37bae7bcda4f9d","impliedFormat":99},{"version":"53fddaae33695e00c4520f2c172e0d7193596b4b69d0e26ab35bc3d69117a9d4","signature":"4be287c460622f9f8329a3ac0eac7c67852ac6ce7a2afc20dbbcbce631ac0077"},{"version":"74cb3216841689838787fcc0d2d0a5c9f4a6668178b8cb1f62b5a916f89e62db","signature":"c91f4024710e2864c14d93717af2a6cd78f21de069b0032bd7469437ff0a925e"},{"version":"caf4af98bf464ad3e10c46cf7d340556f89197aab0f87f032c7b84eb8ddb24d9","impliedFormat":99},{"version":"71acd198e19fa38447a3cbc5c33f2f5a719d933fccf314aaff0e8b0593271324","impliedFormat":99},{"version":"d92f65d70ed214fb1be4215e4dd6aa07c38646b34711e45d19be2767a7d69cd2","signature":"bb0dfbd93a35b232bb2b36042266c565e235afd18be59f6568c76ce998c22234"},{"version":"fb58f52970e001ccf50e084510170794d20c015e00a8abd177fdfcd3240716f7","signature":"367466b8edaa628bdf47c48c768e0dbad54a8a128eaa6af92041c72be0381843"},{"version":"6ce55335012d76737df504baabc950805760acf3be988142d1985aa4893f919e","impliedFormat":1},{"version":"88efe27bebddb62da9655a9f093e0c27719647e96747f16650489dc9671075d6","impliedFormat":1},{"version":"e348f128032c4807ad9359a1fff29fcbc5f551c81be807bfa86db5a45649b7ba","impliedFormat":1},{"version":"8ee6b07974528da39b7835556e12dd3198c0a13e4a9de321217cd2044f3de22e","impliedFormat":1},{"version":"deefd8c43b40f9797c3921d78d3f9243959621a17b817be7f5d95c149f23a9dd","impliedFormat":1},{"version":"5f12132800d430adbe59b49c2c0354d85a71ada7d756e34250a655baa8ad4ae5","impliedFormat":1},{"version":"1996d1cd7d585a8359a35878f67abdd73cc35b1f675c9c6b147b202fdd8dfc3f","impliedFormat":1},{"version":"b16e757e4c35434065120a2b3bf13a518fc9e621dc9c2ed668f91635a9dc4e75","impliedFormat":1},{"version":"ac83121ea57329928ee48f235bc78502497f9f6e607cb1fd4ba3d41b6b98f5fa","impliedFormat":1},{"version":"d02ced7accb512e6198b796b8d284e7979abde0f089b0a77969747a5f27bfb23","impliedFormat":1},{"version":"4374cefdde5c6e9bad52b0436e887b8325b8f407c12035194ad02c28f1553a3a","impliedFormat":1},{"version":"5f1ba0898eb0a54a644cb9c95c2240beaa961d87fd080cbb90807a6cc03daeb3","impliedFormat":1},{"version":"8e92ee8710ba85b158c5d91b0bbc9d0d033f5e062b6e70178063f01b20f63a14","impliedFormat":1},{"version":"ee933420aacba1f60aa70fb8ba47c5e69001b005073b71973114587089a13c7f","impliedFormat":1},{"version":"0a0714999d0a5bdfacd15c7b34cffbcc6f263f6cb0ccb42076cdc541c6987797","impliedFormat":1},{"version":"56584bfc655f9df64afc0f22f7d1122c29e5b74b342c203b891e19de9fa37de8","impliedFormat":1},{"version":"40ec58f0fadd0b3981b3d383e1c12fa0680115ae9f018387fc2cfc0bbcf23204","impliedFormat":1},{"version":"849b9e7283b7309a4556c9b90bb8e2dfc27751f157798065bbc513dcddb09a8c","impliedFormat":1},{"version":"76bba0c97594248c1be19af32d5799f7eff51cec2926d8e4dd59267d7636a0b4","impliedFormat":1},{"version":"10e109212c7be8a9f66e988e5d6c2a8900c9d14bf6beadf5fa70d32ada3425cf","impliedFormat":1},{"version":"f4558bcdc26690cc593cd59217cd17d8e00af0f5fbd0c4f1c0d71ba75029c42e","impliedFormat":1},{"version":"26602933b613e4df3868a6c82e14fffa2393a08531cb333ed27b151923462981","impliedFormat":1},{"version":"f57a588d8f6b3ce5c8b494f2dc759a8885eaee18e80a4952df47de45403fedbe","impliedFormat":1},{"version":"34735727b3fe7a0ed0651a0f88d06449163d1989a2b2de7f047473adc7c1c383","impliedFormat":1},{"version":"a5b13abc88ab3186e713c445e59e2f6eee20c6167943517bc2f56985d89b8c55","impliedFormat":1},{"version":"c8a206a6ba4e32710ebb4a389187772423de0f4f6180b95a7ef1a5a1934c1be6","impliedFormat":1},{"version":"7ae65fe95b18205e241e6695cb2c61c0828d660aca7d08f68781b439a800e6b8","impliedFormat":1},{"version":"c2c8c166199d3a7bd093152437d1f6399d05e458a9ca9364456feecba920cda4","impliedFormat":1},{"version":"369b7270eeeb37982203b2cb18c7302947b89bf5818c1d3d2e95a0418f02b74e","impliedFormat":1},{"version":"94f95d223e2783b0aef4d15d7f6990a6a550fe17d099c501395f690337f7105e","impliedFormat":1},{"version":"039bd8d1e0d151570b66e75ee152877fb0e2f42eca43718632ac195e6884be34","impliedFormat":1},{"version":"d565d66b38d54de037c9d46dede1f12630010d9b45fd9c6b432c7a40b2e30502","impliedFormat":1},{"version":"d7386a1ebe9a3eae227a5561c898c10cacb61a49f941c5a18cdf593f979c693c","impliedFormat":1},{"version":"bbbcb3b474e5e6c8675b6e0ed75abf9084c85b136ac2e451c10f10b3a6d43ce5","signature":"59d4d3e50459d3dcb53cc0ca9d1211d299167c2283ac63428b90a53824dd248c"},{"version":"89ad9a4e8044299f356f38879a1c2176bc60c997519b442c92cc5a70b731a360","impliedFormat":99},{"version":"f00f245212d1fde7f4118e66be2b541bf7f798240c302efdcee25b5de46cc013","signature":"fd469ee23a7074342357545f0d37b487066bab6fc00e079695cc02f79598bf8d"},{"version":"e22babbd675db6e921fcde4c1f85435dcdeba2734b10b9f4013d3c9ca5332658","signature":"3309423a2837bf899df1568eaa9c41430753bf2957451b4b0494c7e4f829ada1"},{"version":"866ea21148989a7e3b510d99a20468d0704ddf4886544ae2fbe0426ac3b3f6d9","signature":"233bf868506e6fb7576da957ddead506efb374fe8b70a1b56e0114f231fdadbb"},{"version":"45eebc8ce16b5ab11a31f534d44755140f49e149dab7b0f87182893cd05462fa","signature":"fefbe143dffcdc8d5ff7f05ce2d8ed71a5bc8d73afb6726ae2e1838e1bb4d020"},{"version":"b843496b17a2bbd79c83809c73fd9c59fab53d3e361e04e52e2d489524eea764","impliedFormat":1},{"version":"fb52208d687ef2eae34f1ff19104a8d2dd293a135bd851c6551dda7d21676886","signature":"6be90cc3810d5b2a29f304c6f7ff64a7f4d0f26e44d944d1dfa68b7d7a2fbf65"},{"version":"6f1df5b1bee26305b9c4b587c90fdeba9978088e5109a12c1833a95dff5ebc73","signature":"1e5397982923535c863813ef7f7b4bf8f63f87389021525fa7530f9e65d8d18d"},{"version":"c91d29f1e1c04d51beaf1a1b32850249937403022f17c478fc3026001fc5b2bb","signature":"eb1f0c48fcae785ca971602b876b59df15d9213a439d3ec82aacd5fc8415350e"},{"version":"fd4f58cd6b5fc8ce8af0d04bfef5142f15c4bafaac9a9899c6daa056f10bb517","impliedFormat":99},{"version":"9cdf76e0867eac5547a8f8ae0ec574775b8770f8049133aadf8803987548ee49","signature":"da6a1d498947d59b453f7bdca298ee4b77f0e34ab6e2aaaf782aaac054b571f4"},{"version":"2a00cea77767cb26393ee6f972fd32941249a0d65b246bfcb20a780a2b919a21","impliedFormat":99},{"version":"440cb5b34e06fabe3dcb13a3f77b98d771bf696857c8e97ce170b4f345f8a26b","impliedFormat":99},{"version":"8741c4da3a2dfe2e20d5c4cee03256277f5990c0608ab431b692c49369ffcbd6","signature":"aa4c6a3e34c3d0d6e795066286aa3e062b085c1b2a8967f5782d14394d7cae16"},{"version":"1d20e563f31f8180eccb979af113c967b83b9df3eb0938cd460d4e3858ef9cdb","signature":"c9001d3c77c7b306af3e8b7d4407e4a7f9ca133d1302fdd67238211f6e1c2b6f"},{"version":"2535fc1a5fe64892783ff8f61321b181c24f824e688a4a05ae738da33466605b","impliedFormat":99},{"version":"f5d5c131b7af3f5b6de36c264a7808275f88c8438c931d175413f365bcdf2672","signature":"adeb329d41b4133066a9911fdc1f39c4956fe3dfa83611a70434f542b6adb268"},{"version":"a9373d52584b48809ffd61d74f5b3dfd127da846e3c4ee3c415560386df3994b","impliedFormat":99},{"version":"caf4af98bf464ad3e10c46cf7d340556f89197aab0f87f032c7b84eb8ddb24d9","impliedFormat":99},{"version":"cbfd5ef0c8fdb4983202252b5f5758a579f4500edc3b9ad413da60cffb5c3564","impliedFormat":99},{"version":"98271448650669d39d317bdbd418e5bfb2546cd03fa016d0758b744d26136fcb","signature":"dc27b41119d6806693f9e4f0d68431d33532f737a84ade77e34b76bb8c9873eb"},{"version":"9f7a3c434912fd3feb87af4aabdf0d1b614152ecb5e7b2aa1fff3429879cdd51","impliedFormat":99},{"version":"d2af767a75572d3b975d6f9b26f592d0e37d8063866b849675d90d9ae8830d86","signature":"a0d654569736836260ac4805fe575fbafd16a3fd838f8b503a59a98b236073f1"},{"version":"a81a0eea036dd60a2c2edc52466bb2853bef379c3b9de327fe9fff6e3c38e6c5","impliedFormat":1},{"version":"348c13a1c9160681e41bc5cd3cc519dd8170d38a36a30480b41849f60f5bf8a0","impliedFormat":1},{"version":"c772a37a02356897d6f9872e30fcc2108f43ad943cc112bd1acc5415a876e9f8","impliedFormat":1},{"version":"279248c34ecd223fc46224f86384ebf49c775eb69329ad644d3d99f1205f3e7d","impliedFormat":1},{"version":"74dedffc2d09627f5a4de02bbd7eedf634938c13c2cc4e92f0b4135573432783","impliedFormat":1},{"version":"1f2bbbe38d5e536607b385f04c3d2cbf1e678c5ded7e8c5871ad8ae91ef33c3d","impliedFormat":1},{"version":"3aa3513d5e13d028202e788d763f021d2d113bd673087b42a2606ab50345492d","impliedFormat":1},{"version":"f012173d64d0579875aa60405de21ad379af7971b93bf46bee23acc5fa2b76a4","impliedFormat":1},{"version":"dcf5dc3ce399d472929c170de58422b549130dd540531623c830aaaaf3dd5f93","impliedFormat":1},{"version":"ec35f1490510239b89c745c948007c5dd00a8dca0861a836dcf0db5360679a2d","impliedFormat":1},{"version":"32868e4ec9b6bd4b1d96d24611343404b3a0a37064a7ac514b1d66b48325a911","impliedFormat":1},{"version":"4bbea07f21ff84bf3ceeb218b5a8c367c6e0f08014d3fd09e457d2ffb2826b9c","impliedFormat":1},{"version":"873a07dbeb0f8a3018791d245c0cf10c3289c8f7162cdbbb4a5b9cf723136185","impliedFormat":1},{"version":"43839af7f24edbd4b4e42e861eb7c0d85d80ec497095bb5002c93b451e9fcf88","impliedFormat":1},{"version":"54a7ee56aadecbe8126744f7787f54f79d1e110adab8fe7026ad83a9681f136a","impliedFormat":1},{"version":"6333c727ee2b79cdab55e9e10971e59cbfee26c73dfb350972cfd97712fc2162","impliedFormat":1},{"version":"8743b4356e522c26dc37f20cde4bcdb5ebd0a71a3afe156e81c099db7f34621d","impliedFormat":1},{"version":"af3d97c3a0da9491841efc4e25585247aa76772b840dd279dbff714c69d3a1ec","impliedFormat":1},{"version":"d9ac50fe802967929467413a79631698b8d8f4f2dc692b207e509b6bb3a92524","impliedFormat":1},{"version":"34d017b29ca5107bf2832b992e4cee51ed497f074724a4b4a7b6386b7f8297c9","impliedFormat":1},{"version":"b75d56703daaffcb31a7cdebf190856e07739a9481f01c2919f95bde99be9424","impliedFormat":99},{"version":"a27f5919977e95961052624f983253af4f06536cbc180f40b2ec23a830c504b9","signature":"1b2b4612cbfad4c97462a177552f8ad4d3014c58b6f40318318e8049e701e13f"},{"version":"99d1a601593495371e798da1850b52877bf63d0678f15722d5f048e404f002e4","impliedFormat":99},{"version":"8dc1de92f3cde30161e7f9528527cca317ac194b55a94df4ee82c5e3006bb85a","signature":"351f7cb5f3ce63374db1c4a065fa52fb1395e525c7a7a9dcaade8db57dae36a7"},{"version":"1179ef8174e0e4a09d35576199df04803b1db17c0fb35b9326442884bc0b0cce","impliedFormat":99},{"version":"6c5c9d35a4a66abb4b7f06aa8e75769b8a70c3c85fcbd333c8482f078a9f41f0","signature":"89c4c894c2e107e6acd529ccc90f5d3ac56e9e26eec7acc69db5bc74c67f66b8"},{"version":"8e0be89741f7c47a3bc4eff6f9dc41a256a8392e24b681751b5a751f9edc5187","signature":"d76d7a53b855e40233ee94d7991f041ef08798ce237f572fa1fe5120792e0f3a"},{"version":"68bf11609c04a24c046838df50485a010c92186134a1038ba0ec77af843ee6fb","signature":"6ff334f1e3348c2e00624e004c3f55ab2e5a80c688642db171633a735efb9374"},{"version":"233267a4a036c64aee95f66a0d31e3e0ef048cccc57dd66f9cf87582b38691e4","impliedFormat":99},{"version":"3fb9fa3ed6b8e600da5d1cff186e9c4f36280bd97c8429ff7f13ebf5a3ee56e4","signature":"6d248991a8cfaece02458f68fed4d3e7ebbdb17833b9fd127fdaa69cf8436c69"},{"version":"9a1c42b9c3c159be6f600974e60ce96f5f9aa32e774fdf5e49fc996c51a273dc","signature":"0bcbba038569698e4536177738d43aed5cc5e81a958ef84c512c683ac9414354"},{"version":"cc3738ba01d9af5ba1206a313896837ff8779791afcd9869e582783550f17f38","impliedFormat":99},{"version":"4ca30f5d779686d195199268db26e930f0902fd6f05146ebd8e20b33a4e41b21","signature":"5c6d966b719f71bfc1053b6613fc4062e9697d4ffe3d4cc328ae34651ec3adf4"},{"version":"e6b8f3cd057e49a50b57a52acc38cff7c224def2249464d489295e0e1d200af6","impliedFormat":1},{"version":"4a43851c034bb04bd94a424fa7533ff95755b64d36c2133da617bfa9d2dc75e2","signature":"6758bdb7bc5b66438c03317d3c2a15ac771cb1382d8229f65fbb6a05b225f1da"},{"version":"ed524d7596437439ba5860a48a928156f7ff287734c8186a442b467c368c472a","signature":"4bee0726981e0857928e286c1778d6935dbdcd9fa66d256174860c5d951a8721"},{"version":"4a5aa16151dbec524bb043a5cbce2c3fec75957d175475c115a953aca53999a9","impliedFormat":99},{"version":"5911b3e86f96e9cb8de219574059ed890edd155188b6439e9febd538f1f61dc7","signature":"5035c4b9bc34ab886efe227aab0d1057f08efd33c317ac18adbb0c5137544e5e"},{"version":"192371085fa448a0329774c819349c4c6985c5218fa7894b8ce938161b718536","signature":"6a837d288765564d548dd6ca64acfcd5d51b53898414355060b1ebf38d45d74d"},{"version":"7a14bf21ae8a29d64c42173c08f026928daf418bed1b97b37ac4bb2aa197b89b","impliedFormat":99},{"version":"ab463f98c625384d162fd97a534078d03b4f4c4c5ef218b1488f2fb07df7c7aa","signature":"a0e3d7ec764206d4047f5be0152f038bc3498b3fa0751247d00e02267906fbcd"},{"version":"1bf0fda1a93849302c8b54d4eb334f7176bb464eaef9fa4427575a1463bd8716","signature":"5fe0be66db3dd2c391800533fc65d83aff705a2accd5a59c1804b462d5d1c15c"},{"version":"69ec8d900cfec3d40e50490fedbbea5c1b49d32c38adbc236e73a3b8978c0b11","impliedFormat":99},{"version":"7fd629484ba6772b686885b443914655089246f75a13dd685845d0abae337671","impliedFormat":99},{"version":"c7bcfaaeb913718082adbe6d63ce4c601ee80a34e72cace5f14a8628f1b8ba73","signature":"ea61fe226066ef7b04c31bb4cb69f280569982683945c2dcaf65d59a537b6217"},{"version":"e57a6f12e2554082c776f42a3c0ed12e2a1e117bb00e74552cebb24ccae6ccc1","signature":"44c4203ac811b5d4d8953be3b07ace5b3b5396d892cde969912d40d058d43086"},{"version":"86cd781770e3b67544538f3816f55e219d43a0ecca79665fd748e9979e0b10ee","signature":"32f7c168ee545e9b432d2a861f4fb0bc645e21e88c774cedf54e72d1e3ccc049"},"d1986184a09a52db8228cb2bb2a61a8c05c9354e5b93cec8e2628d8579c892d7",{"version":"5118a67b2f9e0a081bf5c2f2a2f79fb8930bb34ef7d506350ee1e0cc93d5cb34","affectsGlobalScope":true},{"version":"9b3896914bb46349143e5d936524655cbb6b1828e1787facfb23ea5a69cd598e","signature":"8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881"},"d1986184a09a52db8228cb2bb2a61a8c05c9354e5b93cec8e2628d8579c892d7",{"version":"8089267ea138dc43f49d67d6bf91a71c46905958022b4b0e08900ce784e2c36b","signature":"8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881"},{"version":"b1538a92b9bae8d230267210c5db38c2eb6bdb352128a3ce3aa8c6acf9fc9622","impliedFormat":1},{"version":"6fc1a4f64372593767a9b7b774e9b3b92bf04e8785c3f9ea98973aa9f4bbe490","impliedFormat":1},{"version":"ff09b6fbdcf74d8af4e131b8866925c5e18d225540b9b19ce9485ca93e574d84","impliedFormat":1},{"version":"d5895252efa27a50f134a9b580aa61f7def5ab73d0a8071f9b5bf9a317c01c2d","impliedFormat":1},{"version":"1f366bde16e0513fa7b64f87f86689c4d36efd85afce7eb24753e9c99b91c319","impliedFormat":1}],"root":[530,531,[541,546],553,[558,560],564,566,567,[607,612],[655,659],661,664,666,667,670,674,675,678,679,1114,1185,1186,1188,1195,1197,1199,1200,1203,1204,1238,[1240,1243],[1245,1247],1249,1252,1253,1255,1259,1261,1283,1285,[1287,1289],1291,1292,1294,1296,1297,1299,1300,1302,1303,[1306,1313]],"options":{"allowJs":true,"esModuleInterop":true,"jsx":4,"module":99,"skipLibCheck":true,"strict":true,"target":2},"referencedMap":[[1312,1],[530,2],[1313,3],[1309,4],[1310,2],[1311,5],[612,6],[553,7],[656,8],[610,9],[658,10],[657,11],[659,12],[655,13],[567,14],[611,15],[608,16],[661,17],[664,18],[666,19],[667,20],[670,21],[674,22],[560,23],[675,24],[679,25],[558,23],[1114,26],[559,27],[607,28],[1185,29],[566,30],[1186,31],[1188,32],[1195,33],[564,34],[1197,35],[1199,36],[1200,37],[1204,38],[1238,39],[1240,40],[1243,41],[1245,42],[1241,27],[1246,43],[1247,44],[1203,45],[1249,46],[1252,47],[1253,48],[1255,49],[1259,50],[1261,51],[1283,52],[1285,53],[1287,54],[678,55],[1288,34],[1292,56],[1289,44],[1294,57],[1296,58],[1297,59],[1299,60],[1300,27],[1302,61],[1242,27],[542,62],[1303,63],[1307,64],[1306,65],[1291,66],[1308,67],[543,68],[609,69],[544,67],[545,68],[546,70],[541,71],[531,72],[680,2],[681,73],[682,74],[687,75],[683,74],[686,2],[684,2],[685,2],[374,2],[663,76],[665,77],[1189,78],[669,79],[668,80],[673,81],[671,80],[672,80],[565,82],[662,83],[1194,84],[532,80],[563,85],[534,78],[1198,84],[561,78],[1239,86],[1202,79],[1201,80],[1193,87],[1248,88],[1251,89],[1254,90],[1191,91],[562,78],[533,80],[1258,81],[1256,80],[1257,80],[1260,92],[1192,83],[1284,83],[1286,90],[677,79],[676,80],[1293,83],[557,93],[1298,83],[1301,92],[535,94],[1305,95],[1304,78],[1290,86],[1250,78],[1190,2],[617,96],[623,97],[625,98],[618,99],[626,100],[624,101],[627,2],[619,102],[620,100],[628,103],[629,96],[632,104],[621,105],[630,106],[631,107],[622,108],[1314,2],[1315,2],[1316,2],[1317,109],[1135,2],[1118,110],[1136,111],[1117,2],[1318,2],[613,2],[614,112],[138,113],[139,113],[140,114],[93,115],[141,116],[142,117],[143,118],[88,2],[91,119],[89,2],[90,2],[144,120],[145,121],[146,122],[147,123],[148,124],[149,125],[150,125],[151,126],[152,127],[153,128],[154,129],[94,2],[92,2],[155,130],[156,131],[157,132],[191,133],[158,134],[159,2],[160,135],[161,136],[162,137],[163,138],[164,139],[165,140],[166,141],[167,142],[168,143],[169,143],[170,144],[171,2],[172,145],[173,146],[175,147],[174,148],[176,149],[177,150],[178,151],[179,152],[180,153],[181,154],[182,155],[183,156],[184,157],[185,158],[186,159],[187,160],[188,161],[95,2],[96,2],[97,2],[135,162],[136,2],[137,2],[189,163],[190,164],[195,165],[459,80],[196,166],[194,167],[461,168],[460,169],[192,170],[457,2],[193,171],[79,2],[81,172],[456,80],[226,80],[552,2],[538,173],[537,174],[536,2],[1187,175],[80,2],[776,176],[755,177],[852,2],[756,178],[692,176],[693,176],[694,176],[695,176],[696,176],[697,176],[698,176],[699,176],[700,176],[701,176],[702,176],[703,176],[704,176],[705,176],[706,176],[707,176],[708,176],[709,176],[688,2],[710,176],[711,176],[712,2],[713,176],[714,176],[716,176],[715,176],[717,176],[718,176],[719,176],[720,176],[721,176],[722,176],[723,176],[724,176],[725,176],[726,176],[727,176],[728,176],[729,176],[730,176],[731,176],[732,176],[733,176],[734,176],[735,176],[737,176],[738,176],[739,176],[736,176],[740,176],[741,176],[742,176],[743,176],[744,176],[745,176],[746,176],[747,176],[748,176],[749,176],[750,176],[751,176],[752,176],[753,176],[754,176],[757,179],[758,176],[759,176],[760,180],[761,181],[762,176],[763,176],[764,176],[765,176],[768,176],[766,176],[767,176],[690,2],[769,176],[770,176],[771,176],[772,176],[773,176],[774,176],[775,176],[777,182],[778,176],[779,176],[780,176],[782,176],[781,176],[783,176],[784,176],[785,176],[786,176],[787,176],[788,176],[789,176],[790,176],[791,176],[792,176],[794,176],[793,176],[795,176],[796,2],[797,2],[798,2],[945,183],[799,176],[800,176],[801,176],[802,176],[803,176],[804,176],[805,2],[806,176],[807,2],[808,176],[809,176],[810,176],[811,176],[812,176],[813,176],[814,176],[815,176],[816,176],[817,176],[818,176],[819,176],[820,176],[821,176],[822,176],[823,176],[824,176],[825,176],[826,176],[827,176],[828,176],[829,176],[830,176],[831,176],[832,176],[833,176],[834,176],[835,176],[836,176],[837,176],[838,176],[839,176],[840,2],[841,176],[842,176],[843,176],[844,176],[845,176],[846,176],[847,176],[848,176],[849,176],[850,176],[851,176],[853,184],[1041,185],[946,178],[948,178],[949,178],[950,178],[951,178],[952,178],[947,178],[953,178],[955,178],[954,178],[956,178],[957,178],[958,178],[959,178],[960,178],[961,178],[962,178],[963,178],[965,178],[964,178],[966,178],[967,178],[968,178],[969,178],[970,178],[971,178],[972,178],[973,178],[974,178],[975,178],[976,178],[977,178],[978,178],[979,178],[980,178],[982,178],[983,178],[981,178],[984,178],[985,178],[986,178],[987,178],[988,178],[989,178],[990,178],[991,178],[992,178],[993,178],[994,178],[995,178],[997,178],[996,178],[999,178],[998,178],[1000,178],[1001,178],[1002,178],[1003,178],[1004,178],[1005,178],[1006,178],[1007,178],[1008,178],[1009,178],[1010,178],[1011,178],[1012,178],[1014,178],[1013,178],[1015,178],[1016,178],[1017,178],[1019,178],[1018,178],[1020,178],[1021,178],[1022,178],[1023,178],[1024,178],[1025,178],[1027,178],[1026,178],[1028,178],[1029,178],[1030,178],[1031,178],[1032,178],[689,176],[1033,178],[1034,178],[1036,178],[1035,178],[1037,178],[1038,178],[1039,178],[1040,178],[854,176],[855,176],[856,2],[857,2],[858,2],[859,176],[860,2],[861,2],[862,2],[863,2],[864,2],[865,176],[866,176],[867,176],[868,176],[869,176],[870,176],[871,176],[872,176],[877,186],[875,187],[876,188],[874,189],[873,176],[878,176],[879,176],[880,176],[881,176],[882,176],[883,176],[884,176],[885,176],[886,176],[887,176],[888,2],[889,2],[890,176],[891,176],[892,2],[893,2],[894,2],[895,176],[896,176],[897,176],[898,176],[899,182],[900,176],[901,176],[902,176],[903,176],[904,176],[905,176],[906,176],[907,176],[908,176],[909,176],[910,176],[911,176],[912,176],[913,176],[914,176],[915,176],[916,176],[917,176],[918,176],[919,176],[920,176],[921,176],[922,176],[923,176],[924,176],[925,176],[926,176],[927,176],[928,176],[929,176],[930,176],[931,176],[932,176],[933,176],[934,176],[935,176],[936,176],[937,176],[938,176],[939,176],[940,176],[691,190],[941,2],[942,2],[943,2],[944,2],[603,191],[602,192],[604,193],[605,192],[606,194],[568,2],[576,195],[570,196],[577,2],[599,197],[574,198],[598,199],[595,200],[578,201],[579,2],[572,2],[569,2],[600,202],[596,203],[580,2],[597,204],[581,205],[583,206],[584,207],[573,208],[585,209],[586,208],[588,209],[589,210],[590,211],[592,212],[587,213],[593,214],[594,215],[571,216],[591,217],[575,218],[582,2],[601,219],[556,220],[1244,80],[539,80],[555,221],[554,2],[660,80],[482,222],[487,223],[494,224],[477,225],[230,2],[238,226],[378,227],[381,228],[353,2],[366,229],[373,230],[255,2],[355,2],[236,2],[352,231],[398,232],[237,2],[228,233],[380,234],[382,235],[383,236],[454,237],[347,238],[300,239],[360,240],[361,241],[359,242],[358,2],[354,243],[379,244],[239,245],[424,2],[425,246],[266,247],[240,248],[267,247],[303,247],[206,247],[376,249],[375,2],[365,250],[472,2],[215,2],[493,251],[432,252],[433,253],[429,254],[511,2],[330,2],[434,67],[430,255],[516,256],[515,257],[510,2],[281,2],[333,258],[332,2],[509,259],[431,80],[286,260],[293,261],[295,262],[285,2],[290,263],[292,264],[294,265],[289,266],[287,2],[291,267],[512,2],[508,2],[514,268],[513,2],[284,269],[503,270],[506,271],[274,272],[273,273],[272,274],[519,80],[271,275],[260,2],[521,2],[548,276],[550,276],[547,2],[522,80],[523,277],[198,2],[362,278],[363,279],[364,280],[202,2],[367,2],[222,281],[197,2],[446,80],[204,282],[445,283],[444,284],[435,2],[436,2],[443,2],[438,2],[441,285],[437,2],[439,286],[442,287],[440,286],[235,2],[232,2],[233,247],[387,2],[392,288],[393,289],[391,290],[389,291],[390,292],[385,2],[452,67],[227,67],[481,293],[488,294],[492,295],[321,296],[320,2],[315,2],[468,297],[476,298],[348,299],[349,300],[427,301],[337,2],[450,302],[325,80],[342,303],[453,304],[338,2],[341,305],[339,2],[451,306],[448,307],[447,2],[449,2],[345,2],[423,308],[210,309],[323,310],[327,311],[343,312],[346,313],[335,314],[328,315],[475,316],[401,317],[319,318],[207,319],[474,320],[203,321],[394,322],[386,2],[395,323],[412,324],[384,2],[411,325],[87,2],[406,326],[231,2],[426,327],[402,2],[216,2],[218,2],[357,2],[410,328],[234,2],[258,329],[344,330],[264,331],[324,2],[409,2],[388,2],[414,332],[415,333],[356,2],[417,334],[419,335],[418,336],[368,2],[408,319],[421,337],[318,338],[407,339],[413,340],[243,2],[247,2],[246,2],[245,2],[250,2],[244,2],[253,2],[252,2],[249,2],[248,2],[251,2],[254,341],[242,2],[310,342],[309,2],[314,343],[311,344],[313,345],[316,343],[312,344],[223,346],[302,347],[471,348],[469,2],[498,349],[500,350],[464,351],[499,352],[211,353],[208,353],[241,2],[225,354],[224,355],[220,356],[221,357],[229,358],[257,358],[268,358],[304,359],[269,359],[213,360],[212,2],[308,361],[307,362],[306,363],[305,364],[214,365],[455,366],[256,367],[463,368],[428,369],[458,370],[462,371],[351,372],[350,373],[331,374],[317,375],[299,376],[301,377],[298,378],[420,379],[322,2],[486,2],[219,380],[422,381],[470,382],[329,2],[259,383],[336,384],[334,385],[261,386],[396,387],[465,2],[262,388],[397,388],[484,2],[483,2],[485,2],[467,2],[466,2],[399,389],[326,2],[296,390],[217,391],[275,2],[201,392],[263,2],[490,80],[200,2],[502,393],[283,80],[496,67],[282,394],[479,395],[280,393],[205,2],[504,396],[278,80],[279,80],[270,2],[199,2],[277,397],[276,398],[265,399],[340,142],[400,142],[416,2],[404,400],[403,2],[288,269],[209,2],[297,80],[473,281],[480,401],[82,80],[85,402],[86,403],[83,80],[84,2],[377,404],[372,405],[371,2],[370,406],[369,2],[478,407],[489,408],[491,409],[495,410],[549,411],[551,412],[497,413],[501,414],[529,415],[505,415],[528,416],[507,417],[517,418],[518,419],[520,420],[524,421],[527,281],[526,2],[525,422],[1100,423],[1061,424],[1060,425],[1099,426],[1101,427],[1042,80],[1043,80],[1044,80],[1088,428],[1067,429],[1068,429],[1069,430],[1070,80],[1071,80],[1072,431],[1045,432],[1073,80],[1074,80],[1075,433],[1076,80],[1077,80],[1078,80],[1079,80],[1080,80],[1081,80],[1046,432],[1082,80],[1083,80],[1084,432],[1085,80],[1086,80],[1087,433],[1102,430],[1089,423],[1090,423],[1091,423],[1092,423],[1093,423],[1094,2],[1095,423],[1096,434],[1103,435],[1104,436],[1113,437],[1058,438],[1047,439],[1048,423],[1049,439],[1050,423],[1051,2],[1052,423],[1053,2],[1054,423],[1055,423],[1056,423],[1057,423],[1098,423],[1065,440],[1066,441],[1062,442],[1063,443],[1097,444],[1059,80],[1064,445],[1105,439],[1106,439],[1112,446],[1107,423],[1108,439],[1109,439],[1110,423],[1111,439],[1205,2],[1221,447],[1222,447],[1223,447],[1237,448],[1224,449],[1225,449],[1226,450],[1218,451],[1216,452],[1207,2],[1211,453],[1215,454],[1213,455],[1220,456],[1208,457],[1209,458],[1210,459],[1212,460],[1214,461],[1217,462],[1219,463],[1227,449],[1228,449],[1229,449],[1230,447],[1231,449],[1232,449],[1206,449],[1233,2],[1235,464],[1234,449],[1236,447],[616,99],[633,465],[634,465],[636,466],[637,467],[615,96],[638,465],[654,468],[635,465],[639,99],[640,99],[641,465],[642,80],[643,465],[644,469],[645,465],[646,465],[647,99],[648,465],[649,465],[650,465],[651,465],[652,465],[653,99],[1267,2],[1281,470],[1262,80],[1264,471],[1266,472],[1265,473],[1263,2],[1268,2],[1269,2],[1270,2],[1271,2],[1272,2],[1273,2],[1274,2],[1275,2],[1276,2],[1277,474],[1279,475],[1280,475],[1278,2],[1282,476],[1158,477],[1160,478],[1150,479],[1155,480],[1156,481],[1162,482],[1157,483],[1154,484],[1153,485],[1152,486],[1163,487],[1120,480],[1121,480],[1161,480],[1166,488],[1176,489],[1170,489],[1178,489],[1182,489],[1168,490],[1169,489],[1171,489],[1174,489],[1177,489],[1173,491],[1175,489],[1179,80],[1172,480],[1167,492],[1129,80],[1133,80],[1123,480],[1126,80],[1131,480],[1132,493],[1125,494],[1128,80],[1130,80],[1127,495],[1116,80],[1115,80],[1184,496],[1181,497],[1147,498],[1146,480],[1144,80],[1145,480],[1148,499],[1149,500],[1142,80],[1138,501],[1141,480],[1140,480],[1139,480],[1134,480],[1143,501],[1180,480],[1159,502],[1165,503],[1164,504],[1183,2],[1151,2],[1124,2],[1122,505],[405,506],[1295,80],[540,2],[77,2],[78,2],[13,2],[14,2],[16,2],[15,2],[2,2],[17,2],[18,2],[19,2],[20,2],[21,2],[22,2],[23,2],[24,2],[3,2],[25,2],[26,2],[4,2],[27,2],[31,2],[28,2],[29,2],[30,2],[32,2],[33,2],[34,2],[5,2],[35,2],[36,2],[37,2],[38,2],[6,2],[42,2],[39,2],[40,2],[41,2],[43,2],[7,2],[44,2],[49,2],[50,2],[45,2],[46,2],[47,2],[48,2],[8,2],[54,2],[51,2],[52,2],[53,2],[55,2],[9,2],[56,2],[57,2],[58,2],[60,2],[59,2],[61,2],[62,2],[10,2],[63,2],[64,2],[65,2],[11,2],[66,2],[67,2],[68,2],[69,2],[70,2],[1,2],[71,2],[72,2],[12,2],[75,2],[74,2],[73,2],[76,2],[113,507],[123,508],[112,507],[133,509],[104,510],[103,511],[132,422],[126,512],[131,513],[106,514],[120,515],[105,516],[129,517],[101,518],[100,422],[130,519],[102,520],[107,521],[108,2],[111,521],[98,2],[134,522],[124,523],[115,524],[116,525],[118,526],[114,527],[117,528],[127,422],[109,529],[110,530],[119,531],[99,532],[122,523],[121,521],[125,2],[128,533],[1196,175],[1119,534],[1137,535]],"affectedFilesPendingEmit":[1313,1311,612,553,656,610,658,657,659,655,567,611,608,661,664,666,667,670,674,560,675,679,558,1114,559,607,1185,566,1186,1188,1195,564,1197,1199,1200,1204,1238,1240,1243,1245,1241,1246,1247,1203,1249,1252,1253,1255,1259,1261,1283,1285,1287,678,1288,1292,1289,1294,1296,1297,1299,1300,1302,1242,542,1303,1307,1306,1291,1308,543,609,544,545,546,541],"version":"5.7.3"}
```

## File: app/advice/page.tsx
```typescript
"use client";

import { useState } from "react";
import { 
  Snowflake, 
  Sun, 
  Map, 
  Car, 
  AlertTriangle, 
  ArrowRight 
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Интерфейс для наших советов
interface AdviceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: any;
  iconColorClass: string;
  iconBgClass: string;
  content: React.ReactNode;
}

// Данные с твоим текстом, разбитые на удобные React-компоненты
const adviceData: AdviceItem[] = [
  {
    id: "winter",
    title: "Как одеваться зимой",
    shortDesc: "Секреты «капусты», выбор правильной обуви и защита лица при -50°C.",
    icon: Snowflake,
    iconColorClass: "text-[#4A72B2]",
    iconBgClass: "bg-[#E8F0FE]",
    content: (
      <>
        <p className="mb-4 text-[var(--color-text-secondary)] text-lg">
          Зимой температура в Якутии в среднем опускается до -30/-40°C, а в самые холодные месяцы (декабрь и январь) нередко достигает отметок -50/-60°C. Обычный пуховик на -40°C не работает. Местные жители одеваются «капустой»:
        </p>
        
        <h3 className="font-bold text-xl text-[var(--color-green-dark)] mt-6 mb-3 border-b pb-2">Торс</h3>
        <ul className="space-y-3 text-[var(--color-text-primary)]">
          <li><strong className="text-[var(--color-accent-dark)]">1-ый слой:</strong> влагоотводящее термобелье. Для активностей — синтетика, а для города — шерсть или кашемир. <em>Хлопок запрещён</em> — намокает от пота и замерзает.</li>
          <li><strong className="text-[var(--color-accent-dark)]">2-ой слой:</strong> флисовый костюм или толстый шерстяной свитер.</li>
          <li><strong className="text-[var(--color-accent-dark)]">3-ий слой:</strong> плотная ветрозащитная куртка. Лучше всего подойдёт качественный длинный пуховик для экстремальных условий или натуральная шуба (овчина, песец, лиса). Поверх можно надеть утепленный комбинезон.</li>
        </ul>

        <h3 className="font-bold text-xl text-[var(--color-green-dark)] mt-6 mb-3 border-b pb-2">Ноги и руки</h3>
        <ul className="space-y-3 text-[var(--color-text-primary)]">
          <li><strong>Брюки:</strong> Тёплые горнолыжные утепленные брюки (удобно снимать в помещении). В сильные морозы под них надевают шерстяные или флисовые подштанники.</li>
          <li><strong>Носки:</strong> Термоноски + классические шерстяные носки. Не надевайте слишком много носков, иначе нарушится кровообращение и ноги быстро замерзнут.</li>
          <li><strong>Обувь:</strong> Берите на размер больше — под неё нужно подложить войлочную стельку и надеть шерстяной носок поверх термоноска. Подошва должна быть толстой из морозостойкой резины. Местные носят унты, торбаса или «баффины».</li>
          <li><strong>Руки:</strong> Варежки, и только меховые (песец, лиса), с внутренним шерстяным вкладышем. Перчатки на сильном морозе бесполезны.</li>
          <li><strong>Голова и лицо:</strong> Шапка-ушанка с натуральным мехом (песец, соболь). Уши и затылок должны быть закрыты. Обязателен шарф, закрывающий нижнюю часть лица.</li>
        </ul>
      </>
    )
  },
  {
    id: "summer",
    title: "Как одеваться летом",
    shortDesc: "Дышащие ткани, суточные перепады температур и защита от комаров.",
    icon: Sun,
    iconColorClass: "text-[#E38920]",
    iconBgClass: "bg-[#FFF4E5]",
    content: (
      <>
        <p className="mb-4 text-[var(--color-text-secondary)] text-lg">
          Летом суточный перепад бывает колоссальным. В центральной Якутии дневная температура может достигать +28°С...+32°С, а ночью опускаться до +10°С...+15°С. На севере ночью возможны заморозки до +1°C при дневном прогреве до +29°C.
        </p>
        
        <ul className="space-y-3 text-[var(--color-text-primary)] mb-6">
          <li><strong>Днём:</strong> надеваем легкие дышащие вещи из натуральных тканей (хлопок, лен). Подойдут футболки, шорты, свободные брюки и легкие платья.</li>
          <li><strong>Вечером:</strong> обязательно накиньте ветровку, джинсовку или флисовую кофту.</li>
          <li><strong>Для походов:</strong> спальник должен быть рассчитан на температуру от 0 до -5°C, даже если июль. Обувь для маршрутов выбирайте непромокаемую — много болотистых участков.</li>
        </ul>

        <h3 className="font-bold text-xl text-[var(--color-accent-dark)] mt-6 mb-3 bg-[var(--color-accent-light)]/30 p-3 rounded-lg">
          Комары — важный момент!
        </h3>
        <p className="mb-3 text-[var(--color-text-primary)]">
          В пик лета, с июня по июль, комаров становится очень много. Обязательно берём с собой:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)]">
          <li>Противомоскитную сетку.</li>
          <li>Репеллент с высокой концентрацией ДЭТА (не меньше 30%), берите несколько флаконов.</li>
          <li>Одежду, закрывающую открытые участки тела, с плотными манжетами и капюшоном, чтобы насекомые не заползали.</li>
        </ul>
        <p className="mt-4 text-sm text-[var(--color-text-secondary)] italic">
          К августу активность насекомых заметно снижается — это более комфортное время для туристических походов.
        </p>
      </>
    )
  },
  {
    id: "nav",
    title: "Навигация и связь",
    shortDesc: "Офлайн-карты, пауэрбанки и правила безопасности на маршруте.",
    icon: Map,
    iconColorClass: "text-[var(--color-green-medium)]",
    iconBgClass: "bg-[#EAF2ED]",
    content: (
      <>
        <p className="mb-4 text-[var(--color-text-secondary)] text-lg">
          Большинство маршрутов Якутии проходят вдали от цивилизации. Здесь нет сотовой связи, ближайший населённый пункт может быть в 50 км, а указатели на тропах встречаются редко.
        </p>
        
        <h3 className="font-bold text-xl text-[var(--color-green-dark)] mt-6 mb-3 border-b pb-2">Обязательно:</h3>
        <ul className="space-y-4 text-[var(--color-text-primary)]">
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] mt-1">✓</span>
            <span>Заранее скачайте <strong>офлайн-карты</strong> на телефон (например, Maps.Me, Organic Maps).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] mt-1">✓</span>
            <span>Возьмите с собой <strong>power-bank</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] mt-1">✓</span>
            <span>Для серьёзных экспедиций обязателен <strong>спутниковый телефон</strong> или персональный радиомаяк.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] mt-1">✓</span>
            <span>Всегда <strong>сообщайте доверенным лицам</strong> свой маршрут, контрольные точки и расчётное время прибытия. Договоритесь о времени связи по спутниковому телефону.</span>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "car",
    title: "Автомобильные путешествия",
    shortDesc: "Что должно лежать в багажнике для поездок по Якутии.",
    icon: Car,
    iconColorClass: "text-[var(--color-brown-medium)]",
    iconBgClass: "bg-[#F3EBE1]",
    content: (
      <>
        <h3 className="font-bold text-xl text-[#4A72B2] mb-3 flex items-center gap-2">
          {/* Скрываем иконку снежинки в заголовке в контрастном режиме */}
          <Snowflake className="size-5 dark-contrast:hidden" /> Если дорога зимой
        </h3>
        <p className="mb-3 text-[var(--color-text-primary)]">В машине обязательно должны быть:</p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] mb-8">
          <li>Тёплое одеяло (или спальник).</li>
          <li>Термос с горячим чаем и запас еды (не скоропортящиеся продукты: сухари, шоколад, орехи, консервы).</li>
          <li>Фонарик и спички в непромокаемой упаковке.</li>
          <li>Буксировочный трос, антигололёдные цепи и лопата.</li>
          <li>Заряженный телефон и автомобильное зарядное устройство.</li>
        </ul>

        <h3 className="font-bold text-xl text-[#E38920] mb-3 flex items-center gap-2 border-t pt-6">
          {/* Скрываем иконку солнца в заголовке в контрастном режиме */}
          <Sun className="size-5 dark-contrast:hidden" /> Если дорога летом
        </h3>
        <p className="mb-3 text-[var(--color-text-primary)]">Обязательно берём:</p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)]">
          <li>Солнцезащитные крема (SPF 30-50).</li>
          <li>Солнцезащитные очки.</li>
        </ul>
      </>
    )
  },
  {
    id: "blizzard",
    title: "Что делать при поломке в метель?",
    shortDesc: "Критически важная инструкция по выживанию, если машина заглохла.",
    icon: AlertTriangle,
    iconColorClass: "text-[#D32F2F]",
    iconBgClass: "bg-[#FCE8E8]",
    content: (
      <>
        <div className="bg-[#FCE8E8] border-l-4 border-[#D32F2F] p-4 mb-6 rounded-r-lg">
          <p className="text-[#D32F2F] font-bold text-lg">Очень важный момент, который нельзя обходить стороной.</p>
        </div>
        
        <p className="mb-4 text-[var(--color-text-primary)] font-medium">
          Если автомобиль заглох в метель, строго следуйте этим правилам:
        </p>

        <ol className="space-y-4 text-[var(--color-text-primary)] counter-reset">
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center size-8 rounded-full bg-[#D32F2F] text-white font-bold">1</span>
            <div><strong>Оставайтесь внутри машины</strong> — не пытайтесь идти пешком в неизвестном направлении.</div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center size-8 rounded-full bg-[#D32F2F] text-white font-bold">2</span>
            <div><strong>Приоткройте окно</strong> для вентиляции, чтобы избежать отравления угарным газом, если работаете с двигателем.</div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center size-8 rounded-full bg-[#D32F2F] text-white font-bold">3</span>
            <div><strong>Сигнализируйте:</strong> повесьте яркую ткань на антенну или зеркало, периодически подавайте звуковые сигналы (каждые 5–10 минут по 2–3 гудка).</div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center size-8 rounded-full bg-[#D32F2F] text-white font-bold">4</span>
            <div><strong>Звоните 112:</strong> номер работает даже при отсутствии сети — звоните, если есть хоть минимальный сигнал.</div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 flex items-center justify-center size-8 rounded-full bg-[#D32F2F] text-white font-bold">5</span>
            <div><strong>Периодически включайте двигатель</strong> для обогрева, но не оставляйте его работающим долго без проветривания.</div>
          </li>
        </ol>
      </>
    )
  }
];

export default function AdvicePage() {
  const [selectedAdvice, setSelectedAdvice] = useState<AdviceItem | null>(null);

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 
            className="font-sangha font-bold text-[var(--color-green-dark)] mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Практические советы
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
            Собрали самую важную информацию о климате, экипировке и безопасности, чтобы ваше путешествие по Якутии прошло идеально.
          </p>
        </div>

        {/* Сетка карточек-советов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adviceData.map((item) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.id}
                onClick={() => setSelectedAdvice(item)}
                className="group p-6 bg-[var(--color-bg-white)] border-[var(--color-card-border)] hover:border-[var(--color-accent)] transition-all cursor-pointer shadow-sm hover:shadow-md h-full flex flex-col"
              >
                {/* Скрываем блок с иконкой в контрастном режиме (dark-contrast:hidden) */}
                <div className={`size-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${item.iconBgClass} ${item.iconColorClass} dark-contrast:hidden`}>
                  <Icon className="size-7" />
                </div>
                
                <h3 className="font-bold text-xl text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-accent-hover)] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-[var(--color-text-secondary)] text-sm mb-6 flex-grow">
                  {item.shortDesc}
                </p>

                <div className="flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm mt-auto">
                  Читать подробнее <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Модальное окно с полным текстом */}
        <Dialog open={!!selectedAdvice} onOpenChange={(open) => !open && setSelectedAdvice(null)}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-[var(--color-bg-white)] border-[var(--color-card-border)] p-0 gap-0 dark-contrast:bg-black dark-contrast:text-white dark-contrast:border-gray-700">
            {selectedAdvice && (
              <>
                <div className={`p-6 md:p-8 border-b ${selectedAdvice.iconBgClass} dark-contrast:bg-gray-900`}>
                  <div className="flex items-center gap-4">
                    {/* Скрываем блок с иконкой в заголовке модального окна (dark-contrast:hidden) */}
                    <div className={`size-12 rounded-full flex items-center justify-center bg-white shadow-sm dark-contrast:hidden ${selectedAdvice.iconColorClass}`}>
                      <selectedAdvice.icon className="size-6" />
                    </div>
                    <DialogTitle className="font-sangha text-3xl md:text-4xl text-[var(--color-text-primary)] dark-contrast:text-white leading-tight">
                      {selectedAdvice.title}
                    </DialogTitle>
                  </div>
                  <DialogDescription className="sr-only">
                    Подробная информация: {selectedAdvice.title}
                  </DialogDescription>
                </div>
                
                <div className="p-6 md:p-8 text-base">
                  {selectedAdvice.content}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </PageWrapper>
  );
}
```

## File: app/yakutia/page.tsx
```typescript
"use client";

import Link from "next/link";
import { Mountain, Snowflake, Sun, Wind, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PageWrapper from "@/components/PageWrapper";

export default function YakutiaPage() {
  return (
    <PageWrapper>
      <article className="max-w-4xl mx-auto">
        
        {/* Заголовок */}
        <h1 
          className="font-sangha font-bold text-center mb-10 text-[var(--color-green-dark)]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          О Якутии
        </h1>

        {/* Твой текст (без изменений) */}
        <div 
          className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed text-justify" 
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
        >
          <p>
            Республика Саха (Якутия) - самый крупный регион России. Она расположена на северо-востоке страны и занимает площадь более 3 миллионов квадратных километров - это примерно пятая часть всей России. По территории Якутию можно сравнить с целой Индией, при этом население здесь чуть больше миллиона человек. Такое соотношение создаёт уникальную ситуацию: на огромных пространствах сохранилась нетронутая природа, а плотность населения остаётся одной из самых низких в стране.
          </p>
          <p>
            Природа поражает своим разнообразием. Здесь есть всё: бескрайняя тайга, горные хребты, тундра и арктическое побережье. По территории республики протекают крупнейшие реки - Лена, Вилюй и Алдан, а из недр добывают алмазы, золото, уголь и другие полезные ископаемые. Климат региона резко континентальный, с огромными перепадами температур: зимой морозы могут достигать -50°C и ниже, а летом воздух прогревается до +30°C и выше. Это край, где вечная мерзлота покрывает большую часть территории, а продолжительность дня меняется от нескольких часов зимой до почти круглосуточного света летом.
          </p>
          <p>
            Якутия  - это не только уникальная природа, но и богатейшая культура. Коренное население - якуты (саха) - веками сохраняли свой язык, традиции, эпос и ремёсла. Здесь почитают природу и духов предков, проводят национальные праздники и передают из поколения в поколение искусство резьбы по кости, ювелирного дела и горлового пения. Одновременно с этим в республике развиваются наука, образование и современное искусство, что делает Якутию регионом с живой и динамичной культурной жизнью.
          </p>
          <p>
            В последние годы республика активно развивает туристическую сферу. Строятся новые гостиницы, обновляются дороги и транспортная инфраструктура, появляются туристические кластеры и национальные парки. Всё больше людей приезжают сюда, чтобы увидеть северное сияние, сплавиться по рекам, побывать в горах или познакомиться с бытом и культурой коренных народов. Особое внимание уделяется созданию доступной среды. Разрабатываются маршруты с учётом потребностей маломобильных граждан, внедряются адаптированные экскурсии, а в туристической сфере всё чаще учитываются принципы инклюзивности.
          </p>
          <p>
            Это место, где суровые природные условия сочетаются с тёплым гостеприимством. Сюда приезжают не за курортным комфортом, а за настоящими впечатлениями: за ощущением бескрайнего пространства, за чистым воздухом и за редким чувством единения с природой. Это регион, который остаётся в памяти надолго и открывает Россию с совершенно другой, малоизвестной стороны. Якутия готова принимать гостей и показывает, что путешествие по северным территориям может быть комфортным и доступным для самого разного круга людей.
          </p>
        </div>

        {/* Сетка особенностей (обновленный дизайн) */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 mb-12">
          <Card className="p-6 bg-[var(--color-bg-white)] border-[var(--color-card-border)] hover:border-[var(--color-accent)]/50 transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 rounded-full bg-[#E8F0FE] flex items-center justify-center text-[#4A72B2]">
                <Snowflake className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Климат</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base">
              Резко континентальный. Зимой обязательна многослойная одежда. 
              Летом могут потребоваться репелленты и закрытая одежда для поездок на природу.
            </p>
          </Card>

          <Card className="p-6 bg-[var(--color-bg-white)] border-[var(--color-card-border)] hover:border-[var(--color-accent)]/50 transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 rounded-full bg-[#FFF4E5] flex items-center justify-center text-[#E38920]">
                <Sun className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Световой день</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base">
              В северных районах летом солнце не заходит сутками (белые ночи). 
              Это может влиять на сон, рекомендуем брать с собой маску для сна.
            </p>
          </Card>

          <Card className="p-6 bg-[var(--color-bg-white)] border-[var(--color-card-border)] hover:border-[var(--color-accent)]/50 transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 rounded-full bg-[#EAF2ED] flex items-center justify-center text-[var(--color-green-medium)]">
                <Mountain className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Природа</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base">
              Многие природные объекты труднодоступны и требуют подготовки. 
              Мы отмечаем на карте места, куда можно добраться с комфортом.
            </p>
          </Card>

          <Card className="p-6 bg-[var(--color-bg-white)] border-[var(--color-card-border)] hover:border-[var(--color-accent)]/50 transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 rounded-full bg-[#F3EBE1] flex items-center justify-center text-[var(--color-brown-medium)]">
                <Wind className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Традиции</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base">
              Якутский народ известен своим гостеприимством и глубоким уважением к природе. 
              Соблюдение местных обычаев сделает ваше путешествие приятнее.
            </p>
          </Card>
        </div>

        {/* Блок безопасности */}
        <Card className="p-8 bg-[var(--color-accent-light)]/20 border-[var(--color-accent-light)] border-2 mb-12 rounded-xl">
          <h3 className="text-2xl font-bold text-[var(--color-accent-dark)] mb-4 flex items-center gap-3">
            <MapPin className="size-6" />
            Важно для туристов с ОВЗ
          </h3>
          <ul className="space-y-3 text-[var(--color-brown-dark)] list-disc list-inside text-sm md:text-base">
            <li>
              <strong>Медицина:</strong> В Якутске есть отличные клиники, но в отдаленных районах помощь может быть затруднена. Всегда берите запас лекарств.
            </li>
            <li>
              <strong>Транспорт:</strong> Локальная логистика часто зависит от погоды. Закладывайте резервное время.
            </li>
            <li>
              <strong>Доступность:</strong> Используйте фильтры на нашей карте, чтобы найти проверенные адаптированные объекты.
            </li>
          </ul>
        </Card>

        {/* Кнопка перехода */}
        <div className="flex justify-center">
  <Button 
    asChild 
    size="lg" 
    className="
      bg-accent-custom hover:bg-[var(--color-accent-hover)] 
      text-[var(--color-text-white)] 
      px-8 py-6 text-lg rounded-xl font-bold shadow-md 
      transition-transform hover:scale-105
      high-contrast:text-black
    "
  >
    <Link href="/map">Перейти к карте объектов</Link>
  </Button>
</div>

      </article>
    </PageWrapper>
  );
}
```

## File: styles/globals.css
```css
@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --font-sans: 'Geist', 'Geist Fallback';
  --font-mono: 'Geist Mono', 'Geist Mono Fallback';
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
.leaflet-container {
  height: 100%;
  width: 100%;
  z-index: 1;
}

/* Попапы карты: карточка занимает попап целиком, без внутренних отступов Leaflet */
.custom-popup .leaflet-popup-content-wrapper {
  padding: 0;
  overflow: hidden;
  border-radius: 0.75rem;
}
.custom-popup .leaflet-popup-content {
  margin: 0;
  width: auto !important;
}
```

## File: next-env.d.ts
```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

## File: README.md
```markdown
# Доступная Якутия — Инклюзивный навигатор

Интерактивная карта медицинского и доступного туризма Республики Саха (Якутия).

## Возможности

- **12 тематических слоёв** — от инклюзивной среды до этномедицины
- **Гибкие фильтры доступности** — пандусы, шрифт Брайля, жестовый язык и многое другое
- **Персонализация** — автоматический подбор слоёв и фильтров на основе ваших потребностей
- **Адаптивный дизайн** — работает на компьютерах, планшетах и телефонах

## Слои карты

| Слой                   | Описание                                    |
| ---------------------- | ------------------------------------------- |
| Инклюзивный            | Объекты с доступной средой                  |
| Нарушения зрения       | Брайль, аудиоописание, тактильные экспонаты |
| Нарушения слуха        | Индукционные петли, визуальные табло        |
| Глухонемые             | Персонал со знанием жестового языка         |
| Пищевой слой           | Диабетическое, безглютеновое меню           |
| Сердечно-сосудистые    | Рядом с медучреждениями, кардио-диета       |
| Опорно-двигательный    | Пандусы, лифты, поручни                     |
| Ментальные особенности | Тихие зоны, сенсорно-дружественная среда    |
| Респираторные          | Чистый воздух, очистители                   |
| Семьи с детьми         | Детские комнаты, игровые зоны               |
| Народная медицина      | Травничество, якутская баня                 |
| Польза для здоровья    | Термальные источники, грязелечение          |

### Сайт будет доступен по адресу:

https://asyakhar.github.io/site-test-map/

### Категории объектов

`museum`, `hotel`, `restaurant`, `cafe`, `park`, `theater`, `medical`, `spa`, `monument`, `shopping`, `sports`, `nature`, `culture`, `entertainment`, `education`

### Доступные слои

`inclusive`, `vision_impaired`, `hearing_impaired`, `deaf_mute`, `dietary`, `cardiovascular`, `mobility`, `mental`, `respiratory`, `family`, `ethnomedicine`, `health`

## Лицензия

MIT License — свободное использование и модификация.

---

Сделано с ❤️ для доступной Якутии
```

## File: package.json
```json
{
  "name": "my-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint ."
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.1",
    "@radix-ui/react-accordion": "1.2.12",
    "@radix-ui/react-alert-dialog": "1.1.15",
    "@radix-ui/react-aspect-ratio": "1.1.8",
    "@radix-ui/react-avatar": "1.1.11",
    "@radix-ui/react-checkbox": "1.3.3",
    "@radix-ui/react-collapsible": "1.1.12",
    "@radix-ui/react-context-menu": "2.2.16",
    "@radix-ui/react-dialog": "1.1.15",
    "@radix-ui/react-dropdown-menu": "2.1.16",
    "@radix-ui/react-hover-card": "1.1.15",
    "@radix-ui/react-label": "2.1.8",
    "@radix-ui/react-menubar": "1.1.16",
    "@radix-ui/react-navigation-menu": "1.2.14",
    "@radix-ui/react-popover": "1.1.15",
    "@radix-ui/react-progress": "1.1.8",
    "@radix-ui/react-radio-group": "1.3.8",
    "@radix-ui/react-scroll-area": "1.2.10",
    "@radix-ui/react-select": "2.2.6",
    "@radix-ui/react-separator": "1.1.8",
    "@radix-ui/react-slider": "1.3.6",
    "@radix-ui/react-slot": "1.2.4",
    "@radix-ui/react-switch": "1.2.6",
    "@radix-ui/react-tabs": "1.1.13",
    "@radix-ui/react-toast": "1.2.15",
    "@radix-ui/react-toggle": "1.1.10",
    "@radix-ui/react-toggle-group": "1.1.11",
    "@radix-ui/react-tooltip": "1.2.8",
    "@vercel/analytics": "1.6.1",
    "autoprefixer": "^10.4.20",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "1.1.1",
    "date-fns": "4.1.0",
    "embla-carousel-autoplay": "^8.6.0",
    "embla-carousel-react": "8.6.0",
    "framer-motion": "^12.40.0",
    "input-otp": "1.4.2",
    "leaflet": "^1.9.4",
    "lucide-react": "^0.564.0",
    "next": "16.2.4",
    "next-themes": "^0.4.6",
    "react": "^19",
    "react-day-picker": "9.13.2",
    "react-dom": "^19",
    "react-hook-form": "^7.54.1",
    "react-leaflet": "^5.0.0",
    "react-resizable-panels": "^2.1.7",
    "recharts": "2.15.0",
    "sonner": "^1.7.1",
    "tailwind-merge": "^3.3.1",
    "vaul": "^1.1.2",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.2.0",
    "@types/leaflet": "^1.9.21",
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "postcss": "^8.5",
    "tailwindcss": "^4.2.0",
    "tw-animate-css": "1.3.3",
    "typescript": "5.7.3"
  }
}
```

## File: public/data/objects.json
```json
[
  {
    "id": "obj-01",
    "name": "Музей археологии и этнографии",
    "category": "museum",
    "layers": [
      "inclusive",
      "vision_impaired",
      "hearing_impaired",
      "deaf_mute",
      "dietary",
      "cardiovascular",
      "mental",
      "family",
      "ethnomedicine"
    ],
    "coordinates": [
      62.01711,
      129.704668
    ],
    "address": "г.Якутск ул. Кулаковского 48 правое крыло",
    "workingHours": "Вторник – пятница – 10.00 – 17.00\n\nСуббота – 11.00 – 16.00\n\nОбед – 13.00 – 14.00",
    "description": "Музей основан в 1972 году по инициативе \nпрофессора Г.П. Башарина. \nДо 1978 года работал как «народный музей».\nОснову коллекции составили материалы \nэкспедиций студентов и преподавателей 1968–2022 годов. \nЖемчужина музея — этнографическое собрание Г.Н. Копырина.\n\nЭкспозиция по этажам\n\n1 этаж — палеолит и мезолит: \nкаменные орудия древнейших людей, \nнаходки из пещеры Хайыргас (костяные орнаментированные игольники). \nРеконструкция быта первобытного общества.\n\n2 этаж — неолит и ранние металлы: \nкультура таёжных охотников и рыболовов, \nнаскальная живопись.\n\n3 этаж — этнография народов Севера: юкагиры, эвены, эвенки.\nКультура якутов от X до начала XX века. \nОтдельный раздел о землепроходцах XVII–XVIII веков.\n\nИнтерактивы\nПроводятся интерактивные экскурсии, \nлекции, мастер-классы, \nгде посетитель — полноправный участник.\n\nКартинная галерея\nВ составе музея — Картинная галерея (основана в 1968 году). \nБолее 700 единиц: графика, живопись. \nРаботы Кукрыниксов, Жукова, Яблонской, \nа также факсимиле Рафаэля, Рембрандта, \nВан Гога, Пикассо. \nЕсть картины якутских художников: \nКандинского, Осипова, Лукина, Сивцева и других.",
    "accessibility": {
      "vision_impaired": "Разрешен вход с собакой поводырем при условии предупреждения сотрудников музея заранее.",
      "hearing_impaired": "Поскольку музей является частью университета, возможно, они смогут организовать помощь студентами-волонтерами, владеющими жестовым языком.",
      "deaf_mute": "Поскольку музей является частью университета, возможно, они смогут организовать помощь студентами-волонтерами, владеющими жестовым языком.",
      "dietary": "На территории музея кафе нет. Ближайшее кафе находится в 5 минутах ходьмы от здания музея.",
      "cardiovascular": "В музее 3 этажа, подъем на которые возможен только по лестницам.",
      "mental": "Спокойная обстановка, рекомендуется посещение в утренне время, когда людей не так много.",
      "family": "Есть детская комната с раскрасками, выставкой игрушек, мастер-классами. Проводятся познавательные экскурсии и игровые программы.",
      "ethnomedicine": "В музее проводятся мастер-классы по народной медицине."
    },
    "contraindications": "Аллергия на пыль, клаустрофобия.",
    "tickets": "Цены (могут меняться): школьники ~50-100 руб.\nстуденты ~70-200 руб.\nвзрослые ~150-300 руб.",
    "benefits": "Бесплатно для льготных категорий граждан.",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/museum/arheology-etno-museum/main.jpg"
    ],
    "contacts": {
      "phone": "+7 (4112) 49-68-41",
      "website": "https://archivogram.top/museum/15-muzey_arheologii_etnografii_i_istorii_vysshey_shkoly_federalynogo_gosudarstvennogo_avtonomnogo_obrazovatelynogo_uchrezhdeniya_vysshego_obrazovaniya_severo-wostochnyy_federalynyy_universitet_imeni_mk_ammosova"
    }
  },
  {
    "id": "obj-02",
    "name": "Царство вечной мерзлоты (гора Чочур Муран)",
    "category": "entertainment",
    "layers": [
      "inclusive",
      "mobility",
      "vision_impaired",
      "deaf_mute",
      "cardiovascular",
      "respiratory"
    ],
    "coordinates": [
      62.044089,
      129.624172
    ],
    "address": "г. Якутск, Вилюйский тракт, 7-й километр, 1",
    "workingHours": "Ежедневно 10:00 - 19:00",
    "description": "Царство вечной мерзлоты — это туристический комплекс, который представляет собой гигантский нетающий ледник в штольне у сопки Чочур-Муран, что примерно в 10 км от Якутска. В советское время штольня этой сопки предназначалась для хранения продуктов. Температура воздуха внутри ледника достигает до -6°C, но из-за влажности ощущается как -15°C. Экскурсия занимает примерно час-полтора. Для иностранных туристов за отдельную плату можно заказать экскурсию на английском языке. Если приехать в Царство вечной мерзлоты группой от 10 человек и более, то услуги гида предоставляются абсолютно бесплатно. Ледяная пещера делится на многочисленные залы. На входе в пещеру первыми идут тронный зал властелина холода Чысхаана и резиденция Деда Мороза, который ежегодно прибывает сюда из Великого Устюга и принимает гостей. Следующим идет церемониальный зал, который предназначен для осуществления обрядов благословения и церемоний очищения. Далее идет третий зал, где можно увидеть скульптуру ледяного человека, Хозяина Севера. Согласно местной легенде, он создает живых существ и животных изо льда и вдыхает в них жизнь. Затем по коридорам идут множество других залов, где можно увидеть огромное разнообразие ледяных скульптур, например, скульптуру Венеры Милосской, ледяного Будду. Еще одной уникальной скульптурой в не тающем леднике стало Древо жизни — Аал Луук Мас. По мифологии местных жителей мироздание состоит из 3 миров: Верхнего, Среднего и Нижнего. В середине находится Аал Лук Мас — священное Древо, его корни идут в Нижний враждебный мир, крона растет в Среднем, где живут сами люди и их духи, а ветви Древа тянутся в небо, где пребывает Верховное Божество. Среди залов также можно обнаружить комнату Байаная (духа охоты, покровителя животных и птиц). Кроме того, есть зал рыбака со скульптурами рыб и необычный ледяной лабиринт. В одном из многочисленных ледяных залов расположился небольшой музей палеонтологии, где представлена экспозиция костей и других останков мамонтов и прочих животных, которые сохранились в местной мерзлоте.",
    "accessibility": {
      "mobility": "Широкие дверные проёмы, минимальное количество ступенек на пути следования, в организации ровное покрытие полов, предусмотрена парковка рядом со входом, передвижение на коляске обязательно в сопровождении знакомого человека.",
      "vision_impaired": "Разрешен вход с собакой поводырем.",
      "deaf_mute": "Удобное общение с персоналом через мессенджер, предоставляется письменное описание экспонатов по маршруту проведения экскурсии.",
      "cardiovascular": "На территории нет крутых подъёмов или лестниц.",
      "respiratory": "В организации есть вентиляция, на территории туристического комплекса запрещено курение, на территории не используются ароматизаторы."
    },
    "contraindications": "Клаустрофобия.",
    "tickets": "Взрослый — 700 руб., льготный — 450 руб., (при наличии удостоверения), детский льготный — 250 руб. (при наличии удостоверения), семейный (2 взрослых + 1 детский) — 1 600 руб., семейный (2 взрослых + 2 детских) — 2 000 руб., студенты (при предъявлении студенческого билета) — 450 руб., детский (6 - 18 лет) — 450 руб., детский групповой (от 10 человек) — 300 руб., детский льготный — 200 руб., услуги гида — 300 рублей на группу.",
    "benefits": "Льготы предоставляются пенсионерам, ветеранам труда, инвалидам, многодетным родителям, участникам СВО, молодожёнам в течение 1 месяца со дня заключения брака, детям из многодетных семей, детям участников СВО.",
    "notes": "Есть возможность посетить организацию без предварительной записи в группе до 10 человек, посетителям разрешено входить и выходить в любое время без жёсткого следования плану, есть возможность сделать персонализированную экскурсию для маленькой группы.",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/tourism/permafrost-kingdom/main.jpg"
    ],
    "contacts": {
      "phone": "89142727110"
    }
  },
  {
    "id": "obj-03",
    "name": "Музей мамонта им. П.А. Лазарева",
    "category": "museum",
    "layers": [
      "inclusive",
      "mobility",
      "vision_impaired",
      "deaf_mute",
      "cardiovascular",
      "respiratory"
    ],
    "coordinates": [
      62.01711,
      129.704597
    ],
    "address": "г. Якутск, ул. Кулаковского, 48",
    "workingHours": "вт-пт 10:00 - 17:00, обед 13-14, пн, сб, вс - выходной",
    "description": "Специализированный научный и культурный центр является единственным в мире местом, полностью посвященным изучению мамонтовой фауны ледникового периода. Коллекция музея впечатляет своим масштабом и уникальностью: здесь собрано более 2000 костных остатков древних животных. Гости могут увидеть не только мастерски восстановленные скелеты мамонтов, шерстистых носорогов и первобытных бизонов, но и совершенно невероятные экспонаты — фрагменты туш с сохранившимися мягкими тканями. Благодаря вечной мерзлоте Якутии, эти находки дошли до нас в поразительной сохранности через десятки тысяч лет. В 2011 году музей официально стал частью Северо-Восточного федерального университета, что дало новый импульс международным научным проектам и полевым работам. Сегодня музей — это не только туристический объект, но и передовая лаборатория. Здесь изучают ДНК древних животных и реконструируют экосистему ледникового периода.",
    "accessibility": {
      "mobility": "Пандус на входе при входе через университет, широкие дверные проёмы, в организации ровное покрытие полов, предусмотрена парковка рядом со входом, передвижение на коляске предусмотрена в сопровождении сотрудника (при предупреждении заранее) или знакомого человека",
      "vision_impaired": "Разрешен вход с собакой поводырем при условии предупреждения сотрудников музея заранее",
      "deaf_mute": "Удобное общение с персоналом через мессенджер, наглядное визуальное дополнение по ходу пребывания в организации, предоставляется письменное описание экспонатов по маршруту проведения экскурсии",
      "cardiovascular": "Аптека в 5-10 минутах ходьбы от организации, на территории расположены зоны отдыха в виде стульев.",
      "respiratory": "На территории музея используют очистители воздуха, на территории организации запрещено курение, на территории организации не используют ароматизаторы, влажная уборка помещений проводится несколько раз в неделю, влажная уборка экспонатов проводится один раз в неделю"
    },
    "tickets": "Взрослый: с экскурсией - 550 руб., без экскурсии - 350 руб, школьники: с экскурсией - 200 руб., без экскурсии - 100 руб.",
    "benefits": "Льготы предоставляются пенсионерам, ветеранам труда, инвалидам, многодетным родителям, участникам СВО, молодожёнам в течение 1 месяца со дня заключения брака, детям из многодетных семей, детям участников СВО.",
    "notes": "Есть возможность посетить организацию без предварительной записи в группе до 10 человек, посетителям разрешено входить и выходить в любое время без жёсткого следования плану экскурсии, персонализированная экскурсия для маленькой группы.",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/museum/mammoth-museum/main.jpeg"
    ],
    "contacts": {
      "phone": "84112361647",
      "website": "https://www.s-vfu.ru/universitet/rukovodstvo-i-struktura/instituty/niipes/mammoth/",
      "yandexMap": "https://yandex.ru/maps/org/laboratoriya_muzey_mamonta_imeni_p_a_lazareva/1261772909/?ll=129.703881%2C62.016897&z=16.52"
    }
  },
  {
    "id": "obj-04",
    "name": "Сокровищница Республики Саха (Якутия)",
    "category": "museum",
    "layers": [
      "inclusive",
      "mobility"
    ],
    "coordinates": [
      62.025845,
      129.734661
    ],
    "address": "г. Якутск, ул. Кирова, 12",
    "workingHours": "Пн-вт 10:00-17:00, сб-вс выходной.\nЛетний режим работы:\nВт-Сб – 10:00-17:00.\nВс-Пн – Выходные.",
    "description": "Сокровищница Якутии — уникальный музейно-выставочный комплекс, знакомящий посетителей с природными богатствами Республики Саха (Якутия). В экспозиции представлены драгоценные алмазы, золото, серебро, редкие минералы и ювелирные изделия, отражающие богатство недр крупнейшего региона России. Особое место занимают уникальные образцы алмазов, в том числе крупные кристаллы и коллекционные экземпляры, найденные на территории Якутии.\n\nЭкспозиция позволяет проследить историю открытия и освоения месторождений полезных ископаемых, узнать о развитии алмазодобывающей промышленности и её значении для экономики республики. Посетители могут познакомиться с процессом формирования драгоценных камней, особенностями их добычи и обработки, а также увидеть произведения якутских мастеров-ювелиров, сочетающие современные технологии и национальные художественные традиции.\n\nСокровищница Якутии является не только выставочным пространством, но и важным культурно-просветительским объектом, позволяющим глубже понять уникальную природную историю региона и его роль в мировой алмазной индустрии.",
    "accessibility": {
      "mobility": "Широкие дверные проемы и ровное покрытие полов."
    },
    "tickets": "Посетители, не имеющие льгот - 500 руб.",
    "benefits": "Пенсионеры, школьники и студенты (при предъявлении подтверждающих документов) - 150 руб.\n\nЛьготные категории (герои Советского Союза, герои РФ, герои Социалистического Труда, герои Труда РФ, полные кавалеры ордена Славы, ветераны ВОВ, дети до 7 лет в сопровождении взрослых, члены многодетных семей, инвалиды I — II группы, дети-инвалиды и лица, их сопровождающие (в количестве 1 человек, для инвалидов-колясочников не более 2 человек) - бесплатно при предъявлении подтверждающих документов.",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/museum/treasury/main.jpg"
    ],
    "contacts": {
      "phone": "84112425290",
      "website": "https://www.expo-gx.ru/",
      "yandexMap": "https://yandex.ru/maps/org/sokrovishchnitsa_respubliki_sakha/1885946530/?ll=129.735430%2C62.025833&z=16"
    }
  },
  {
    "id": "obj-05",
    "name": "ГБУ РС(Я) «Якутский государственный объединенный музей истории и культуры народов Севера им. Ем. Ярославского» ГБУ РС(Я) «Якутский музей»",
    "category": "museum",
    "layers": [
      "inclusive",
      "mobility",
      "vision_impaired",
      "hearing_impaired",
      "cardiovascular"
    ],
    "coordinates": [
      62.030598,
      129.746539
    ],
    "address": "Республика Саха (Якутия), Якутск, проспект Ленина, 5/2к2",
    "workingHours": "Пн – выходной\nВт-вс – 10:00-17:00\n\nПоследняя пятница каждого месяца – санитарный день\nКасса закрывается в 16:30 ч.",
    "description": "Якутский государственный объединённый музей истории и культуры народов Севера им. Ем. Ярославского — старейший музей Республики Саха (Якутия), основанный в 1887 году, и один из крупнейших музеев Северо-Востока России. В его фондах хранится более 130 тысяч экспонатов, отражающих историю, природу, археологию и культуру народов Якутии.\n\nЭкспозиции музея знакомят посетителей с традиционным бытом якутов, эвенков, эвенов, юкагиров и других коренных народов Севера, рассказывают об истории освоения региона, археологических открытиях и уникальном природном мире Якутии. Среди наиболее ценных экспонатов — предметы материальной и духовной культуры народов Севера, археологические находки, а также палеонтологические коллекции, включающие останки животных ледникового периода.\n\nМузей является важным научно-просветительским центром республики и позволяет посетителям получить целостное представление об истории, культуре и многообразии народов, населяющих Якутию.",
    "accessibility": {
      "mobility": "Для посетителей, передвигающихся на креслах-колясках, предусмотрены пандус и доступный вход в здание. Между этажами можно воспользоваться подъемником. На прилегающей территории имеются парковочные места для людей с инвалидностью. Также в музее оборудован специализированный санитарный узел.",
      "vision_impaired": "Для посетителей с нарушением зрения: Тактильные копии экспонатов (можно трогать руками), этикетки со шрифтом Брайля на русском и якутском языках, аудиосопровождение (звуки природы, пение птиц).",
      "hearing_impaired": "Для посетителей с нарушением слуха: Экскурсии на русском жестовом языке (по запросу/предварительной договоренности).",
      "cardiovascular": "Аптека в 5 минутах хотьбы от организации, на территории расположены зоны отдыха."
    },
    "tickets": "· Взрослые: 300 руб.\n· Пенсионеры РФ (включая ветеранов труда): 200 руб.\n· Студенты вузов и учащиеся ПОО (кроме вторника): 200 руб.\n· Граждане РФ до 18 лет (кроме вторника): 100 руб.\n· Семейный билет (от 3 чел.): 250 руб. за человека\n· Туристическая группа (от 10 чел.): 250 руб. за человека",
    "benefits": "Льготные категории (бесплатный вход):\n\n· Дети до 5 лет\n· Многодетные семьи (дети и родители)\n· Герои СССР/РФ, полные кавалеры ордена Славы\n· Ветераны ВОВ, боевых действий, ликвидаторы аварии на ЧАЭС\n· Члены семей участников СВО и пропавших без вести в ходе СВО\n· Инвалиды 1 и 2 группы, дети-инвалиды\n· Сотрудники музеев РФ и члены ИКОМ\n· Члены Российского военно-исторического общества\n· Сопровождающие (1 на 10 детей или 1 на инвалида 1–2 гр.)\n· По вторникам: студенты и граждане РФ до 18 лет\n\nВсе льготы — при предъявлении подтверждающего документа.",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/museum/yaroslavsky-museum/main.jpg"
    ],
    "contacts": {
      "phone": "84112425174",
      "website": "https://yakutmuseum.ru/",
      "yandexMap": "https://yandex.ru/maps/-/CPwYn4oU"
    }
  },
  {
    "id": "obj-06",
    "name": "Институт мерзлотоведения им. П.И. Мельникова СО РАН",
    "category": "museum",
    "layers": [
      "inclusive",
      "mobility"
    ],
    "coordinates": [
      62.01119,
      129.662136
    ],
    "address": "Республика Саха (Якутия), г. Якутск, ул. Мерзлотная, 36",
    "workingHours": "Понедельник – пятница: 09:00–17:00\nСуббота – воскресенье: по предварительной договорённости",
    "description": "Институт мерзлотоведения им. П.И. Мельникова СО РАН — один из ведущих научных центров России по изучению многолетнемёрзлых пород и процессов, происходящих в криолитозоне. Институт был организован в 1960 году, а в 1995 году ему было присвоено имя его основателя и первого директора — академика Павла Ивановича Мельникова. Основными направлениями научной деятельности являются исследование эволюции вечной мерзлоты под влиянием природных и антропогенных факторов, а также инженерная геокриология.\n\nНа территории института действует Музей истории изучения вечной мерзлоты, открытый в 2006 году. Музей выполняет научно-просветительские и образовательные функции и знакомит посетителей с историей развития мерзлотоведения в Якутии и России.\n\nЭкскурсионный маршрут включает несколько объектов. В экспозиционно-выставочном зале представлены материалы об истории исследований вечной мерзлоты, научные приборы, архивные документы, редкие издания, фотографии экспедиций и разработки сотрудников института. Отдельная часть экспозиции посвящена жизни и научной деятельности академика П.И. Мельникова, где восстановлен его рабочий кабинет.\n\nОсобое место занимает подземная лаборатория института и знаменитая Шахта Шергина — уникальный научный объект, где можно увидеть толщу многолетней мерзлоты возрастом около 10 тысяч лет, остатки древней флоры и элементы исследовательского оборудования. Подземный маршрут проходит по системе галерей и помещений на глубине от 4 до 15 метров и позволяет познакомиться с особенностями изучения мерзлых грунтов в естественных условиях.\n\nТакже посетителям рассказывают о современных исследованиях института, работе криохранилища и значении мерзлотоведения для развития северных территорий.",
    "accessibility": {
      "mobility": "Часть наземных помещений доступна для посещения на колясках, посещение подземной лаборатории для людей с проблемами передвижения не предусмотрено"
    },
    "contraindications": "Не рекомендуется людям с выраженной клаустрофобией при посещении подземной лаборатории.",
    "tickets": "Минимальная стоимость посещения — от 1500 руб. Стоимость экскурсий определяется действующими тарифами института.\nВзрослые:\n - 1 посетитель в группе от 3 человек - 500 руб.\nСтуденты:\n - 1 посетитель в группе более 15 человек - 200 руб.\n - 1 посетитель в группе до 15 человек - 250 руб.\nШкольники:        \n- 1 посетитель в группе более 15 человек -150 руб\n- 1 посетитель в группе до 15 человек  - 180 руб\nДошкольники - бесплатно.",
    "benefits": "Предоставляется скидка на экскурсию многодетным семьям, участникам СВО и членам их семей в размере 50%, инвалидам и неработающим пенсионерам - 30% (при предъявлении соответствующего документа).",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/education/permafrost-institute/main.jpg"
    ],
    "contacts": {
      "phone": "8 (4112) 33-44-76",
      "website": "https://xn--80ancqheog.xn--p1ai/?page_id=615",
      "yandexMap": "https://yandex.ru/maps/org/fgbun_institut_merzlotovedeniya_im_p_i_melnikova_sibirskogo_otdeleniya_rossiyskoy_akademii_nauk/1292222988/?ll=129.662136%2C62.011190&z=7"
    }
  },
  {
    "id": "obj-07",
    "name": "Старый город",
    "category": "museum",
    "layers": [
      "inclusive",
      "mobility",
      "vision_impaired",
      "dietary",
      "family"
    ],
    "coordinates": [
      62.024127,
      129.736445
    ],
    "address": "г. Якутск, ул. Аммосова, 6/1",
    "workingHours": "Территория комплекса открыта ежедневно, круглосуточно.",
    "description": "«Старый город» — историко-архитектурный комплекс, расположенный в центральной части Якутска. Он представляет собой реконструированный квартал, воссоздающий атмосферу старого города XIX века. Несмотря на исторический облик, большинство построек комплекса являются современными реконструкциями зданий, утраченных вследствие крупных пожаров и демонтажа исторической застройки в конце XX века. Работы по восстановлению территории начались в начале 2000-х годов, а для посетителей комплекс был открыт в 2006 году.\n\nТерритория комплекса считается своеобразным музеем под открытым небом. Здесь можно увидеть здания, выполненные в стиле старого Якутска: деревянную шатровую башню Якутского острога, основанного Петром Бекетовым, торговые ряды «Кружало», здание Русско-Азиатского банка, Градоякутскую Преображенскую церковь и другие архитектурные объекты.\n\nОсобую атмосферу создают улицы, оформленные под старинное деревянное мощение, прогулочные зоны и исторические фасады зданий. Внутри комплекса расположены сувенирные магазины, культурные площадки, кафе и пространства для проведения городских мероприятий.\n\n«Старый город» является популярным местом прогулок, фотосессий и знакомства с историей столицы Республики Саха (Якутия). Здесь регулярно проходят праздничные мероприятия, выставки и культурные события.",
    "accessibility": {
      "mobility": "Большая часть прогулочных зон доступна для самостоятельного передвижения на инвалидной коляске, имеются широкие проходы и ровные участки покрытия.",
      "vision_impaired": "Посещение с собакой-поводырём: разрешено.",
      "dietary": "На территории имеются кафе, рестораны якутской и европейской кухни.",
      "family": "подходит для семейного отдыха, прогулок. Проводятся квесты и мероприятия для семей."
    },
    "tickets": "Посещение территории — бесплатно.",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/tourism/old-town/main.jpeg"
    ],
    "contacts": {
      "phone": "8 (4112) 45-03-96",
      "website": "https://www.inyakutia.ru"
    }
  },
  {
    "id": "obj-08",
    "name": "Музей и центр Хомуса Народов Мира",
    "category": "museum",
    "layers": [
      "inclusive",
      "mobility",
      "vision_impaired",
      "hearing_impaired",
      "dietary"
    ],
    "coordinates": [
      62.033197,
      129.717784
    ],
    "address": "Республика Саха (Якутия), г. Якутск, ул. Кирова, 31",
    "workingHours": "Режим работы: Пн–Пт: 09:00–18:00; Сб: 10:00–17:00; Вс: выходной. Обед с 13:00 до 14:00.По соглашению с Северо-восточным федеральным университетом имени М.К. Аммосова для студентов наш музей проводит бесплатные занятия по игре на хомусе по вторникам и четвергам с 16.00 до 17.30.\n\n(В праздничные дни возможны дежурства, можно прийти на экскурсии созвонившись по телефону: 8 (4112) 42-86-75) .",
    "description": "Единственный в мире музей, посвященный варгану (хомусу). В фондах музея хранится более 1800 хомусов народов мира, включая инструменты из Японии, Монголии, Венгрии и других стран . Экспозиция рассказывает об истории происхождения инструмента, его эволюции и культуре игры на нем 57 народов мира . Выставка знакомит с творчеством знаменитых мастеров-изготовителей и исполнителей.",
    "accessibility": {
      "mobility": "Посещение для людей с проблемами передвижения (которым требуется переджвижение на инвалидной коляске) предусмотрено только на первом этаже, на 1 этаж есть пандус, а так же есть пандус на входе. Возможен вызов персонала для помощи. Достаточное пространство для проезда коляски. Но сам музей находится на третьем этаже, подъемников нет, поэтому посещение возможно только первого этажа.",
      "vision_impaired": "Имеется шрифт Браиля, но не везде, - несколько табличек о музее. В основном информация от экскурсовода.",
      "hearing_impaired": "Нарушение слуха: Информация дублируется с помощью визуальных средств (таблички, дисплеи)",
      "dietary": "На первом этаже здания, где находится музей, есть несколько кафе и продуктовый магазин."
    },
    "tickets": "Стоимость билетов:\nГраждане Российской федерации, студенты заочного отделения ССУЗ-ов, ВУЗ-ов, граждане\nгосударств-членов Евразийского экономического союза (Армения, Белоруссия, Казахстан, Киргизия).  – 200 руб\n Дошкольники и учащиеся школ — бесплатно. ;\n· Студенты (очного отделения ССУЗов и ВУЗов до 18 лет) — бесплатно ;\n· Студенты (очники старше 18 лет) — 150 руб.;\nИнвалиды 3 группы, пенсионеры, ветераны труда\n(по предъявлению документа) – 100 руб\n· Иностранные граждане — 400 руб. \nЭкскурсия для всех категорий (от 2-х человек) 150 руб\nИндивидуальная экскурсия 300 руб\nДемонстрация игры на хомусе 500 руб",
    "benefits": "Право на бесплатное посещение музея имеют (по предъявлению документов):\nВетераны ВОВ, тыла, вдовы воинов ВОВ, Герои социалистического труда, Герои России, Герои войны, полные кавалеры Ордена Славы, \nучастники СВО и члены их семей, инвалиды 1-2 групп, инвалиды детства, дети-сироты, многодетные\nсемьи, сотрудники музея системы МК РФ, не более 2 сопровождающих для организованных групп (в группе от 10 и более)",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/museum/khomus-museum/main.jpg"
    ],
    "contacts": {
      "phone": "8(4112)42-86-75",
      "website": "https://rus.ilkhomus.com/",
      "yandexMap": "https://yandex.ru/maps/-/CPgjUGJI"
    }
  },
  {
    "id": "obj-09",
    "name": "Национальный художественный музей Республики Саха (Якутия)",
    "category": "museum",
    "layers": [
      "inclusive",
      "mobility",
      "vision_impaired",
      "dietary",
      "cardiovascular",
      "respiratory",
      "mental",
      "family"
    ],
    "coordinates": [
      62.026382,
      129.745318
    ],
    "address": "г. Якутск, ул. Кирова, 9",
    "workingHours": "(Среда):\n12:00 - 20:00\n (Ост. дни):\n10:00 - 18:00\nВыходные: пн, вт",
    "description": "Крупнейший художественный музей Якутии. Коллекция включает якутское изобразительное искусство, иконопись, графику, скульптуру, декоративно-прикладное искусство, а также произведения российских мастеров. Проводятся временные выставки, лекции, экскурсии.",
    "accessibility": {
      "mobility": "Есть пандусы, доступность ограничена (старое здание — частично, новое — лучше приспособлено).",
      "vision_impaired": "Возможно проведение экскурсии с описанием — по предварительному запросу.",
      "dietary": "Музейный буфет: чай, кофе, выпечка. Диетического меню нет..",
      "cardiovascular": "На территории музея есть аптечка первой помощи.",
      "respiratory": "Внутри музея сухой воздух, кондиционирование.",
      "mental": "Спокойная обстановка. Нет сенсорных комнат. Рекомендуется посещение в утренние часы, когда меньше людей.",
      "family": "Детские экскурсии, мастер-классы по рисованию, лепке."
    },
    "contraindications": "клаустрофобия (в старых залах);\nаллергия на пыль (старые экспонаты).",
    "tickets": "Стоимость входных билетов:\n\nВзрослые (граждане РФ) — 300 ₽\nПенсионеры — 200 ₽\nСтуденты — 200 ₽\nЛица до 18 лет — Бесплатно\nМногодетные семьи — Бесплатно\nСтуденты-художники — Бесплатно\nИностранные граждане — 500 ₽\n\nОбзорная экскурсия\nВзрослые (граждане РФ) — 300 ₽\nПенсионеры — 250 ₽\nСтуденты — 250 ₽\nЛица до 18 лет — 200 ₽\nМногодетные семьи — 150 ₽\nИностранные граждане — 1000 ₽\n\nТематическая экскурсия\n\nВзрослые (граждане РФ) — 350 ₽\nПенсионеры — 350 ₽\nСтуденты — 250 ₽\nЛица до 18 лет — 250 ₽\nМногодетные семьи — 150 ₽\nИностранные граждане — 600 ₽",
    "benefits": "Лица до 18 лет — Бесплатно\nМногодетные семьи — Бесплатно\nСтуденты-художники — Бесплатно",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/museum/national-art-museum/main.jpg"
    ],
    "contacts": {
      "phone": "33-52-80",
      "website": "https://sakhamuseum.ru/",
      "yandexMap": "https://sakhamuseum.ru/posetitelyam/zdaniya-i-chasy-raboty/"
    }
  },
  {
    "id": "obj-10",
    "name": "Усадьба Атласовых",
    "category": "entertainment",
    "layers": [
      "inclusive",
      "mobility",
      "vision_impaired",
      "dietary",
      "cardiovascular",
      "respiratory",
      "mental",
      "family",
      "ethnomedicine",
      "health"
    ],
    "coordinates": [
      62.043435,
      129.633578
    ],
    "address": "Вилюйский тракт 6 километр, 15",
    "description": "Этнический комплекс в стиле якутского средневековья. Включает воссозданные башни, юрты, кузницу, конюшню, дом купца. Проводятся обряды благословения (алгыс), мастер-классы по выделке шкур, кузнечному делу, дегустация якутской кухни (строганина, кумыс, оладьи), конные прогулки, катание на санях. Полное погружение в культуру якутского народа.",
    "accessibility": {
      "mobility": "Есть пандусы, но территория большая, частично грунтовые дорожки. Требуется помощь при передвижении (не полностью адаптировано).",
      "vision_impaired": "Нет специальных приспособлений. Экскурсовод может голосом описывать экспонаты.",
      "dietary": "Полноценное кафе с якутской кухней. Возможно приготовление блюд по запросу (в т.ч. для диабетиков, аллергиков — предварительно обсуждается с администратором).",
      "cardiovascular": "На территории нет медпункта. Аптечка есть. При ухудшении вызов скорой",
      "respiratory": "Открытая территория, чистый лесной воздух полезен для людей с нарушениями дыхательной системы.",
      "mental": "Активная программа с обрядами. Может быть перегрузка для людей с аутизмом. Возможно посещение без громких обрядов по предварительной договорённости",
      "family": "Контакт с лошадьми, катания, обряды, сладости, мастер-классы. Есть игровые зоны.",
      "ethnomedicine": "Есть травяные чаи, кумыс, обряды очищения, фитобочка.",
      "health": "Активный отдых, прогулки, свежий воздух, этно-релаксация, снижение стресса"
    },
    "contraindications": "аллергия на лошадей / сено; пищевые аллергии (строганина — сырая рыба);\nэпилепсия (яркие обряды с огнём, громкие звуки).",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/tourism/atlasov-estate/main.jpg"
    ],
    "contacts": {
      "phone": "Запись только через whatsapp +79644216666.",
      "website": "https://atlasovpark.ru/",
      "yandexMap": "https://atlasovpark.ru/"
    }
  },
  {
    "id": "obj-11",
    "name": "Симэх. Национальный центр народного прикладного искусства и художественных промыслов",
    "category": "culture",
    "layers": [
      "inclusive",
      "mobility",
      "vision_impaired",
      "deaf_mute",
      "cardiovascular",
      "respiratory",
      "mental"
    ],
    "coordinates": [
      62.040661,
      129.740485
    ],
    "address": "г. Якутск, ул. Пояркова, д. 4, каб. 302",
    "workingHours": "пн-чт 10:00–18:00, пт 10:00–17:00, перерыв 13:00–14:00, сб–вс выходной",
    "description": "Национальный центр народного прикладного искусства и художественных промыслов «Симэх» создан для сохранения, возрождения и развития традиционных ремесел и художественных промыслов народов Республики Саха (Якутия). На сегодня учреждение ведет выставочно-ярмарочную деятельность как в Якутии, так и в других регионах России и дальнего зарубежья, проводит экспертизу в сфере народных художественных промыслов и работает с носителями традиций. Деятельность Центра «Симэх» способствует развитию инфраструктуры народных промыслов в республике, включая создание Домов ремесел в улусных центрах, что дает импульс дальнейшему росту прикладного искусства и традиционных ремесел. За 30 лет проведено свыше 2000 мероприятий, возрождены и сохранены многие традиционные технологии, вырос уровень технического мастерства изделий, а также увеличилось число мастеров по различным видам народного искусства.",
    "accessibility": {
      "mobility": "Необходим подъём третий этаж. Широкие дверные проёмы, в организации ровное покрытие полов, передвижение на коляске предусмотрено в сопровождении сотрудника или знакомого человека.",
      "vision_impaired": "Тактильные полосы на полу для лучшего ориентирования, наличие мнемосхем и табличек с шрифтом Брайля.",
      "deaf_mute": "Удобное общение с персоналом через мессенджер, предоставляется письменное описание экспонатов по маршруту проведения экскурсии.",
      "cardiovascular": "Аптека в пяти минутах ходьбы",
      "respiratory": "Организация использует очистители воздуха. На территории национального центра запрещено курение. Уборка проводится каждый день утром и вечером.",
      "mental": "Есть возможность посетить организацию без предварительной записи группой до 10 человек, посетителям разрешено входить и выходить в любое время без жёсткого следования плану экскурсии, возможно провести экскурсию для маленькой группы."
    },
    "tickets": "взрослый - 200руб., детский - 100 руб., льготный взрослый - 100 руб., детский льготный - 50 руб., дети до пяти лет - бесплатно",
    "benefits": "Пенсионеры по возрасту, ветераны труда, инвалиды 2 и 3 группы, многодетные родители, участники СВО, дети из многодетных семей, дети участников СВО",
    "notes": "Сама организация находится на третьем этаже, лифта нет, но большинство выставок проходят на первом этаже.",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/tourism/simekh/main.jpg"
    ],
    "contacts": {
      "phone": "+7(411)232-82-79, почта: ncnpi@gov14.ru, социальные сети: https://t.me/simekhsakha, https://vk.com/club215972612, https://ok.ru/group/70000001027472"
    }
  },
  {
    "id": "obj-12",
    "name": "Северо-Восточный федеральный университет им. М.К.Аммосова (СВФУ)",
    "category": "education",
    "layers": [
      "inclusive",
      "vision_impaired",
      "hearing_impaired",
      "deaf_mute"
    ],
    "coordinates": null,
    "address": "677000, Республика Саха (Якутия), г. Якутск, ул. Белинского, д. 58",
    "workingHours": "Большинство административных подразделений работают с 09:00 до 17:00 в будни, с перерывом на обед с 13:00 до 14:00. Суббота и воскресенье — выходные дни.",
    "description": "Северо-Восточный федеральный университет имени М. К. Аммосова — многоотраслевой федеральный университет в Якутске, имеющий филиалы в Анадыре, Мирном и Нерюнгри; крупнейшее высшее учебное заведение в Республике Саха и Чукотском автономном округе, а также научно-образовательный центр Северо-Востока России. В его структуру входят 12 институтов, 5 факультетов, 5 научно-исследовательских институтов и 3 филиала (в Мирном, Нерюнгри и Анадыре). Полный список институтов СВФУ: Горный институт, Инженерно-технический институт, Институт естественных наук, Институт зарубежной филологии и регионоведения, Институт математики и информатики, Медицинский институт, Педагогический институт, Институт психологии, Институт физической культуры и спорта, Физико-технический институт, Финансово-экономический институт, Институт языков и культуры народов Северо-Востока РФ.",
    "accessibility": {
      "vision_impaired": "Официальный сайт и электронная образовательная среда имеют специальную «версию для слабовидящих». Справочная информация дублируется крупным рельефно-контрастным шрифтом или шрифтом Брайля. Предоставляются аудиофайлы, электронные документы, программы экранного доступа и синтезаторы речи. При необходимости выделяется ассистент (помощник) для сопровождения, также разрешено присутствие собаки-поводыря.",
      "hearing_impaired": "Учебные аудитории могут оснащаться звукоусиливающей аппаратурой и FM-системами для беспроводной передачи звука.",
      "deaf_mute": "Для студентов с нарушениями слуха материалы предоставляются в виде электронных документов или видео с титрами или сурдопереводом."
    },
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/education/svfu/main.jpg"
    ],
    "contacts": {
      "phone": "7 (4112) 35-20-90",
      "website": "https://www.s-vfu.ru/sveden/common/",
      "yandexMap": "https://yandex.ru/maps/-/CTEIBY-A"
    }
  },
  {
    "id": "obj-13",
    "name": "Национальный центр медицины им. М.Е. Николаева",
    "category": "medical",
    "layers": [
      "inclusive",
      "mobility",
      "vision_impaired",
      "hearing_impaired",
      "deaf_mute",
      "dietary",
      "cardiovascular",
      "respiratory",
      "family",
      "health"
    ],
    "coordinates": [
      62.007212,
      129.664805
    ],
    "address": "Сергеляхское ш., 4, Якутск",
    "workingHours": "ПН-ПТ 08:00-18:00       СБ-ВС-выходные",
    "description": "Многопрофильный медицинский центр им. первого президента Якутии. Включает поликлинику для взрослых и детей, стационар на 400+ коек, центр хирургии, кардиохирургическое отделение, ЛОР-центр, реабилитационный центр, отделение лучевой диагностики (МРТ/КТ), лабораторию. Оказывает высокотехнологичную медицинскую помощь.",
    "accessibility": {
      "mobility": "Полная доступность: пандусы, лифты, широкие коридоры, тактильные полосы, поручни, кресла-каталки предоставляются.",
      "vision_impaired": "Тактильная разметка, контрастная окраска дверей, Медперсонал помогает при передвижении.",
      "hearing_impaired": "Нет сурдоперевода. Информация на стойках — визуальная. При записи рекомендуется указывать потребность в сопровождении.",
      "deaf_mute": "Полная недоступность без сопровождающего.",
      "dietary": "Собственный пищеблок для стационара. Диетическое питание по назначению врача (столы №1–15). Приём пищи по режиму. Для амбулаторных пациентов буфет с диетическими блюдами.",
      "cardiovascular": "Профильное направление (стационар) кардиология, кардиохирургия, кардиореанимация, ЭКГ, холтер, стресс-тесты, кардиохирургические операции. Полноценная помощь.",
      "respiratory": "Пульмонологическое отделение, аллергологи, спирометрия, кислородная поддержка, ингаляции. Полный спектр.",
      "family": "Детская поликлиника, педиатры, узкие специалисты, стационар для детей. Игровой уголок в холле.",
      "ethnomedicine": "Не оказывает народную медицину. Только доказательная медицина.",
      "health": "Лечение и реабилитация. Стационарное восстановление после операций, физиотерапия, ЛФК."
    },
    "contraindications": "острые инфекции (на приём с температурой не пустят).",
    "tickets": "Бесплатно по полису ОМС (в поликлинику и стационар).\nПлатная  при отсутствии полиса / ДМС.",
    "benefits": "Бесплатно по ОМС для всех застрахованных.\nИнвалиды I группы и дети-инвалиды обслуживание вне очереди",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/health/medical-center/main.jpg"
    ],
    "contacts": {
      "phone": "8 (4112) 500-900",
      "website": "https://rb1ncm.ru/",
      "yandexMap": "https://yandex.ru/maps/org/respublikanskaya_bolnitsa_1_natsionalny_tsentr_meditsiny_im_m_ye_nikolayeva/114165749847/?ll=129.664805%2C62.007212&z=16"
    }
  },
  {
    "id": "obj-14",
    "name": "Якутский республиканский медицинский информационно-аналитический центр (ЯРМИАЦ)",
    "category": "medical",
    "layers": [
      "inclusive"
    ],
    "coordinates": [
      62.02409,
      129.71882
    ],
    "address": "677027, г. Якутск, ул. Кулаковского, дом 30",
    "workingHours": "понедельник-пятница с 9:00 до 18:00, обеденный перерыв с 13:00 до 14:00",
    "description": "ь",
    "accessibility": {},
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/health/yarmiac/main.jpeg"
    ],
    "contacts": {
      "phone": "8 (4112) 31-89-57",
      "website": "https://yakmed.ru/#/contacts",
      "yandexMap": "https://yandex.ru/maps/org/galereya_zarubezhnogo_iskusstva_im_m_f_gabysheva/216822115450/?tab=features&ll=129.718820%2C62.024090&z=16"
    }
  },
  {
    "id": "obj-15",
    "name": "Государственное бюджетное учреждение \"Якутский республиканский онкологический диспансер\"",
    "category": "medical",
    "layers": [
      "inclusive",
      "mobility",
      "vision_impaired",
      "hearing_impaired",
      "dietary",
      "health"
    ],
    "coordinates": [
      62.049794,
      129.705878
    ],
    "address": "г. Якутск, ул. Петра Алексеева, 89/5",
    "workingHours": "08:30-17:00",
    "description": "ГБУ РС (Я) «Якутский республиканский онкологический диспансер» является специализированным учреждением Министерства здравоохранения РС (Я), оказывающим специализированную и высокотехнологичную медицинскую помощь взрослому населению республики.",
    "accessibility": {
      "mobility": "Пандусы, лифты, широкие коридоры, тактильные полосы, поручни. Кресла-каталки предоставляются.",
      "vision_impaired": "Медперсонал помогает при передвижении.",
      "hearing_impaired": "Нет сурдоперевода. Информация на стойках — визуальная.",
      "dietary": "Собственный пищеблок для стационара. Приём пищи по режиму. Для амбулаторных пациентов буфет с диетическими блюдами.",
      "cardiovascular": "Медицинское учреждение. Профильного отделения нет.",
      "respiratory": "Профильного отделения нет. Отделение торакальной онкологии.",
      "family": "Не предназначено для посещения с детьми.",
      "ethnomedicine": "Не оказывает народную медицину. Только доказательная медицина.",
      "health": "Лечение онкологических заболеваний."
    },
    "contraindications": "острые инфекции (на приём с температурой не пустят)",
    "tickets": "Бесплатно по полису ОМС (в поликлинику и стационар).\nПлатная  при отсутствии полиса / ДМС.",
    "benefits": "Бесплатно по ОМС для всех застрахованных.",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/health/oncology-center/main.jpeg"
    ],
    "contacts": {
      "phone": "8(968) 154-07-70 единый call-центр 8(914) 2-705-379 горячая линия",
      "website": "http://onco.mzsakha.ru",
      "yandexMap": "https://yandex.ru/maps/-/CTAT5Np8"
    }
  },
  {
    "id": "obj-16",
    "name": "Театр оперы и балета им. Д. К. Сивцева-Суорун Омоллоона",
    "category": "theater",
    "layers": [
      "inclusive"
    ],
    "coordinates": [
      62.023343,
      129.719212
    ],
    "address": "г. Якутск, проспект Ленина 46/1",
    "workingHours": "Пн-Вт 10:00-18:00 Ср-Вс 11:00-19:00",
    "description": "Государственный Театр оперы и балета Республики Саха (Якутия) имени Д.К. Сивцева-Суоруна Омоллоона – первый стационарный театр оперы и балета в Дальневосточном Федеральном округе, входит в Ассоциацию музыкальных театров России, международную Федерацию балетных конкурсов.",
    "accessibility": {},
    "tickets": "Стоимость зависит от места и постановки. Билеты можно приобрести по Пушкинской карте",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/theater/opera-theater/main.jpg"
    ],
    "contacts": {
      "phone": "Касса: 8 (4112)",
      "website": "https://sakha-opera.ru/",
      "yandexMap": "https://yandex.ru/maps/-/CTATzE0B"
    }
  },
  {
    "id": "obj-17",
    "name": "Саха академический театр имени П. А. Ойунского",
    "category": "theater",
    "layers": [
      "inclusive",
      "mobility",
      "deaf_mute",
      "cardiovascular",
      "respiratory"
    ],
    "coordinates": [
      62.033621,
      129.741946
    ],
    "address": "г. Якутск, ул. Орджоникидзе, д. 1",
    "workingHours": "ежедневно 10:00 - 18:00",
    "description": "Саха академический театр имени П. А. Ойунского - это главный театр Республики Саха, который ставит драматические спектакли на якутском языке. Во всех спектаклях работает система синхронного перевода на русский язык, которая осуществляется с помощью специальных наушников.",
    "accessibility": {
      "mobility": "Пандус на входе, широкие дверные проёмы, в организации есть лифт для колясочников, в организации ровное покрытие полов, поручни вдоль лестниц, предусмотрена парковка рядом со входом, передвижение на коляске обязательно в сопровождении знакомого человека.",
      "deaf_mute": "Удобное общение с персоналом через мессенджер.",
      "cardiovascular": "Аптека в семи минутах ходьбы.",
      "respiratory": "На территории используют очистители воздуха, на территории организации запрещено курение, на территории организации не используют ароматизаторы, влажная уборка проводится ежедневно с вт-вс."
    },
    "tickets": "Стоимость зависит от места и постановки. Билеты можно приобрести по Пушкинской карте.",
    "benefits": "Многодетные семьи, пенсионеры, инвалиды всех групп, дети участников СВО.",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/theater/sakha-theater/main.jpg"
    ],
    "contacts": {
      "phone": "приемной: 84112343340, телефон кассы: 84112341331, почта: sat@gov14.ru"
    }
  },
  {
    "id": "obj-18",
    "name": "Государственная филармония Республики Саха (Якутия) им. Г. М. Кривошапко",
    "category": "theater",
    "layers": [
      "inclusive",
      "mobility",
      "family"
    ],
    "coordinates": [
      62.0276,
      129.7329
    ],
    "address": "Республика Саха (Якутия) город Якутск ул. Ярославского, 27",
    "workingHours": "Режим работы: пн-пт, с 9:00 до 18:00, обед с 13:00 до 14:00, касса работает без перерыва на обед. сб с 10:00 до 17:00, выходной - воскресенье.",
    "description": "Государственная филармония Республики Саха (Якутия) им. Г. М. Кривошапко — одна из ведущих концертных организаций республики и главный центр академического музыкального искусства Якутии. Филармония организует симфонические, камерные, хоровые и инструментальные концерты, а также реализует крупные культурные проекты и музыкальные фестивали. В её состав входят несколько творческих коллективов, включая симфонический оркестр, камерные ансамбли, духовой оркестр и хор. Концертная деятельность филармонии направлена на сохранение культурных традиций региона, развитие профессионального музыкального искусства и знакомство зрителей с произведениями мировой и отечественной классики.",
    "accessibility": {
      "mobility": "в здании оборудован пандус на входе",
      "family": "проводятся концерты для семей с детьми, семейные программы"
    },
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/theater/philharmonic/main.png"
    ],
    "contacts": {
      "phone": "кассы: +7(4112) 47-63-35",
      "website": "https://filarmony.ru",
      "yandexMap": "https://yandex.ru/maps/?text=Якутск,+улица+Ярославского,+27"
    }
  },
  {
    "id": "obj-19",
    "name": "Государственный театр эстрады Республики Саха (Якутия) имени Ю.Е. Платонова",
    "category": "theater",
    "layers": [
      "inclusive"
    ],
    "coordinates": [
      62.01972,
      129.721007
    ],
    "address": "ул. Проспект Ленина, 47",
    "workingHours": "Ср-Пт : с 10:00-18:00 Сб-Вс с 11:00- 15:00 Пн-Вт выходной",
    "description": "",
    "accessibility": {},
    "tickets": "Стоимость зависит от места и постановки. Билеты можно приобрести по Пушкинской карте",
    "benefits": "Многодетные семьи, пенсионеры, инвалиды всех групп, дети участников СВО",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/theater/estrada-theater/main.jpeg"
    ],
    "contacts": {
      "phone": "8(4112)40 51 10, Касса: 8(914)-2-744-330",
      "website": "https://sakhaestrada.ru/",
      "yandexMap": "https://yandex.ru/maps/-/CTAXUWOn"
    }
  },
  {
    "id": "obj-20",
    "name": "Реабилитационный центр «Радуга»",
    "category": "medical",
    "layers": [
      "inclusive",
      "mobility",
      "dietary",
      "family",
      "health"
    ],
    "coordinates": [
      62.032347,
      129.748407
    ],
    "address": "г.Якутск, проспект Ленина д.3/1",
    "workingHours": "пн-пт 09.00 - 20.00, сб-вс 10.00 - 18.00",
    "description": "ООО Реабилитационный центр «Радуга является медицинским учреждением нейро-ортопедического профиля, занимающимся восстановительным лечением пациентов с заболеваниями нервной системы и опорно-двигательного аппарата. В центре «Радуга» проводится комплексное лечение взрослых и детей с заболеваниями нервной системы, с ортопедической патологией.",
    "accessibility": {
      "mobility": "Пандус на входе, широкие дверные проёмы, в организации есть лифт для колясочников, в организации ровное покрытие полов, поручни вдоль лестниц, предусмотрена парковка рядом со входом.",
      "dietary": "Собственный пищеблок для стационара. Приём пищи по режиму. Для амбулаторных пациентов буфет с диетическими блюдами.",
      "cardiovascular": "Медицинское учреждение. Профильного отделения нет.",
      "respiratory": "Медицинское учреждение. Профильного отделения нет.",
      "family": "Детская педиатры, узкие специалисты, стационар для детей. Игровые уголки.",
      "ethnomedicine": "Не оказывает народную медицину. Только доказательная медицина.",
      "health": "Лечение и реабилитация. Стационарное восстановление после операций, физиотерапия, ЛФК."
    },
    "tickets": "Бесплатно по полису ОМС (в поликлинику и стационар).\nПлатная  при отсутствии полиса / ДМС.",
    "benefits": "Бесплатно по ОМС для всех застрахованных.",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/health/raduga-center/main.jpg"
    ],
    "contacts": {
      "phone": "8(914) 711-426 email: raduga_ykt@mail.ru",
      "website": "https://www.radugaykt.ru/about/",
      "yandexMap": "https://yandex.ru/maps/-/CTAXyNPT"
    }
  },
  {
    "id": "obj-21",
    "name": "Республиканский социально-оздоровительный центр комплексной реабилитации инвалидов",
    "category": "medical",
    "layers": [
      "inclusive",
      "mobility",
      "dietary",
      "health"
    ],
    "coordinates": [
      62.066878,
      129.791691
    ],
    "address": "Якутск, улица Рихарда Зорге, 2",
    "workingHours": "Пн-пт: 09:00-16:00 Сб-вс: выходной",
    "description": "предоставление комплексной социальной и медицинской реабилитации людям с ограниченными возможностями здоровья.",
    "accessibility": {
      "mobility": "Пандус на входе, широкие дверные проёмы, в организации есть лифт для колясочников, в организации ровное покрытие полов, поручни вдоль лестниц, предусмотрена парковка рядом со входом.",
      "dietary": "Собственный пищеблок для стационара. Приём пищи по режиму. Для амбулаторных пациентов буфет с диетическими блюдами.",
      "cardiovascular": "Медицинское учреждение. Профильного отделения нет.",
      "respiratory": "Медицинское учреждение. Профильного отделения нет.",
      "ethnomedicine": "Не оказывает народную медицину. Только доказательная медицина.",
      "health": "Лечение и реабилитация. Стационарное восстановление после операций, физиотерапия, ЛФК."
    },
    "tickets": "Бесплатно по полису ОМС (в поликлинику и стационар).\nПлатная  при отсутствии полиса / ДМС.",
    "benefits": "Бесплатно по ОМС для всех застрахованных.",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/health/rehabilitation-center/main.jpeg"
    ],
    "contacts": {
      "phone": "Медицинский отдел 8 (4112) 44-93-22 Приемная, заместители директора 8 (4112) 44-93-21 Регистратура 8 (4112) 34-71-12 Электронная почта rckri@gov14.ru",
      "website": "https://rsockri.ru/",
      "yandexMap": "https://yandex.ru/maps/-/CTAXRKir"
    }
  },
  {
    "id": "obj-22",
    "name": "Адаптивный образовательный комплекс",
    "category": "education",
    "layers": [
      "inclusive",
      "mobility",
      "vision_impaired",
      "hearing_impaired",
      "deaf_mute",
      "dietary",
      "mental",
      "family",
      "health"
    ],
    "coordinates": [
      62.01798,
      129.635219
    ],
    "address": "Адрес: ш. Отдых, д. 100, Якутск",
    "description": "Открытый в сентябре 2025 года, этот комплекс является крупнейшим в \nРоссии образовательным центром для детей \nс ограниченными возможностями здоровья. \nОн представляет собой не просто школу, а целый кластер, \nкоторый после завершения строительства будет включать также \nдетский сад на 200 мест и интернат на 150 мест.",
    "accessibility": {
      "mobility": "Полная доступность: все архитектурные и планировочные решения разработаны с учетом современных стандартов инклюзивного образования.",
      "vision_impaired": "Ожидается полная доступность как часть инклюзивной среды.",
      "hearing_impaired": "Ожидается полная доступность как часть инклюзивной среды.",
      "deaf_mute": "Ожидается полная доступность как часть инклюзивной среды.",
      "dietary": "Организовано питание в рамках учебного процесса.",
      "cardiovascular": "Специальных программ нет, но есть медицинское сопровождение.",
      "respiratory": "Специальных программ нет, но есть медицинское сопровождение.",
      "mental": "Профильное учреждение. Ожидается работа психологов, дефектологов, логопедов, тьюторов.",
      "family": "Включает специальную коррекционную школу на 550 учащихся, детский сад на 200 мест и интернат на 150 мест.",
      "health": "Кабинеты профориентации: швейное и слесарное дело, гончарное мастерство, растениеводство, парикмахерское искусство, фотостудия и типография."
    },
    "tickets": "государственное учреждение",
    "benefits": "государственное учреждение",
    "notes": "Находится на стадии развития, по любым вопросам обращаться напрямую в организацию",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/education/adaptive-school/main.jpg"
    ],
    "contacts": {
      "phone": "8-411-236-08-63",
      "website": "https://goodschools.ru/yak/shkola/ogrn-1021401067610/",
      "yandexMap": "https://yandex.ru/maps/-/CTECzG1I"
    }
  },
  {
    "id": "obj-23",
    "name": "Исторический парк Россия – Моя история",
    "category": "museum",
    "layers": [
      "inclusive",
      "mobility",
      "vision_impaired",
      "hearing_impaired",
      "dietary",
      "respiratory",
      "family"
    ],
    "coordinates": [
      62.006879,
      129.700153
    ],
    "address": "улица К.Д. Уткина, 5, Якутск",
    "workingHours": "Вт-сб 10:00-19:00 Пн-вс выходной",
    "description": "Исторический парк «Россия — Моя история» представляет собой уникальное место, в котором панорамно можно познакомиться с историей Отечества с древнейших времен и до наших дней.\n\nВ историческом парке представлены все формы информационных носителей: сенсорные столы и экраны, вместительные кинотеатры, лайтбоксы, коллажи, проекторы, планшетные компьютеры и многое другое. В подготовке экспозиции использованы примы видеоинфографики, анимации, трехмерного моделирования и цифровых реконструкций. Повествование о России оживет перед глазами зрителей в новом мультимедийном формате.\n\nЗнакомство с великими династиями, правящими страной более тысячи лет, легендарными победами, феноменальными прорывами в области культуры и искусства, науки и техники, подлинными героями и трагическими переломами в судьбе нашего народа — позволят посетителям испытать чувство личной причастности к неразрывной и общей истории, в том числе и через почти забытое сегодня чувство благодарности.",
    "accessibility": {
      "mobility": "На входе имеется пандус. Двухэтажное здание, есть лифт, на каждом этаже имеется туалет для людей с инвалидностью. Широкие дверные проемы, ровное покрытие полов. Организация предоставляет собственные инвалидные коляски. Парковка для людей с инвалидностью.",
      "vision_impaired": "Тактильные полосы в залах и по краю лестниц. Есть таблички с шрифтом Брайля и аудиогид.",
      "hearing_impaired": "Текстовое сопровождение выставки.",
      "dietary": "Поблизости кафе с готовыми блюдами.",
      "respiratory": "Курение на территории запрещено. Есть кондиционеры, но не во всех залах. Влажная уборка проводится каждый день.",
      "family": "Имеется оборудованная комната матери и ребенка с пеленальным столиком."
    },
    "contraindications": "Не рекомендуется больным эпилепсией, поскольку выставка представлена бликующими картинами",
    "tickets": "Цена зависит от выставки.\nВзрослый билет - 250 руб.\nБилет по Пушкинской карте - 200 руб\nЛьготный билет - 200 руб",
    "benefits": "Льготные категории:\n- Граждане, оставшиеся на попечении государства\n- Инвалиды детства и сопровождающие их лица\n- Престарелые граждане, оставшиеся на попечении государства в домах-интернатах для инвалидов и престарелых.\n- Дети-сироты и дети, оставшиеся без попечения родителей, дети-инвалиды.\n- Военнослужащие срочной службы.\n- Ветераны боевых действий и лица, приравненные к ним.\n- Неработающие инвалиды I и II групп, инвалиды детства и лица их сопровождающие (не более одного сопровождающего).\n- Герои Советского Союза и Герои Российской Федерации.\n- Ветераны Великой Отечественной Войны.\n- Многодетные семьи (имеющие трех и более детей, до достижения младшим ребенком возраста 18 лет).\n- Дети в возрасте до 18 лет\n\nПри предъявлении соответствующих документов",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/tourism/history-park/main.jpg"
    ],
    "contacts": {
      "phone": "84112403597",
      "website": "https://myhistorypark.ru/",
      "yandexMap": "https://yandex.ru/maps/org/istoricheskiy_park_rossiya_moya_istoriya/231258649229/?ll=129.700153%2C62.006879&z=16"
    }
  },
  {
    "id": "obj-24",
    "name": "Галерея зарубежного искусства им. М. Ф. Габышева",
    "category": "museum",
    "layers": [
      "inclusive",
      "mobility",
      "vision_impaired",
      "hearing_impaired",
      "cardiovascular",
      "respiratory",
      "mental"
    ],
    "coordinates": [
      62.024089,
      129.71882
    ],
    "address": "ул. Петровского, 4",
    "workingHours": "Время работы: 10.00 - 18.00\nВыходные: пн-вт",
    "description": "Галерея зарубежного искусства им. профессора М.Ф. Габышева — уникальное музейное пространство в Якутске, объединяющее историческое здание «Якутского уездного казначейства» и богатейшую коллекцию зарубежного искусства, собранную учёным, коллекционером и меценатом Михаилом Фёдоровичем Габышевым. Галерея является филиалом Национальный художественный музей Республики Саха (Якутия) и представляет одну из наиболее значимых коллекций европейского искусства на Дальнем Востоке России.\n\nОснову постоянной экспозиции составляют произведения живописи и графики итальянских, французских, голландских и фламандских мастеров XVI–XIX веков. Коллекция позволяет познакомиться с различными художественными направлениями и традициями европейского искусства нескольких столетий. Дополняют экспозицию предметы искусства стран Востока XVII–XX веков, включая декоративно-прикладные изделия, скульптуру и редкие коллекционные экспонаты.\n\nОсобое внимание в галерее уделяется вопросам доступности музейного пространства. Для посетителей доступны тактильные модели нэцкэ — увеличенные копии оригинальных произведений японского искусства из собрания музея. Благодаря возможности тактильного знакомства с экспонатами люди с нарушениями зрения могут получить более полное представление о форме, деталях и художественных особенностях работ восточных мастеров.\n\nГалерея представляет собой не только музейную площадку, но и важный культурно-просветительский центр, позволяющий жителям и гостям Якутии познакомиться с мировым художественным наследием, не покидая пределы республики. Для туристов это редкая возможность увидеть произведения европейского и восточного искусства в одном из самых северных регионов мира.",
    "accessibility": {
      "mobility": "Здание музея оборудовано пандусом, находящимся на главном входе со стороны улицы Кирова. Для посетителей с ограниченными возможностями здоровья вход в музей осуществляется с помощью кнопки вызова сотрудника музея. При необходимости во время посещения музея посетители с ограниченной подвижностью могут воспользоваться раскладными стульями, доступными в гардеробе. Имеется туалет для людей с инвалидностью. Широкие дверные проемы, ровное покрытие полов.",
      "vision_impaired": "По ходу галереи имеются тактильные направляющие полосы. Есть специализированные стойки с мнемосхемами планировки для незрячих. Для посетителей доступны тактильные модели нэцкэ — увеличенные копии оригинальных произведений японского искусства из собрания музея.",
      "hearing_impaired": "Галерея есть в всероссийском приложении Артефакт (гид по музеям России), где есть текстовое и аудирсопровождение",
      "cardiovascular": "В залах имеются скамейки для отдыха. Аптека на расстоянии 100 м. Есть аптечка у сотрудников.",
      "respiratory": "На территории галереи имеется зеленый сквер, вход свободный. Открыт с начала июня до начала октября. Курение на территории запрещено.",
      "mental": "Навигация устроена понятно и доступно."
    },
    "tickets": "Стоимость входных билетов:\n\nВзрослые (граждане РФ) — 300 ₽\nПенсионеры — 200 ₽\nСтуденты — 200 ₽\nЛица до 18 лет — Бесплатно\nМногодетные семьи — Бесплатно\nСтуденты-художники — Бесплатно\nИностранные граждане — 500 ₽\n\nОбзорная экскурсия\nВзрослые (граждане РФ) — 300 ₽\nПенсионеры — 250 ₽\nСтуденты — 250 ₽\nЛица до 18 лет — 200 ₽\nМногодетные семьи — 150 ₽\nИностранные граждане — 1000 ₽\n\nТематическая экскурсия\n\nВзрослые (граждане РФ) — 350 ₽\nПенсионеры — 350 ₽\nСтуденты — 250 ₽\nЛица до 18 лет — 250 ₽\nМногодетные семьи — 150 ₽\nИностранные граждане — 600 ₽",
    "benefits": "Льготные категории:\n- дети дошкольного возраста (до 7 лет);\n- лица, не достигшие 18 лет;\n- студенты вузов и ссузов очной формы обучения (при предъявлении студенческого билета);\n- обучающиеся по основным профессиональным образовательным программам художественного профиля (при предъявлении студенческого билета);\n- пенсионеры;\n- многодетные семьи;\n- дети из многодетных семей, воспитывающих 5 и более детей;\n- Герои Советского Союза, Герои Российской Федерации, полные кавалеры ордена Славы;\n- художники, дизайнеры, архитекторы, искусствоведы — члены профессиональных творческих союзов и организаций (при предъявлении удостоверения); члены и сотрудники Российской академии художеств, члены Международного совета музеев (ICOM) при предъявлении членской карты;\n- солдаты, сержанты срочной службы;\n- курсанты военных образовательных организаций и образовательных учреждений МВД;\n- дети-сироты и дети, оставшиеся без попечения родителей;\n- дети-инвалиды, инвалиды с детства (с одним сопровождающим);\n- участники Великой Отечественной войны (ветераны тыла, инвалиды I и II группы, участники боевых действий, приравненные к участникам ВОВ)\n- сотрудники музеев системы Министерства культуры Российской Федерации;\n- участники специальной военной операции (СВО), также члены их семей.\n- сопровождающие (не более двух сопровождающих для организованных групп численностью от 10 до 30 человек).\n\nДля получения льготы необходимо предъявить документ, подтверждающий право на льготное или бесплатное посещение.",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/museum/foreign-art-gallery/main.jpeg"
    ],
    "contacts": {
      "phone": "84112316717",
      "website": "https://sakhamuseum.ru/vystavki-i-sobytiya/postoyannye-ekspozitsii/galereya-zarubezhnogo-iskusstva-im-m-f-gabysheva-/",
      "yandexMap": "https://yandex.ru/maps/org/galereya_zarubezhnogo_iskusstva_im_m_f_gabysheva/216822115450/?tab=features&ll=129.718820%2C62.024090&z=16"
    }
  },
  {
    "id": "obj-25",
    "name": "Ресторан национальной якутской кухни \"Аврора\"",
    "category": "restaurant",
    "layers": [
      "inclusive",
      "mobility",
      "dietary"
    ],
    "coordinates": [
      62.032478,
      129.742158
    ],
    "address": "просп. Ленина, 8, Якутск",
    "workingHours": "Время работы: 12:00-00:00",
    "description": "Ресторан «Аврора» — это место, где можно попробовать блюда национальной якутской кухни, такие как строганина, «Индигирка», закуски и горячее с рыбой, олениной и жеребятиной. Здесь также можно заказать наливки из северных ягод, якутские лепёшки и сибирскую наваристую уху. В ресторане есть несколько тематических залов, каждый из которых имеет свой характер.",
    "accessibility": {
      "mobility": "Пандус на входе. Есть туалет для людей с инвалидностью. Ровные полы, широкие дверные проемы",
      "dietary": "По желанию в некоторых позициях можно убрать ингридиенты, на которые есть пищевая непереносимость"
    },
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/food/avrora-restaurant/main.jpeg"
    ],
    "contacts": {
      "phone": "89991741720",
      "yandexMap": "https://yandex.ru/maps/org/avrora/175388149021/?ll=129.742352%2C62.032049&z=13.96"
    }
  },
  {
    "id": "obj-26",
    "name": "Ресторан «Зеленый Город»",
    "category": "restaurant",
    "layers": [
      "inclusive",
      "mobility",
      "dietary"
    ],
    "coordinates": [
      62.029942,
      129.761301
    ],
    "address": "Якутск, 203-й микрорайон, 17",
    "workingHours": "Пн-чт: 09:00–22:00\nПт-сб: 09:00–23:00\nВс: 10:00–22:00",
    "description": "«Зелёный город» — современный ресторан в Якутске, ориентированный на принципы здорового и осознанного питания. В меню представлены блюда европейской и авторской кухни, завтраки, бизнес-ланчи, салаты, супы, паста, блюда на гриле, боулы и десерты. Особое внимание уделяется сбалансированному составу блюд, а для некоторых позиций указаны калорийность и пищевая ценность.\n\nРесторан подходит как для семейного отдыха, так и для деловых встреч. Для посетителей доступны детское меню, детская комната и игровой уголок, а также бесплатная парковка и Wi-Fi. Интерьер заведения выполнен в современном стиле и создает спокойную и комфортную атмосферу для отдыха.\n\nОсобенностью ресторана является внимание к здоровому питанию: в меню представлены блюда для посетителей, следящих за рационом, включая безглютеновые позиции и блюда с указанием КБЖУ. Это делает заведение потенциально интересным для людей с особыми диетическими потребностями.",
    "accessibility": {
      "mobility": "Пандус на входе. Широкие дверные проемы, гладкий пол.",
      "dietary": "Имеются безлактозные и безглютеновые позиции в меню"
    },
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/food/green-city-restaurant/main.jpeg"
    ],
    "contacts": {
      "phone": "89148277930",
      "yandexMap": "https://yandex.ru/maps/org/zeleny_gorod/29000811581/?ll=129.761475%2C62.030323&z=13"
    }
  },
  {
    "id": "obj-27",
    "name": "Кофейня «Coffeeshop Company»",
    "category": "cafe",
    "layers": [
      "inclusive",
      "mobility",
      "dietary"
    ],
    "coordinates": [
      62.028529,
      129.729708
    ],
    "address": "ул. Орджоникидзе, 31, Якутск",
    "workingHours": "Время работы: 8:00-23:00",
    "description": "Coffeeshop Company — кофейня международной австрийской сети, вдохновленной традициями венской кофейной культуры. Заведение предлагает широкий выбор кофейных напитков, чая, десертов, выпечки, завтраков и блюд европейской кухни. Уютная атмосфера и удобное расположение в центре Якутска делают кофейню популярным местом для встреч, отдыха и работы.\n\nКонцепция сети объединяет классические традиции венских кофеен с современным городским форматом. Гостям доступны фирменные кофейные напитки, приготовленные на основе авторских кофейных смесей, а также разнообразное меню для завтрака и легкого перекуса.",
    "accessibility": {
      "mobility": "Пандус на входе. На входе есть небольшие ступеньки, но возможна помощь сотрудника. Широкие дверные проемы, гладкий пол.",
      "dietary": "Могут делать напитки на безлактозном молоке"
    },
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/food/coffeeshop-company/main.jpeg"
    ],
    "contacts": {
      "phone": "89991749040",
      "yandexMap": "https://yandex.ru/maps/org/coffeeshop_company/239386691481/?ll=129.729708%2C62.028529&z=16"
    }
  },
  {
    "id": "obj-28",
    "name": "Музей музыки и фольклора народов Якутии им. А.П. Решетниковой",
    "category": "museum",
    "layers": [
      "inclusive",
      "mobility",
      "vision_impaired",
      "hearing_impaired",
      "dietary",
      "cardiovascular",
      "respiratory",
      "family"
    ],
    "coordinates": [
      62.033183,
      129.717594
    ],
    "address": "г. Якутск, ул. Кирова, 31",
    "workingHours": "ПН-ПТ: 10:00-18:00 ВС выходной",
    "description": "Музей посвящен музыкальной культуре и фольклору народов Якутии. В экспозиции представлены уникальные музыкальные инструменты, аудиозаписи, предметы быта, связанные с традиционными обрядами и праздниками. Проводятся интерактивные экскурсии и мастер-классы, где посетители могут не только увидеть, но и услышать, а также попробовать себя в роли исполнителя на национальных инструментах, включая хомус, или разучить элементы кругового танца осуохай",
    "accessibility": {
      "mobility": "Доступность на первом этаже (зона обслуживания), наличие адаптированного туалета. Возможен вызов персонала для помощи.",
      "vision_impaired": "Информация дублируется с помощью тактильных (шрифт Брайля), визуальных (крупный шрифт) и акустических средств .",
      "hearing_impaired": "Нарушение слуха: Информация дублируется с помощью визуальных средств (таблички, дисплеи) .",
      "dietary": "На территории музея кафе нет.",
      "cardiovascular": "Внутри музея предусмотрены зоны для отдыха (скамьи).",
      "respiratory": "В музее проводится регулярная влажная уборка и используется система кондиционирования.",
      "family": "Проводятся специальные детские экскурсии, мастер-классы по игре на хомусе и круговому танцу осуохай."
    },
    "contraindications": "Громкие звуки во время мастер-классов, игра на варгане может быть не рекомендована при некоторых заболеваниях.",
    "tickets": "Взрослые — 300 руб.; Студенты и школьники — 200 руб.",
    "benefits": "Предоставляются льготы для многодетных семей, пенсионеров, инвалидов, участников СВО и членов их семей при предъявлении подтверждающего документа.",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/museum/music-museum/main.jpg"
    ],
    "contacts": {
      "phone": "7 (4112) 35-38-84",
      "yandexMap": "https://yandex.ru/maps/-/CLgRVONk"
    }
  },
  {
    "id": "obj-29",
    "name": "Дом дружбы народов им. А.Е. Кулаковского",
    "category": "culture",
    "layers": [
      "inclusive",
      "mobility",
      "family"
    ],
    "coordinates": [
      62.040395,
      129.741024
    ],
    "address": "г. Якутск, ул. Пояркова, д. 4",
    "workingHours": "Пн–пт: 10:00–18:00",
    "description": "Культурный центр, основная цель которого - укрепление межэтнического согласия и развитие культурного взаимодействия между народами. При учреждении функционируют 27 творческих коллективов, из них 9 народных и образцовых, и более 35 национально-культурных объединений . Имеет большой зрительный зал на 550 мест . Проводятся выставки, концерты и различные мероприятия",
    "accessibility": {
      "mobility": "Есть пандус и удобный вход для людей с ограниченными возможностями передвижения",
      "family": "Проводятся мероприятия для детей."
    },
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/tourism/friendship-house/main.jpeg"
    ],
    "contacts": {
      "phone": "7 (4112) 32-80-77",
      "yandexMap": "https://yandex.ru/maps/-/CTQliDJG"
    }
  },
  {
    "id": "obj-30",
    "name": "Государственный цирк Республики Саха (Якутия) им. С. и М. Расторгуевых",
    "category": "entertainment",
    "layers": [
      "inclusive",
      "mental"
    ],
    "coordinates": [
      62.032398,
      129.72409
    ],
    "address": "ул. Пояркова, 22, Якутск",
    "workingHours": "ПН-ПТ: 10:00-18:00",
    "description": "Главная цирковая площадка Якутии, где проходят представления с участием местных и гастролирующих артистов. Проводятся фестивали и конкурсы",
    "accessibility": {
      "mental": "Возможна перегрузка из-за громких звуков и яркого света"
    },
    "contraindications": "Эпилепсия (яркий свет, громкие звуки).",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/theater/circus/main.jpg"
    ],
    "contacts": {
      "phone": "7 (914) 273-55-37",
      "website": "https://diamond-circus.ru",
      "yandexMap": "https://yandex.ru/maps/-/CPaXfRIS"
    }
  },
  {
    "id": "obj-31",
    "name": "Республиканский зоопарк «Орто Дойду» им. В.Г. Алексеева",
    "category": "nature",
    "layers": [
      "inclusive",
      "mobility",
      "dietary",
      "cardiovascular",
      "respiratory",
      "family",
      "health"
    ],
    "coordinates": [
      61.678944,
      129.354299
    ],
    "address": "км Покровский Тракт ул 50, Якутск, Респ. Саха (Якутия), 677000",
    "workingHours": "Ежедневно: 10:00–18:00\nВремя работы зоопарка\nПн-Пт: с 10:00 – 19:00\nСб-Вс: с 10:00 — 20:00\nВремя работы кассы:\nПн-Пт: с 10:00 – 18:30\nСб-Вс: с 10:00 — 19:30             \nКаждый понедельник террариум и вольер с белыми медведями закрыты на санитарный день.\nКаждый последний понедельник месяца зоопарк закрыт на санитарный день.",
    "description": "Один из самых северных зоопарков в мире и единственный в зоне вечной мерзлоты. В нём живут белые медведи, северные олени, снежные барсы и другие животные, приспособленные к суровому климату.",
    "accessibility": {
      "mobility": "Территория большая, дорожки частично грунтовые. Требуется помощь при передвижении.",
      "dietary": "На территории есть кафе и шашлычные (стандартный набор: выпечка, чай, мясо). Специализированного диетического меню нет. Рекомендуется брать свою еду при строгих диетах.",
      "cardiovascular": "Есть скамейки. Зоопарк находится за городом, вдали от быстрой медицинской помощи. Большие территории для прогулок (до 3–4 км), медикаменты лучше брать с собой.",
      "respiratory": "Открытая территория, свежий воздух. Вольеры с животными имеют естественный запах сена и кормов, в ветреную погоду возможна пыль. Людям с бронхиальной астмой лучше иметь с собой ингалятор!",
      "family": "Есть детская игровая площадка. Действуют льготные детские билеты (500 ₽ до 13 лет, до 5 лет — бесплатно).",
      "health": "Прогулки на свежем воздухе по лесной территории, дыхательная гимнастика естественным образом (чистый загородный воздух), эмоциональная разгрузка при общении с животными."
    },
    "contraindications": "Аллергия на шерсть животных, пыльцу растений, корма (сено, зерно); тяжелые формы гипертонии (из-за удаленности от скорой); психические расстройства в стадии обострения (из-за открытых вольеров и возможных громких звуков животных).",
    "tickets": "Взрослый – 700р\nДетский (до 13 лет) – 500р\nДетям до 5 лет –  бесплатно\nПенсионерам – 500р",
    "benefits": "Дети сироты; дети, оставшиеся без попечения родителей, находящиеся в специализированных учреждениях (в соответствии с заявкой учреждения в письменном виде) с сопровождающими лицами, указанными в письме        при наличии заявки согласованно с администрацией зоопарка        Бесплатно\nИнвалиды Ι, ΙΙ групп с одним сопровождающим лицом        Справка МСЭ с указанием группы инвалидности и паспорт        Бесплатно\nДети-инвалиды с одним сопровождающим лицом, достигшим 18 лет        Справка МСЭ с указанием группы инвалидности и паспорт        Бесплатно\nГерои России, Герои труда, ветераны, инвалиды войны, ветераны боевых действий, участники специальной военной операции        Удостоверение установленного образца, справка с военкомата        Бесплатно\nЧлены семей участников СВО        Справка с военкомата военнослужащего, документы подтверждающие родство с военнослужащим        Взрослый билет 600р Детский билет 400р\nМногодетны семьи, имеющие не менее 3-х детей в возрасте до 18 лет        Удостоверение многодетной семьи        Взрослый билет 600р Детский билет 400р\nМногодетные семьи, имеющие 5 и более детей в возрасте до 18 лет        Удостоверение многодетной семьи        Бесплатно\nДетские экскурсионные группы от 20 человек (другие скидки не учитываются)        Заявка на посещение зоопарка утвержденная администрацией        400р",
    "photos": [
      "https://raw.githubusercontent.com/asyakhar/yakutia-images/main/nature/orto-doydu-zoo/main.jpg"
    ],
    "contacts": {
      "phone": "8 (411) 222-52-59",
      "website": "https://zoo-ortodoidu.ru",
      "yandexMap": "https://yandex.ru/maps/-/CPaNYU8g"
    }
  }
]
```

## File: app/layout.tsx
```typescript
import type { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Geist Mono — оставляем для моноширинного текста (код)
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

// Gilroy — только Bold как основной
const gilroy = localFont({
  src: [
    {
      path: './fonts/Gilroy-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
  display: 'swap',
})

// Sangha — только для акцентных заголовков
const sanghaKali = localFont({
  src: './fonts/SanghaKali-Regular.woff2',
  variable: '--font-sangha',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Доступная Якутия - Инклюзивный навигатор',
  description: 'Интерактивная карта медицинского и доступного туризма Республики Саха (Якутия)',
  icons: {
    // Основной фавикон — logo_homus (app/favicon.ico подключается автоматически).
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`bg-background ${geistMono.variable} ${gilroy.variable} ${sanghaKali.variable}`}
      suppressHydrationWarning
    >
      <body className={`${gilroy.className} antialiased`}>
        {/* Применяем сохранённый режим контраста до первой отрисовки — без мигания */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var p=sessionStorage.getItem('visionPreference');if(p==='partial'){document.documentElement.classList.add('high-contrast','large-font');}}catch(e){}",
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
```

## File: app/place/[id]/PlaceDetailClient.tsx
```typescript
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Share2,
  MapPin,
  Phone,
  Globe,
  Navigation,
  Clock,
  Ticket as TicketIcon,
  BadgePercent,
  AlertTriangle,
  Info,
  Accessibility,
  Eye,
  Ear,
  Utensils,
  Heart,
  Wind,
  Brain,
  Users,
  Sparkles,
  Hospital,
  Building2,
  Hotel,
  UtensilsCrossed,
  Coffee,
  TreePine,
  Theater,
  Stethoscope,
  Flower2,
  Landmark,
  ShoppingBag,
  Dumbbell,
  Mountain,
  Palette,
  Ticket,
  GraduationCap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContrastToggle from '@/components/ContrastToggle';

// Типы
interface MapObject {
  id: string;
  name: string;
  category: string;
  layers: string[];
  coordinates: [number, number] | null;
  address?: string;
  workingHours?: string;
  description: string;
  accessibility: Record<string, string>;
  contraindications?: string;
  tickets?: string;
  benefits?: string;
  notes?: string;
  photos: string[];
  contacts: {
    phone?: string;
    website?: string;
    yandexMap?: string;
  };
}

// Конфигурация категорий
const CATEGORY_CONFIG: Record<string, { name: string; icon: typeof Building2; color: string }> = {
  museum: { name: 'Музей', icon: Building2, color: '#8b5cf6' },
  hotel: { name: 'Гостиница', icon: Hotel, color: '#3b82f6' },
  restaurant: { name: 'Ресторан', icon: UtensilsCrossed, color: '#22c55e' },
  cafe: { name: 'Кафе', icon: Coffee, color: '#f97316' },
  park: { name: 'Парк', icon: TreePine, color: '#14b8a6' },
  theater: { name: 'Театр', icon: Theater, color: '#ec4899' },
  medical: { name: 'Медицина', icon: Stethoscope, color: '#ef4444' },
  spa: { name: 'СПА/Оздоровление', icon: Flower2, color: '#06b6d4' },
  monument: { name: 'Памятник', icon: Landmark, color: '#6366f1' },
  shopping: { name: 'Торговый центр', icon: ShoppingBag, color: '#eab308' },
  sports: { name: 'Спорт', icon: Dumbbell, color: '#84cc16' },
  nature: { name: 'Природа', icon: Mountain, color: '#0ea5e9' },
  culture: { name: 'Культура', icon: Palette, color: '#f43f5e' },
  entertainment: { name: 'Развлечения', icon: Ticket, color: '#d946ef' },
  education: { name: 'Образование', icon: GraduationCap, color: '#0284c7' },
};

// Категории доступности: заголовок, иконка, цвет (ключи совпадают с id слоёв)
const ACCESS_META: { id: string; name: string; icon: typeof Building2; color: string }[] = [
  { id: 'mobility', name: 'Передвижение', icon: Accessibility, color: '#457B9D' },
  { id: 'vision_impaired', name: 'Для незрячих и слабовидящих', icon: Eye, color: '#FF6B6B' },
  { id: 'hearing_impaired', name: 'Для слабослышащих', icon: Ear, color: '#FFA07A' },
  { id: 'deaf_mute', name: 'Для глухонемых', icon: Ear, color: '#DDA15E' },
  { id: 'dietary', name: 'Питание', icon: Utensils, color: '#2AA98B' },
  { id: 'cardiovascular', name: 'Сердечно-сосудистые', icon: Heart, color: '#E63946' },
  { id: 'respiratory', name: 'Дыхательная система', icon: Wind, color: '#1D3557' },
  { id: 'mental', name: 'Ментальные особенности', icon: Brain, color: '#7C9EC0' },
  { id: 'family', name: 'Семьи с детьми', icon: Users, color: '#E0A400' },
  { id: 'ethnomedicine', name: 'Народная медицина', icon: Sparkles, color: '#8B5A3C' },
  { id: 'health', name: 'Отдых с пользой для здоровья', icon: Hospital, color: '#52B788' },
];

export default function PlaceDetailClient({ id }: { id: string }) {
  const [place, setPlace] = useState<MapObject | null>(null);
  const [loading, setLoading] = useState(true);
  const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : '';

  useEffect(() => {
    fetch(`${basePath}/data/objects.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: MapObject[]) => {
        const found = data.find((obj) => obj.id === id);
        setPlace(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading data:', err);
        setLoading(false);
      });
  }, [id, basePath]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-lg text-muted-foreground">Загрузка...</p>
        </div>
      </div>
    );
  }

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl text-foreground mb-4">Место не найдено</h2>
          <Link href="/map">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Вернуться к карте
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const categoryConfig = CATEGORY_CONFIG[place.category] || CATEGORY_CONFIG.museum;
  const CategoryIcon = categoryConfig.icon;

  // Категории доступности, для которых есть текст (в порядке ACCESS_META)
  const accessSections = ACCESS_META.filter((m) => place.accessibility && place.accessibility[m.id]);

  const phoneHref = place.contacts.phone ? place.contacts.phone.replace(/[^\d+]/g, '') : '';
  const routeUrl = place.coordinates
    ? `https://yandex.ru/maps/?rtext=~${place.coordinates[0]}%2C${place.coordinates[1]}&rtt=auto`
    : place.contacts.yandexMap;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-card shadow-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/map">
            <Button variant="ghost" className="gap-2 text-foreground hover:text-primary">
              <ArrowLeft className="size-5" />
              <span className="hidden sm:inline">На карту</span>
            </Button>
          </Link>
          <h1 className="text-lg md:text-xl text-foreground font-semibold flex-1 text-center px-4 line-clamp-1">
            {place.name}
          </h1>
          <div className="flex items-center gap-1">
            <ContrastToggle />
            <Button
              variant="ghost"
              className="gap-2 text-foreground"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: place.name, url: window.location.href });
                }
              }}
            >
              <Share2 className="size-5" />
              <span className="hidden sm:inline">Поделиться</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="relative h-64 md:h-96">
        <img
          src={place.photos && place.photos.length > 0 ? place.photos[0] : `${basePath}/img/placeholder.jpg`}
          alt={place.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = `${basePath}/img/placeholder.jpg`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge
            className="mb-2 text-white border-white/30 px-3 py-1 text-sm"
            style={{ backgroundColor: categoryConfig.color }}
          >
            <CategoryIcon className="size-3 mr-1" />
            {categoryConfig.name}
          </Badge>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-3">{place.name}</h1>

          {/* Адрес и часы работы */}
          <div className="flex flex-col gap-2 mb-4">
            {place.address && (
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="size-5 flex-shrink-0 text-primary mt-0.5" />
                <span>{place.address}</span>
              </div>
            )}
            {place.workingHours && (
              <div className="flex items-start gap-2 text-muted-foreground">
                <Clock className="size-5 flex-shrink-0 text-primary mt-0.5" />
                <span className="whitespace-pre-line">{place.workingHours}</span>
              </div>
            )}
          </div>

          {place.description && (
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{place.description}</p>
          )}
        </div>

        {/* Доступность — текст по категориям */}
        <Card className="mb-6 p-6 gap-2 bg-card border-border shadow-md">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Accessibility className="size-5 text-primary" />
            Доступность и удобства
          </h2>

          {accessSections.length > 0 ? (
            <div className="space-y-5">
              {accessSections.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.id}>
                    <h3 className="text-sm font-semibold mb-1.5 flex items-center gap-2" style={{ color: m.color }}>
                      <span
                        className="flex items-center justify-center size-7 rounded-full flex-shrink-0"
                        style={{ backgroundColor: `${m.color}20` }}
                      >
                        <Icon className="size-4" />
                      </span>
                      {m.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line pl-9">
                      {place.accessibility[m.id]}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-muted-foreground">Информация об особенностях доступности уточняется</p>
          )}
        </Card>

        {/* Противопоказания */}
        {place.contraindications && (
          <Card className="mb-6 p-6 gap-2 bg-amber-50 border border-amber-200 shadow-md dark:bg-amber-950/30 dark:border-amber-700">
            <h2 className="text-lg font-semibold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="size-5 text-amber-600 dark:text-amber-400" />
              Противопоказания
            </h2>
            <p className="text-amber-900/90 dark:text-amber-200/90 leading-relaxed whitespace-pre-line">
              {place.contraindications}
            </p>
          </Card>
        )}

        {/* Билеты */}
        {place.tickets && (
          <Card className="mb-6 p-6 gap-2 bg-card border-border shadow-md">
            <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
              <TicketIcon className="size-5 text-primary" />
              Билеты
            </h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{place.tickets}</p>
          </Card>
        )}

        {/* Льготы */}
        {place.benefits && (
          <Card className="mb-6 p-6 gap-2 bg-card border-border shadow-md">
            <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
              <BadgePercent className="size-5 text-primary" />
              Льготы
            </h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{place.benefits}</p>
          </Card>
        )}

        {/* Контакты */}
        <Card className="mb-6 p-6 gap-2 bg-card border-border shadow-md">
          <h2 className="text-xl font-semibold text-foreground mb-4">Контакты</h2>
          <div className="space-y-3">
            {place.contacts.phone && (
              <a
                href={`tel:${phoneHref}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="size-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">Телефон</div>
                  <div className="text-foreground font-medium">{place.contacts.phone}</div>
                </div>
              </a>
            )}

            {place.contacts.website && (
              <a
                href={place.contacts.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="size-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">Сайт</div>
                  <div className="text-foreground font-medium truncate">{place.contacts.website}</div>
                </div>
              </a>
            )}

            {place.contacts.yandexMap && (
              <a
                href={place.contacts.yandexMap}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="size-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">Яндекс.Карты</div>
                  <div className="text-foreground font-medium truncate">Открыть карточку места</div>
                </div>
              </a>
            )}

            {routeUrl && (
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-6 gap-2"
                onClick={() => window.open(routeUrl, '_blank', 'noopener,noreferrer')}
              >
                <Navigation className="size-5" />
                Построить маршрут в Яндекс.Картах
              </Button>
            )}
          </div>
        </Card>

        {/* Примечания */}
        {place.notes && (
          <Card className="mb-6 p-5 gap-2 bg-muted/30 border-border shadow-sm">
            <div className="flex items-start gap-2">
              <Info className="size-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-foreground mb-1">Примечания</div>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{place.notes}</p>
              </div>
            </div>
          </Card>
        )}
      </div>

      <footer className="bg-foreground text-background py-8 mt-12 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm opacity-90 mb-2">© 2026 Доступная Якутия. Все права защищены.</p>
          <p className="text-xs opacity-70">
            Информация на сайте носит ознакомительный характер и не является медицинской консультацией. Перед
            посещением оздоровительных объектов и использованием народной медицины проконсультируйтесь со специалистом.
          </p>
        </div>
      </footer>
    </div>
  );
}
```

## File: app/globals.css
```css
@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));
@custom-variant dark-contrast (&:is(.high-contrast *));

:root {
  /* === ОСНОВНЫЕ ЦВЕТА === */
  --color-bg-primary: #F8F6F1;
  --color-bg-secondary: #EDEBE5;
  --color-bg-white: #FFFFFF;
  
  /* === ЦВЕТА ТЕКСТА === */
  --color-text-primary: #353535;
  --color-text-secondary: #5A4E3C;
  --color-text-white: #FFFFFF;
  
  /* === АКЦЕНТНЫЙ ЦВЕТ (ОРАНЖЕВЫЙ) === */
  --color-accent: #E38920;
  --color-accent-hover: #CC7A1D;
  --color-accent-light: #F5D6A8;
  --color-accent-dark: #B86A18;
  
  /* === ЗЕЛЕНЫЙ ЦВЕТ ДЛЯ ЗАГОЛОВКОВ === */
  --color-green-dark: #384E41;
  --color-green-medium: #4A6B52;
  --color-green-light: #6B8F73;
  
  /* === КОРИЧНЕВЫЙ ЦВЕТ === */
  --color-brown-dark: #5A4E3C;
  --color-brown-medium: #8B7A66;
  --color-brown-light: #C4B5A0;
  
  /* === ЦВЕТА ДЛЯ ХЕДЕРА === */
  --color-header-title: #384E41;
  
  /* === ЦВЕТА ДЛЯ КАРТОЧЕК === */
  --color-card-bg: #FFFFFF;
  --color-card-border: #E8E6E0;
  --color-card-shadow: rgba(56, 78, 65, 0.1);
  --color-button-primary-bg: #9CB6E0;
  --color-button-primary-text: #FFFFFF;
  --color-button-primary-border: #9CB6E0;
  --color-button-primary-hover: #708FC0;
  
  /* === ФОНОВОЕ ИЗОБРАЖЕНИЕ === */
  --bg-hero-image: url('/img/background_photo.png');

  /* === СТАНДАРТНЫЕ ПЕРЕМЕННЫЕ === */
  --background: var(--color-bg-primary);
  --foreground: var(--color-text-primary);
  --card: var(--color-card-bg);
  --card-foreground: var(--color-text-primary);
  --popover: var(--color-bg-primary);
  --popover-foreground: var(--color-text-primary);
  --primary: var(--color-accent);
  --primary-foreground: var(--color-text-white);
  --secondary: var(--color-green-medium);
  --secondary-foreground: var(--color-text-white);
  --muted: var(--color-bg-secondary);
  --muted-foreground: var(--color-text-secondary);
  --accent: var(--color-accent);
  --accent-foreground: var(--color-text-white);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: var(--color-card-border);
  --input: var(--color-card-border);
  --ring: var(--color-accent);
  --radius: 0.75rem;
  --sidebar: var(--color-bg-primary);
  --sidebar-foreground: var(--color-text-primary);
  --sidebar-primary: var(--color-accent);
  --sidebar-primary-foreground: var(--color-text-white);
  --sidebar-accent: var(--color-bg-secondary);
  --sidebar-accent-foreground: var(--color-text-primary);
  --sidebar-border: var(--color-card-border);
  --sidebar-ring: var(--color-accent);
  --color-title-events: #802405;
}

.dark {
  /* Темная тема */
  --color-bg-primary: #1a1a1a;
  --color-bg-secondary: #2a2a2a;
  --color-text-primary: #e5e5e5;
  --color-text-secondary: #b5a890;
  --color-accent: #E38920;
  --color-accent-hover: #CC7A1D;
  --color-green-dark: #5A7A6A;
  
  --background: var(--color-bg-primary);
  --foreground: var(--color-text-primary);
  --card: var(--color-bg-primary);
  --card-foreground: var(--color-text-primary);
  --popover: var(--color-bg-primary);
  --popover-foreground: var(--color-text-primary);
  --border: #333333;
  --sidebar: var(--color-bg-primary);
}

@theme inline {
  /* === ПОДКЛЮЧАЕМ CSS-ПЕРЕМЕННЫЕ В TAILWIND === */
  --color-bg-primary: var(--color-bg-primary);
  --color-bg-secondary: var(--color-bg-secondary);
  
  --color-text-primary: var(--color-text-primary);
  --color-text-secondary: var(--color-text-secondary);
  --color-text-white: var(--color-text-white);
  
  --color-accent: var(--color-accent);
  --color-accent-hover: var(--color-accent-hover);
  --color-accent-light: var(--color-accent-light);
  --color-accent-dark: var(--color-accent-dark);
  
  --color-green-dark: var(--color-green-dark);
  --color-green-medium: var(--color-green-medium);
  --color-green-light: var(--color-green-light);
  
  --color-brown-dark: var(--color-brown-dark);
  --color-brown-medium: var(--color-brown-medium);
  --color-brown-light: var(--color-brown-light);
  
  --color-header-title: var(--color-header-title);
  --color-card-bg: var(--color-card-bg);
  --color-card-border: var(--color-card-border);
  
  --bg-hero-image: var(--bg-hero-image);

  /* === ШРИФТЫ === */
  --font-sans: var(--font-gilroy), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), 'Geist Mono', 'Geist Mono Fallback';
  --font-sangha: var(--font-sangha), ui-sans-serif, system-ui, sans-serif;
  
  /* === СТАНДАРТНЫЕ ПЕРЕМЕННЫЕ === */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-white: var(--color-text-white);
}

@layer base {

  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  
  .font-sangha {
    font-family: var(--font-sangha), ui-sans-serif, system-ui, sans-serif;
  }

  /* Классы для новых цветов */
  .text-green-dark {
    color: var(--color-green-dark);
  }
  .text-brown-dark {
    color: var(--color-brown-dark);
  }
  .text-brown-medium {
    color: var(--color-brown-medium);
  }
  .bg-accent-custom {
    background-color: var(--color-accent);
  }
  .bg-accent-custom:hover {
    background-color: var(--color-accent-hover);
  }
  .border-accent-custom {
    border-color: var(--color-accent);
  }
  .text-accent-custom {
    color: var(--color-accent);
  }
  .bg-about-pattern {
  background-image: url('/img/o_proekte.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
}
}

/* ========================================================
   РЕЖИМ ДЛЯ СЛАБОВИДЯЩИХ (ВЫСОКИЙ КОНТРАСТ И КРУПНЫЙ ШРИФТ)
   ======================================================== */

/* 1. Увеличиваем базовый размер шрифта (одинаково для всех устройств) */
html.large-font {
  font-size: 140%; 
}

html.large-font header .flex.items-center.gap-4 {
  flex-shrink: 0 !important;
  width: auto !important;
  min-width: 80px !important;
}

html.large-font button[title="Версия для слабовидящих"] {
  flex-shrink: 0 !important;
  width: 36px !important;
  height: 36px !important;
  min-width: 36px !important;
  min-height: 36px !important;
  padding: 0 !important;
}

html.large-font button[title="Версия для слабовидящих"] svg {
  flex-shrink: 0 !important;
  width: 20px !important;
  height: 20px !important;
  min-width: 20px !important;
  min-height: 20px !important;
}

/* 2. Переопределяем палитру на черное и белое */
:root.high-contrast {
  --color-bg-primary: #000000;
  --color-bg-secondary: #000000;
  --color-bg-white: #000000;
  
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #FFFFFF;
  --color-text-white: #FFFFFF;
  
  --color-accent: #FFFFFF;
  --color-accent-hover: #CCCCCC;
  --color-accent-light: #FFFFFF;
  --color-accent-dark: #FFFFFF;
  
  --color-green-dark: #FFFFFF;
  --color-green-medium: #FFFFFF;
  --color-green-light: #FFFFFF;
  
  --color-brown-dark: #FFFFFF;
  --color-brown-medium: #FFFFFF;
  --color-brown-light: #FFFFFF;
  
  --color-header-title: #FFFFFF;
  
  --color-card-bg: #000000;
  --color-card-border: #FFFFFF;
  --color-card-shadow: none;

  --background: #000000;
  --foreground: #FFFFFF;
  --card: #000000;
  --card-foreground: #FFFFFF;
  --popover: #000000;
  --popover-foreground: #FFFFFF;
  --primary: #FFFFFF;
  --primary-foreground: #000000;
  --muted: #000000;
  --muted-foreground: #FFFFFF;
  --border: #FFFFFF;

  --color-button-primary-bg: #000000;
  --color-button-primary-text: #FFFFFF;
  --color-button-primary-border: #FFFFFF;
  --color-button-primary-hover: #333333;
  --color-title-events: #FFFFFF;
}

/* 3. Стили для высококонтрастного режима */
:root.high-contrast body * {
  font-weight: 700 !important;
}

/* Убираем декоративные фоновые картинки */
:root.high-contrast section {
  background-image: none !important;
  background-color: #000000 !important;
}

:root.high-contrast div[style*="linear-gradient"] {
  background: #000000 !important;
}

/* Добавляем обводку для карточек и кнопок */
:root.high-contrast button, 
:root.high-contrast input,
:root.high-contrast [data-slot="card"] {
  border: 2px solid #FFFFFF !important;
}

/* Выделяем модальные окна */
:root.high-contrast [role="dialog"] {
  border: 3px solid #FFFFFF !important;
}

:root.high-contrast [data-slot="badge"].absolute {
  background-color: rgba(255, 255, 255, 0.9) !important;
  color: #000000 !important;
  border: none !important;
}

:root.high-contrast [class*="dark-contrast:hidden"] {
  display: none !important;
}

/* === ПРИНУДИТЕЛЬНОЕ ПЕРЕКРАШИВАНИЕ ХЕДЕРА === */
:root.high-contrast header,
:root.high-contrast header * {
  color: #FFFFFF !important;
}

:root.high-contrast header .font-sangha {
  color: #FFFFFF !important;
}

:root.high-contrast header button,
:root.high-contrast header [role="button"],
:root.high-contrast header a {
  color: #FFFFFF !important;
  background-color: transparent !important;
  border-color: #FFFFFF !important;
}

:root.high-contrast header button:hover,
:root.high-contrast header [role="button"]:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

:root.high-contrast header button[title="Версия для слабовидящих"] {
  color: #FFFFFF !important;
}

:root.high-contrast header button[title="Версия для слабовидящих"] svg {
  color: #FFFFFF !important;
}

:root.high-contrast header .bg-accent-custom,
:root.high-contrast header .bg-\[var\(--color-accent\)\] {
  background-color: #FFFFFF !important;
  color: #000000 !important;
}

:root.high-contrast header .bg-accent-custom *,
:root.high-contrast header .bg-\[var\(--color-accent\)\] * {
  color: #000000 !important;
}

/* === ВСЕ КНОПКИ НА СТРАНИЦЕ === */
/* Кнопки с оранжевым фоном - становятся белыми с черным текстом */
:root.high-contrast .bg-accent-custom,
:root.high-contrast .bg-\[var\(--color-accent\)\],
:root.high-contrast button.bg-accent-custom,
:root.high-contrast button.bg-\[var\(--color-accent\)\] {
  background-color: #FFFFFF !important;
  color: #000000 !important;
  border: 2px solid #FFFFFF !important;
}

:root.high-contrast .bg-accent-custom *,
:root.high-contrast .bg-\[var\(--color-accent\)\] *,
:root.high-contrast button.bg-accent-custom *,
:root.high-contrast button.bg-\[var\(--color-accent\)\] * {
  color: #000000 !important;
}

:root.high-contrast .bg-accent-custom:hover,
:root.high-contrast .bg-\[var\(--color-accent\)\]:hover,
:root.high-contrast button.bg-accent-custom:hover,
:root.high-contrast button.bg-\[var\(--color-accent\)\]:hover {
  background-color: #000000 !important;
  color: #FFFFFF !important;
  border-color: #FFFFFF !important;
}

:root.high-contrast .bg-accent-custom:hover *,
:root.high-contrast .bg-\[var\(--color-accent\)\]:hover *,
:root.high-contrast button.bg-accent-custom:hover *,
:root.high-contrast button.bg-\[var\(--color-accent\)\]:hover * {
  color: #FFFFFF !important;
}

/* Кнопки с обводкой - белая обводка, белый текст */
:root.high-contrast button.border-2,
:root.high-contrast button[class*="border-2"] {
  border-color: #FFFFFF !important;
  color: #FFFFFF !important;
  background-color: transparent !important;
}

:root.high-contrast button.border-2:hover,
:root.high-contrast button[class*="border-2"]:hover {
  background-color: #FFFFFF !important;
  color: #000000 !important;
}

/* Кнопки с голубым фоном (Подобрать места) */
:root.high-contrast .bg-\[var\(--color-button-primary-bg\)\] {
  background-color: #FFFFFF !important;
  color: #000000 !important;
  border: 2px solid #FFFFFF !important;
}

:root.high-contrast .bg-\[var\(--color-button-primary-bg\)\] * {
  color: #000000 !important;
}

:root.high-contrast .bg-\[var\(--color-button-primary-bg\)\]:hover {
  background-color: #000000 !important;
  color: #FFFFFF !important;
}

:root.high-contrast .bg-\[var\(--color-button-primary-bg\)\]:hover * {
  color: #FFFFFF !important;
}

/* === ВЫСОКОКОНТРАСТНЫЙ ПОПАП КАРТЫ === */
:root.high-contrast .leaflet-popup-content-wrapper {
  background: #000000 !important;
  color: #FFFFFF !important;
  border: 2px solid #FFFFFF !important;
}

:root.high-contrast .leaflet-popup-tip {
  background-color: #000000 !important;
  border: 2px solid #FFFFFF !important;
}

:root.high-contrast .leaflet-popup-content-wrapper button {
  background-color: #FFFFFF !important;
  color: #000000 !important;
  border: 2px solid #FFFFFF !important;
}

:root.high-contrast .leaflet-popup-content-wrapper button:hover {
  background-color: #000000 !important;
  color: #FFFFFF !important;
}

:root.high-contrast .leaflet-popup-content-wrapper [data-slot="badge"] {
  background-color: #FFFFFF !important;
  color: #000000 !important;
  border: 2px solid #FFFFFF !important;
}

/* === АДАПТАЦИЯ ПОПАПА КАРТЫ ДЛЯ МОБИЛЬНЫХ === */
@media (max-width: 640px) {
  .leaflet-popup {
    max-width: 95vw !important;
    width: 95vw !important;
  }
  
  .leaflet-popup-content {
    width: 100% !important;
    min-width: 0 !important;
  }
  
  .leaflet-popup-content-wrapper {
    border-radius: 12px !important;
    overflow: hidden !important;
  }
}




/* Дополнительный брейкпоинт для очень маленьких экранов */
@layer utilities {
  @media (min-width: 480px) {
    .xs\:inline {
      display: inline !important;
    }
    .xs\:hidden {
      display: none !important;
    }
    .xs\:block {
      display: block !important;
    }
    .xs\:flex {
      display: flex !important;
    }
  }
  @media (max-width: 479px) {
    .xs\:inline {
      display: none !important;
    }
    .xs\:hidden {
      display: inline !important;
    }
    .xs\:block {
      display: none !important;
    }
    .xs\:flex {
      display: none !important;
    }
  }
}
/* ========================================================
   ИСПРАВЛЕНИЯ ДЛЯ ВЫСОКОКОНТРАСТНОГО РЕЖИМА
   ======================================================== */

/* Иконка в кнопке "Перейти на карту" - черная на белом фоне */
:root.high-contrast .bg-accent-custom svg,
:root.high-contrast .bg-\[var\(--color-accent\)\] svg,
:root.high-contrast button.bg-accent-custom svg,
:root.high-contrast button.bg-\[var\(--color-accent\)\] svg {
  color: #000000 !important;
}

:root.high-contrast .bg-accent-custom:hover svg,
:root.high-contrast .bg-\[var\(--color-accent\)\]:hover svg,
:root.high-contrast button.bg-accent-custom:hover svg,
:root.high-contrast button.bg-\[var\(--color-accent\)\]:hover svg {
  color: #FFFFFF !important;
}

/* Иконка в кнопке "Подобрать места" - белая на прозрачном фоне */
:root.high-contrast .bg-\[var\(--color-button-primary-bg\)\] svg {
  color: #000000 !important;
}

:root.high-contrast .bg-\[var\(--color-button-primary-bg\)\]:hover svg {
  color: #FFFFFF !important;
}
/* ========================================================
   ВЫСОКОКОНТРАСТНЫЙ РЕЖИМ - СКРЫВАЕМ ИКОНКИ В КНОПКАХ
   ======================================================== */

/* Скрываем все иконки внутри кнопок на главной странице */
:root.high-contrast .bg-accent-custom svg,
:root.high-contrast .bg-\[var\(--color-accent\)\] svg,
:root.high-contrast .bg-\[var\(--color-button-primary-bg\)\] svg,
:root.high-contrast button.bg-accent-custom svg,
:root.high-contrast button.bg-\[var\(--color-accent\)\] svg,
:root.high-contrast button.bg-\[var\(--color-button-primary-bg\)\] svg {
  display: none !important;
}

/* Также скрываем иконки в кнопках с обводкой */
:root.high-contrast button.border-2 svg,
:root.high-contrast button[class*="border-2"] svg {
  display: none !important;
}

/* Скрываем иконки в кнопках хедера (кроме кнопки "глаз") */
:root.high-contrast header button:not([title="Версия для слабовидящих"]) svg {
  display: none !important;
}
/* ========================================================
   ВЫСОКОКОНТРАСТНЫЙ РЕЖИМ - СКРЫВАЕМ ИКОНКИ ТОЛЬКО НА ГЛАВНОЙ
   ======================================================== */

/* Скрываем иконки в кнопках на главной странице */
:root.high-contrast .bg-accent-custom svg,
:root.high-contrast .bg-\[var\(--color-accent\)\] svg,
:root.high-contrast .bg-\[var\(--color-button-primary-bg\)\] svg,
:root.high-contrast button.bg-accent-custom svg,
:root.high-contrast button.bg-\[var\(--color-accent\)\] svg,
:root.high-contrast button.bg-\[var\(--color-button-primary-bg\)\] svg {
  display: none !important;
}

/* Скрываем иконки в кнопках с обводкой на главной */
:root.high-contrast button.border-2 svg,
:root.high-contrast button[class*="border-2"] svg {
  display: none !important;
}

/* ИКОНКА ГЛАЗА В ХЕДЕРЕ - ОСТАВЛЯЕМ ВИДИМОЙ */
:root.high-contrast header button[title="Версия для слабовидящих"] svg {
  display: inline-block !important;
  color: #FFFFFF !important;
}

/* ИКОНКА БУРГЕРА (три черточки) В ХЕДЕРЕ - ОСТАВЛЯЕМ ВИДИМОЙ */
:root.high-contrast header button:not([title="Версия для слабовидящих"]) svg {
  display: inline-block !important;
  color: #FFFFFF !important;
}
/* ========================================================
   ВЫСОКОКОНТРАСТНЫЙ РЕЖИМ - ФИЛЬТРЫ (СПЛОШНОЙ ЖЕЛТЫЙ ФОН)
   ======================================================== */

/* Активные фильтры - сплошной желтый фон, черный текст */
:root.high-contrast .flex.flex-wrap.gap-2 button {
  background-color: transparent !important;
  color: #FFFFFF !important;
  border: 2px solid #FFFFFF !important;
}

:root.high-contrast .flex.flex-wrap.gap-2 button span {
  color: #FFFFFF !important;
}

/* Активный фильтр - сплошной желтый фон, черный текст */
:root.high-contrast .flex.flex-wrap.gap-2 button.bg-\[var\(--color-accent\)\]\/10,
:root.high-contrast .flex.flex-wrap.gap-2 button[data-active="true"] {
  background-color: #FFFF00 !important;
  color: #000000 !important;
  border: 2px solid #FFFF00 !important;
}

:root.high-contrast .flex.flex-wrap.gap-2 button.bg-\[var\(--color-accent\)\]\/10 span,
:root.high-contrast .flex.flex-wrap.gap-2 button[data-active="true"] span {
  color: #000000 !important;
}

/* Дополнительно для надежности - все активные фильтры */
:root.high-contrast [data-active="true"] {
  background-color: #FFFF00 !important;
  color: #000000 !important;
  border: 2px solid #FFFF00 !important;
}

:root.high-contrast [data-active="true"] * {
  color: #000000 !important;
}
/* ========================================================
   ВЫСОКОКОНТРАСТНЫЙ РЕЖИМ - ПРОТИВОПОКАЗАНИЯ
   ======================================================== */

/* Противопоказания - черный фон, белый текст */
:root.high-contrast .bg-amber-50,
:root.high-contrast .border-amber-200 {
  background-color: #000000 !important;
  border-color: #FFFFFF !important;
}

:root.high-contrast .bg-amber-50 *,
:root.high-contrast .border-amber-200 * {
  color: #FFFFFF !important;
}

/* Заголовок противопоказаний */
:root.high-contrast .text-amber-900,
:root.high-contrast .dark\:text-amber-300 {
  color: #FFFFFF !important;
}

:root.high-contrast .text-amber-600,
:root.high-contrast .dark\:text-amber-400 {
  color: #FFFFFF !important;
}

/* Текст противопоказаний */
:root.high-contrast .text-amber-900\/90,
:root.high-contrast .dark\:text-amber-200\/90 {
  color: #FFFFFF !important;
}

/* Для темной темы */
:root.high-contrast .dark\:bg-amber-950\/30 {
  background-color: #000000 !important;
}

:root.high-contrast .dark\:border-amber-700 {
  border-color: #FFFFFF !important;
}
```

## File: .github/workflows/deploy.yml
```yaml
# GitHub Actions workflow for deploying static Next.js site to GitHub Pages
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main", "master"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9 # Автоматическая установка pnpm

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "24"
          cache: "pnpm" # Теперь кэш будет работать правильно через pnpm-lock.yaml

      - name: Install dependencies
        run: pnpm install --no-frozen-lockfile

      - name: Build static site
        run: |
          if [ -f next.config.prod.mjs ]; then
            cp next.config.prod.mjs next.config.mjs
          fi
          pnpm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./out"

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## File: components/AppHeader.tsx
```typescript
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onOpenFilters?: () => void; 
}

export default function Header({ onOpenFilters }: HeaderProps) {
    
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : '';
  
  useEffect(() => {
    if (document.documentElement.classList.contains('high-contrast')) {
      setHighContrast(true);
    }
  }, []);

  const toggleAccessibility = () => {
    const newState = !highContrast;
    setHighContrast(newState);

    if (newState) {
      document.documentElement.classList.add('high-contrast', 'large-font');
    } else {
      document.documentElement.classList.remove('high-contrast', 'large-font');
    }
    // Сохраняем выбор на сессию, чтобы он не сбрасывался при перезагрузке
    try {
      sessionStorage.setItem('visionPreference', newState ? 'partial' : 'none');
    } catch {
      /* ignore */
    }
  };

  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (pathname === '/') {
      const element = document.getElementById('about');
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      sessionStorage.setItem('scrollToAbout', 'true');
      router.push('/');
    }
  };

  const handleOpenFilters = () => {
    if (onOpenFilters) {
      onOpenFilters();
    } else {
      router.push('/'); 
    }
    setIsMobileMenuOpen(false);
  };

  const handleGoToMap = () => {
    setIsMobileMenuOpen(false);
    router.push('/map');
  };

  return (
    <header className={`sticky top-0 z-50 transition-colors relative ${
      highContrast 
        ? 'bg-black' 
        : 'bg-[var(--color-bg-primary)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-bg-primary)]/60'
    }`}>
      
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src={`${basePath}/img/logo_homus.png`} 
            alt="Логотип Доступная Якутия" 
            className="h-10 w-auto object-contain"
          />
          <span 
            className={`${highContrast ? 'text-white' : 'text-[var(--color-header-title)]'} font-sangha`}
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
              letterSpacing: '0.02em',
            }}
          >
            Доступная Якутия
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/advice" className="text-[clamp(0.875rem,1.5vw,1.125rem)] font-bold hover:text-[var(--color-accent)] transition-colors text-[var(--color-text-primary)]">
            Практические советы
          </Link>
          <Link href="/yakutia" className="text-[clamp(0.875rem,1.5vw,1.125rem)] font-bold hover:text-[var(--color-accent)] transition-colors text-[var(--color-text-primary)]">
            О Якутии
          </Link>
          <button 
            onClick={handleScrollToAbout} 
            className="text-[clamp(0.875rem,1.5vw,1.125rem)] font-bold hover:text-[var(--color-accent)] transition-colors text-[var(--color-text-primary)] cursor-pointer"
          >
            О проекте
          </button>
          
          {/* ✅ "Перейти на карту" - как обычный текст, но темно-оранжевый */}
          <button 
            onClick={handleGoToMap}
            className={`text-[clamp(0.875rem,1.5vw,1.125rem)] font-bold text-[var(--color-accent-dark)] hover:text-[var(--color-accent-hover)] transition-colors cursor-pointer ${
              highContrast ? 'text-white hover:text-gray-300' : ''
            }`}
          >
            Перейти на карту
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleAccessibility}
            className={`w-auto px-2 ${highContrast ? 'text-white hover:bg-white/20' : ''}`}
            title="Версия для слабовидящих"
            aria-label="Версия для слабовидящих: высокий контраст и крупный шрифт"
            aria-pressed={highContrast}
          >
            <img
              src={`${basePath}/img/eye.png`}
              alt=""
              aria-hidden="true"
              className="h-5 w-auto object-contain dark-contrast:brightness-0 dark-contrast:invert"
            />
          </Button>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div className={`border-b ${highContrast ? 'border-white/30' : 'border-[var(--color-card-border)]'}`} />
      
      <div 
        className="w-full bg-repeat-x"
        style={{ 
          backgroundImage: `url("${basePath}/img/uzor.svg")`,
          backgroundSize: "auto 30px",
          backgroundPosition: "bottom center",
          height: "30px",
          opacity: highContrast ? 0.3 : 0.7,
          filter: highContrast ? 'invert(1)' : 'none',
        }}
      />

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--color-bg-primary)] border-b border-[var(--color-card-border)] shadow-lg py-4 px-4 flex flex-col gap-4 z-20">
          <Link href="/advice" className="py-2 text-lg font-bold text-[var(--color-text-primary)]" onClick={() => setIsMobileMenuOpen(false)}>
            Практические советы
          </Link>
          <Link href="/yakutia" className="py-2 text-lg font-bold text-[var(--color-text-primary)]" onClick={() => setIsMobileMenuOpen(false)}>
            О Якутии
          </Link>
          <button 
            onClick={handleScrollToAbout}
            className="py-2 text-lg font-bold text-[var(--color-text-primary)] text-left"
          >
            О проекте
          </button>
          
          {/* ✅ "Перейти на карту" в мобильном меню - темно-оранжевый */}
          <button 
            onClick={handleGoToMap}
            className={`py-2 text-lg font-bold text-[var(--color-accent-dark)] text-left hover:text-[var(--color-accent-hover)] transition-colors ${
              highContrast ? 'text-white hover:text-gray-300' : ''
            }`}
          >
            Перейти на карту
          </button>
        </div>
      )}
    </header>
  );
}
```

## File: next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Включает экспорт статического HTML
  images: {
    unoptimized: true,  // GitHub Pages не поддерживает оптимизацию изображений Next.js
  },
  basePath: process.env.NODE_ENV === 'production' ? '/site-test-map' : undefined,
  trailingSlash: true,  // Рекомендуется для GitHub Pages
  typescript: {
    ignoreBuildErrors: true,
  },
   allowedDevOrigins: [
    '172.20.10.8',     // IP вашего iPhone (замените на актуальный)
    '*.local',           // Для macOS .local адресов
    '*.local-ip.com',    // Альтернативный вариант для локальных IP
  ],
}

export default nextConfig
```

## File: components/accessible-yakutia-map.tsx
```typescript
"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap, AttributionControl } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ContrastToggle from "@/components/ContrastToggle"
import { useRouter } from "next/navigation";
import {
  Filter,
  X,
  RotateCcw,
  Phone,
  Globe,
  MapPin,
  Accessibility,
  Eye,
  Ear,
  Utensils,
  Heart,
  Brain,
  Wind,
  Users,
  Sparkles,
  Hospital,
  Clock,
  Building2,
  Hotel,
  UtensilsCrossed,
  Coffee,
  TreePine,
  Theater,
  Stethoscope,
  Flower2,
  Landmark,
  ShoppingBag,
  Dumbbell,
  Mountain,
  Palette,
  Ticket,
  GraduationCap,
  Menu,
  Search,
  List,
  LocateFixed,
} from "lucide-react"

// Types
interface MapObject {
  id: string
  name: string
  category: string
  layers: string[]
  coordinates: [number, number] | null
  address?: string
  workingHours?: string
  description: string
  accessibility: Record<string, string>
  contraindications?: string
  tickets?: string
  benefits?: string
  notes?: string
  photos: string[]
  contacts: {
    phone?: string
    website?: string
    yandexMap?: string
  }
}

export interface AccessibleYakutiaMapProps {
  onPlaceSelect?: (id: string) => void
}

// Configuration
const CONFIG = {
  mapCenter: [62.0355, 129.6755] as [number, number],
  defaultZoom: 11,
  minZoom: 5,
  maxZoom: 18,
}

// Filter colors
const FILTER_COLORS: Record<string, string> = {
  inclusive: "#E38920",
  vision_impaired: "#FF6B6B",
  hearing_impaired: "#FFA07A",
  deaf_mute: "#DDA15E",
  dietary: "#95E1D3",
  cardiovascular: "#E63946",
  mobility: "#457B9D",
  mental: "#A8DADC",
  respiratory: "#1D3557",
  family: "#FFB703",
  ethnomedicine: "#8B5A3C",
  health: "#52B788",
}

// Filter definitions
const CATEGORY_FILTERS = [
  { id: "inclusive", name: "Доступная среда", icon: Accessibility },
  { id: "vision_impaired", name: "Нарушения зрения", icon: Eye },
  { id: "hearing_impaired", name: "Нарушения слуха", icon: Ear },
  { id: "deaf_mute", name: "Глухонемые", icon: Ear },
  { id: "dietary", name: "Питание", icon: Utensils },
  { id: "cardiovascular", name: "Сердечно-сосудистые", icon: Heart },
  { id: "mobility", name: "Подвижность", icon: Accessibility },
  { id: "mental", name: "Ментальные особенности", icon: Brain },
  { id: "respiratory", name: "Респираторные", icon: Wind },
  { id: "family", name: "Семьи с детьми", icon: Users },
  { id: "ethnomedicine", name: "Народная медицина", icon: Sparkles },
  { id: "health", name: "Здоровье", icon: Hospital },
]

const CATEGORY_CONFIG: Record<string, { name: string; icon: typeof Building2 }> = {
  museum: { name: "Музей", icon: Building2 },
  hotel: { name: "Гостиница", icon: Hotel },
  restaurant: { name: "Ресторан", icon: UtensilsCrossed },
  cafe: { name: "Кафе", icon: Coffee },
  park: { name: "Парк", icon: TreePine },
  theater: { name: "Театр", icon: Theater },
  medical: { name: "Медицина", icon: Stethoscope },
  spa: { name: "СПА/Оздоровление", icon: Flower2 },
  monument: { name: "Памятник", icon: Landmark },
  shopping: { name: "Торговый центр", icon: ShoppingBag },
  sports: { name: "Спорт", icon: Dumbbell },
  nature: { name: "Природа", icon: Mountain },
  culture: { name: "Культура", icon: Palette },
  entertainment: { name: "Развлечения", icon: Ticket },
  education: { name: "Образование", icon: GraduationCap },
}

// Метаданные категорий доступности
const ACCESS_META: { id: string; name: string; icon: typeof Building2 }[] = [
  { id: "mobility", name: "Передвижение", icon: Accessibility },
  { id: "vision_impaired", name: "Нарушения зрения", icon: Eye },
  { id: "hearing_impaired", name: "Нарушения слуха", icon: Ear },
  { id: "deaf_mute", name: "Глухонемые", icon: Ear },
  { id: "dietary", name: "Питание", icon: Utensils },
  { id: "cardiovascular", name: "Сердечно-сосудистые", icon: Heart },
  { id: "respiratory", name: "Дыхательная система", icon: Wind },
  { id: "mental", name: "Ментальные особенности", icon: Brain },
  { id: "family", name: "Семьи с детьми", icon: Users },
  { id: "ethnomedicine", name: "Народная медицина", icon: Sparkles },
  { id: "health", name: "Отдых с пользой", icon: Hospital },
]

function getCategoryMarkerIcon(category: string) {
  const iconPaths: Record<string, string> = {
    museum: '<path d="M3 22V8l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M6 22V11h4v11"/><path d="M14 22V11h4v11"/>',
    hotel: '<path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
    restaurant: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
    cafe: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/>',
    park: '<path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M19 10v.2A3 3 0 0 1 17.9 16v0H14v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M16 16v6"/>',
    theater: '<path d="M2 10s3-3 3-8"/><path d="M22 10s-3-3-3-8"/><path d="M10 2c0 4.4-3.6 8-8 8"/><path d="M14 2c0 4.4 3.6 8 8 8"/><path d="M2 10s2 2 2 5"/><path d="M22 10s-2 2-2 5"/><path d="M8 15h8"/><path d="M2 22v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1"/>',
    medical: '<path d="M12 6v4"/><path d="M14 14h-4"/><path d="M14 18h-4"/><path d="M14 8h-4"/><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"/>',
    spa: '<path d="M12 22c5.5-2.5 7-8.5 7-12a5 5 0 0 0-5-5c-2 0-3.5 1.5-4 3-.5-1.5-2-3-4-3a5 5 0 0 0-5 5c0 3.5 1.5 9.5 7 12l2-1 2 1z"/>',
    monument: '<path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    shopping: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    sports: '<circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/><path d="M2 12h20"/>',
    nature: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
    culture: '<path d="M12 2v4"/><path d="m6.8 14-3.5 2"/><path d="m20.7 7-3.5 2"/><path d="M6.8 10 3.3 8"/><path d="m20.7 17-3.5-2"/><circle cx="12" cy="12" r="6"/>',
    entertainment: '<rect width="20" height="12" x="2" y="6" rx="2"/><path d="M6 12h.01"/><path d="M10 12h.01"/><path d="M14 12h.01"/><path d="M18 12h.01"/>',
    education: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  }
  const iconPath = iconPaths[category] || '<circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/>'
  
  const pinColor = "#B86A18";

  return L.divIcon({
    className: "custom-marker-wrapper",
    html: `<div style="position: relative; width: 36px; height: 48px; filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));">
      <svg width="36" height="48" viewBox="0 0 36 48" style="position: absolute; top: 0; left: 0;">
        <path d="M 18 2 C 9.163 2 2 9.163 2 18 C 2 31 18 46 18 46 C 18 46 34 31 34 18 C 34 9.163 26.837 2 18 2 Z" fill="${pinColor}" stroke="white" stroke-width="2"/>
      </svg>
      <div style="position: absolute; top: 9px; left: 0; width: 100%; display: flex; justify-content: center; align-items: center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${iconPath}
        </svg>
      </div>
    </div>`,
    iconSize: [36, 48],
    iconAnchor: [18, 46], 
    popupAnchor: [0, -46], 
  })
}

function MapBoundsController({ objects }: { objects: MapObject[] }) {
  const map = useMap()
  useEffect(() => {
    const coords = objects
      .map((obj) => obj.coordinates)
      .filter((c): c is [number, number] => Array.isArray(c))
    if (coords.length > 0) {
      const bounds = L.latLngBounds(coords)
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 13 })
    }
  }, [objects, map])
  return null
}

// Отдаёт инстанс карты наружу (для кнопки центровки)
function MapController({ onReady }: { onReady: (map: L.Map) => void }) {
  const map = useMap()
  useEffect(() => { onReady(map) }, [map, onReady])
  return null
}

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

interface SidebarContentProps {
  activeLayers: string[]
  searchQuery: string
  filteredObjectsCount: number
  toggleLayer: (id: string) => void
  resetFilters: () => void
  setSearchQuery: (query: string) => void
  onClose?: () => void
  objects: MapObject[]
  onPlaceSelect?: (id: string) => void
  getBadgeColor: (obj: MapObject) => string
}

function SidebarContent({
  activeLayers,
  searchQuery,
  filteredObjectsCount,
  toggleLayer,
  resetFilters,
  setSearchQuery,
  onClose,
  objects,
  onPlaceSelect,
  getBadgeColor
}: SidebarContentProps) {
  const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : ''

  return (
    <div className="flex h-full flex-col bg-[var(--color-bg-white)] overflow-hidden">
      {onClose && (
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-card-border)] lg:hidden bg-[var(--color-bg-white)] z-20">
          <h2 className="font-sangha text-2xl text-[var(--color-green-dark)] leading-none pt-1">Списки и фильтры</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-[var(--color-text-primary)]">
            <X className="h-6 w-6" />
          </Button>
        </div>
      )}

      <div className="flex flex-col px-5 py-4 border-b border-[var(--color-card-border)] bg-[var(--color-bg-white)] shadow-sm z-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
          <input
            type="text"
            placeholder="Поиск места..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-card-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:bg-[var(--color-bg-white)] transition-all"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-[var(--color-bg-primary)]">
        <div className="p-5 bg-[var(--color-bg-white)] border-b border-[var(--color-card-border)]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-bold text-[var(--color-green-dark)]">Кому подходит:</span>
            {activeLayers.length > 1 && (
              <button onClick={resetFilters} className="text-xs text-[var(--color-accent)] hover:underline flex items-center gap-1 font-medium">
                <RotateCcw className="size-3" /> Сбросить
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORY_FILTERS.map((filter) => {
              const IconComponent = filter.icon;
              const isActive = activeLayers.includes(filter.id);
              return (
                <button
                  key={filter.id}
                  onClick={() => toggleLayer(filter.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                    isActive 
                      ? "bg-[var(--color-accent)]/10 border-[var(--color-accent)] text-[var(--color-text-primary)] shadow-sm" 
                      : "bg-[var(--color-bg-white)] border-[var(--color-card-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/50"
                  }`}
                >
                  <IconComponent className="size-3.5" style={{ color: isActive ? FILTER_COLORS[filter.id] : 'currentColor' }} />
                  <span className="text-xs font-bold">{filter.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="text-sm font-bold text-[var(--color-text-secondary)] px-1 mb-1">
            Найдено мест: {filteredObjectsCount}
          </div>
          
          {objects.length === 0 && (
            <p className="p-6 text-center text-sm text-[var(--color-text-secondary)]">Ничего не найдено. Измените фильтры или поисковый запрос.</p>
          )}
          
          {objects.map((obj) => {
            const CatIcon = CATEGORY_CONFIG[obj.category]?.icon || MapPin
            const color = getBadgeColor(obj)
            const groups = ACCESS_META.filter((m) => obj.layers.includes(m.id))
            return (
              <button
                key={obj.id}
                onClick={() => onPlaceSelect?.(obj.id)}
                className="flex w-full items-start gap-4 border border-[var(--color-card-border)] rounded-xl bg-[var(--color-bg-white)] p-4 text-left transition-all hover:border-[var(--color-accent)]/50 hover:shadow-md"
              >
                <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-card-border)]" style={{ backgroundColor: `${color}15` }}>
                  <CatIcon className="size-5" style={{ color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-[var(--color-text-primary)] leading-snug">{obj.name}</div>
                  {obj.address && (
                    <div className="mt-1 flex items-start gap-1 text-xs text-[var(--color-text-secondary)]">
                      <MapPin className="mt-0.5 h-3 w-3 flex-shrink-0 text-[var(--color-accent)]" />
                      <span className="line-clamp-1">{obj.address}</span>
                    </div>
                  )}
                  {groups.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {groups.map((m) => {
                        const Icon = m.icon
                        return (
                          <span
                            key={m.id}
                            title={m.name}
                            className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-[var(--color-card-border)]"
                            style={{ backgroundColor: `${FILTER_COLORS[m.id]}15` }}
                          >
                            <Icon className="size-3.5" style={{ color: FILTER_COLORS[m.id] }} />
                            <span className="text-xs font-bold text-[var(--color-text-primary)]">{m.name}</span>
                          </span>
                        )
                      })}
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Компонент попапа с адаптивным дизайном
function CustomPopupContent({ obj, onPlaceSelect, getBadgeColor, basePath }: {
  obj: MapObject;
  onPlaceSelect?: (id: string) => void;
  getBadgeColor: (obj: MapObject) => string;
  basePath: string;
}) {
  const groups = ACCESS_META.filter((m) => obj.layers.includes(m.id));
  
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-[var(--color-bg-white)] shadow-lg max-h-[80vh] w-[85vw] sm:w-[320px] md:w-[380px]">
      {/* Фото */}
      <div className="relative h-32 w-full flex-shrink-0">
        <img
          src={obj.photos && obj.photos.length > 0 ? obj.photos[0] : `${basePath}/img/placeholder.jpg`}
          alt={obj.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = `${basePath}/img/placeholder.jpg`;
          }}
        />
      </div>

      {/* Контент с прокруткой */}
      <div className="p-3 sm:p-4 space-y-2 overflow-y-auto max-h-[300px] sm:max-h-[400px]">
        <div>
          <Badge 
            className="mb-2 text-white border-0 shadow-sm text-xs sm:text-sm" 
            style={{ backgroundColor: getBadgeColor(obj) }}
          >
            {CATEGORY_CONFIG[obj.category]?.name || obj.category}
          </Badge>
          <h3 className="text-sm sm:text-base font-bold text-[var(--color-text-primary)] leading-tight">
            {obj.name}
          </h3>
        </div>

        <div className="text-xs sm:text-sm text-[var(--color-text-secondary)] space-y-1.5">
          {obj.address && (
            <div className="flex items-start gap-1.5">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0 text-[var(--color-accent)]" />
              <span className="line-clamp-2">{obj.address}</span>
            </div>
          )}
          {obj.workingHours && (
            <div className="flex items-start gap-1.5">
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0 text-[var(--color-accent)]" />
              <span className="line-clamp-1 text-xs sm:text-sm">{obj.workingHours}</span>
            </div>
          )}
        </div>

        {/* Значки доступности */}
        {groups.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {groups.slice(0, 4).map((m) => {
              const Icon = m.icon
              return (
                <span
                  key={m.id}
                  className="flex items-center gap-1 px-1.5 py-0.5 rounded-full border border-[var(--color-card-border)]"
                  style={{ backgroundColor: `${FILTER_COLORS[m.id]}15` }}
                >
                  <Icon className="size-2.5 sm:size-3" style={{ color: FILTER_COLORS[m.id] }} />
                  <span className="text-[8px] sm:text-[10px] font-bold text-[var(--color-text-primary)] hidden xs:inline">
                    {m.name}
                  </span>
                </span>
              )
            })}
            {groups.length > 4 && (
              <span className="text-[8px] sm:text-[10px] font-bold text-[var(--color-text-secondary)] px-1">
                +{groups.length - 4}
              </span>
            )}
          </div>
        )}

        {onPlaceSelect && (
          <div className="pt-2 border-t border-[var(--color-card-border)]">
            <Button 
              className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-xl font-bold py-2.5 sm:py-3 text-xs sm:text-sm"
              onClick={() => onPlaceSelect(obj.id)}
            >
              Подробнее
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AccessibleYakutiaMap({ onPlaceSelect }: AccessibleYakutiaMapProps) {

const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : ''
  const router = useRouter();
  const [objects, setObjects] = useState<MapObject[]>([])
  const [activeLayers, setActiveLayers] = useState<string[]>(["inclusive"])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isHighContrast, setIsHighContrast] = useState(false);

  // Отслеживаем высококонтрастный режим
  useEffect(() => {
    const checkHighContrast = () => {
      const isHC = document.documentElement.classList.contains('high-contrast');
      setIsHighContrast(isHC);
    };
    
    checkHighContrast();
    
    const observer = new MutationObserver(checkHighContrast);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Инстанс карты (для кнопки центровки)
  const mapRef = useRef<L.Map | null>(null)
  const handleMapReady = useCallback((map: L.Map) => { mapRef.current = map }, [])

  useEffect(() => {
    const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : ''
    fetch(`${basePath}/data/objects.json`)
      .then((res) => res.ok ? res.json() : Promise.reject(`HTTP ${res.status}`))
      .then((data) => setObjects(data))
      .catch((err) => console.error("Error loading data:", err))
  }, [])

  const toggleLayer = useCallback((id: string) => {
    setActiveLayers((prev) => prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id])
  }, [])

  const resetFilters = useCallback(() => {
    setActiveLayers(["inclusive"])
    setSearchQuery("")
  }, [])

  const filteredObjects = objects.filter((obj) => {
    if (!obj.coordinates) return false
    const matchesSearch = searchQuery.trim() === "" ||
      obj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      obj.description.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    return obj.layers.some((layer) => activeLayers.includes(layer))
  })

  const getBadgeColor = useCallback((obj: MapObject) => {
    for (const layer of obj.layers) {
      if (activeLayers.includes(layer) && FILTER_COLORS[layer]) return FILTER_COLORS[layer]
    }
    return FILTER_COLORS.inclusive
  }, [activeLayers])

  // Возврат карты к текущим отфильтрованным местам (центровка)
  const recenterMap = () => {
    const map = mapRef.current
    if (!map) return
    const coords = filteredObjects
      .map((o) => o.coordinates)
      .filter((c): c is [number, number] => Array.isArray(c))
    if (coords.length > 0) {
      map.fitBounds(L.latLngBounds(coords), { padding: [50, 50], maxZoom: 13 })
    } else {
      map.setView(CONFIG.mapCenter, CONFIG.defaultZoom)
    }
  }

  return (
    <div className="relative flex h-full w-full overflow-hidden bg-[var(--color-bg-primary)]">
      
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-[1001] lg:hidden backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
      )}

      <div
        className={`fixed inset-y-0 left-0 w-full ${isHighContrast ? 'max-w-[440px]' : 'max-w-[360px]'} z-[1002] transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl`}
        style={{ transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}
      >
        <SidebarContent
          activeLayers={activeLayers}
          searchQuery={searchQuery}
          filteredObjectsCount={filteredObjects.length}
          toggleLayer={toggleLayer}
          resetFilters={resetFilters}
          setSearchQuery={setSearchQuery}
          onClose={() => setMobileMenuOpen(false)}
          objects={filteredObjects}
          onPlaceSelect={onPlaceSelect}
          getBadgeColor={getBadgeColor}
        />
      </div>

      <header className="absolute left-0 right-0 top-0 z-[1000] lg:hidden h-16 bg-[var(--color-bg-white)] border-b border-[var(--color-card-border)] shadow-sm flex items-center px-2 md:px-4 gap-1 md:gap-2 justify-between">
        <button onClick={() => router.push("/")} className="flex items-center gap-1 md:gap-2 hover:opacity-80 transition-opacity flex-shrink-0 min-w-0">
          <img 
            src={`${basePath}/img/logo_homus.png`} 
            alt="Логотип Доступная Якутия" 
            className="h-7 md:h-8 w-auto object-contain"
          />
          <span 
            className={`font-sangha text-base md:text-xl leading-tight pt-1 ${
              isHighContrast ? 'text-white' : 'text-[var(--color-green-dark)]'
            }`}
          >
            Доступная Якутия
          </span>
        </button>
        
        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
          {/* Кнопка "глаз" — высокий контраст */}
          <ContrastToggle />

          <button
            onClick={() => setMobileMenuOpen(true)} 
            className="px-2 md:px-4 py-2 rounded-full bg-[var(--color-accent)] text-white shadow-md hover:bg-[var(--color-accent-hover)] flex items-center gap-1 md:gap-2 font-bold text-xs md:text-sm flex-shrink-0"
            aria-label="Меню"
          >
            <Menu className="size-3 md:size-4" />
            <span className="hidden xs:inline">Списки</span>
            <span className="xs:hidden">Фильтры</span>
          </button>
        </div>
      </header>

      <aside className={`hidden lg:flex h-full ${isHighContrast ? 'w-[500px]' : 'w-[400px]'} flex-shrink-0 flex-col border-r border-[var(--color-card-border)] shadow-xl z-10 bg-[var(--color-bg-white)] transition-[width] duration-300`}>
        <div className="flex items-center justify-between gap-2 bg-[var(--color-bg-white)] border-b border-[var(--color-card-border)] px-6 py-6 text-[var(--color-text-primary)] shadow-sm">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-4 min-w-0 text-left hover:opacity-80 transition-opacity"
          >
            <img
              src={`${basePath}/img/logo_homus.png`}
              alt="Логотип Доступная Якутия"
              className="h-12 w-auto object-contain flex-shrink-0"
            />
            <div className="min-w-0">
              <h1 className={`text-2xl font-sangha tracking-tight ${isHighContrast ? 'text-white' : 'text-[var(--color-green-dark)]'}`}>
                Доступная Якутия
              </h1>
              <p className="text-sm text-[var(--color-text-secondary)]">Вернуться на главную</p>
            </div>
          </button>
          <ContrastToggle className="flex-shrink-0" />
        </div>

        <SidebarContent
          activeLayers={activeLayers}
          searchQuery={searchQuery}
          filteredObjectsCount={filteredObjects.length}
          toggleLayer={toggleLayer}
          resetFilters={resetFilters}
          setSearchQuery={setSearchQuery}
          objects={filteredObjects}
          onPlaceSelect={onPlaceSelect}
          getBadgeColor={getBadgeColor}
        />
      </aside>

      <main className="relative flex-1 pt-[64px] lg:pt-0 bg-[var(--color-bg-primary)]">
        <MapContainer 
          attributionControl={false} 
          center={CONFIG.mapCenter} 
          zoom={CONFIG.defaultZoom} 
          minZoom={CONFIG.minZoom} 
          maxZoom={CONFIG.maxZoom} 
          className="h-full w-full z-0" 
          zoomControl={true}
        >
          <AttributionControl prefix={false} />
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          />
          {filteredObjects.map((obj) => (
            <Marker
              key={obj.id}
              position={obj.coordinates!}
              icon={getCategoryMarkerIcon(obj.category)}
              title={obj.name}
              eventHandlers={{
                add: (e) => {
                  const el = (e.target as L.Marker).getElement()
                  if (el) el.setAttribute("aria-label", obj.name)
                },
              }}
            >
              <Popup
                maxWidth={400} 
                minWidth={280} 
                className="custom-popup"
              >
                <CustomPopupContent 
                  obj={obj} 
                  onPlaceSelect={onPlaceSelect} 
                  getBadgeColor={getBadgeColor} 
                  basePath={basePath} 
                />
              </Popup>
            </Marker>
          ))}
          {filteredObjects.length > 0 && <MapBoundsController objects={filteredObjects} />}
          <MapController onReady={handleMapReady} />
        </MapContainer>

        {/* Кнопка центровки — вернуть карту ко всем местам */}
        <button
          onClick={recenterMap}
          title="Показать все места"
          aria-label="Показать все места на карте"
          className="absolute bottom-6 right-4 z-[400] flex items-center justify-center size-12 rounded-full bg-[var(--color-bg-white)] shadow-lg border border-[var(--color-card-border)] text-[var(--color-accent)] hover:bg-[var(--color-bg-primary)] transition-colors dark-contrast:text-white"
        >
          <LocateFixed className="size-5" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:hidden pointer-events-none z-[400]">
          <Badge variant="secondary" className="px-5 py-3 text-sm font-bold shadow-lg bg-[var(--color-bg-white)]/90 backdrop-blur-md border border-[var(--color-card-border)] text-[var(--color-text-primary)] rounded-full">
            <MapPin className="h-4 w-4 mr-2 text-[var(--color-accent)]" /> Найдено: {filteredObjects.length}
          </Badge>
        </div>
      </main>
    </div>
  )
}
```

## File: app/page.tsx
```typescript
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Sparkles,
  Eye,
  Ear,
  Users,
  Hospital,
  Accessibility,
  ChevronRight,
  Heart,
  Brain,
  Wind
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/AppHeader";
import PopularPlaces from "@/components/PopularPlaces";
import UpcomingEvents from "@/components/UpcomingEvents";
import VisionModal from "@/components/VisionModal";

// Типы для категорий
type Category = {
  id: string;
  icon: any;
  label: string;
  color: string;
};
const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : '';
const categories: Category[] = [
  { id: "mobility", icon: Accessibility, label: "Проблемы с передвижением", color: "#457B9D" },
  { id: "vision", icon: Eye, label: "Нарушения зрения", color: "#FF6B6B" },
  { id: "hearing", icon: Ear, label: "Нарушения слуха", color: "#FFA07A" },
  { id: "deaf_mute", icon: Ear, label: "Глухонемые", color: "#DDA15E" },
  { id: "dietary", icon: Heart, label: "Питание", color: "#95E1D3" },
  { id: "cardiovascular", icon: Heart, label: "Сердечно-сосудистые", color: "#E63946" },
  { id: "mental", icon: Brain, label: "Ментальные особенности", color: "#A8DADC" },
  { id: "respiratory", icon: Wind, label: "Респираторные", color: "#1D3557" },
  { id: "family", icon: Users, label: "Семьи с детьми", color: "#FFB703" },
  { id: "ethnomedicine", icon: Sparkles, label: "Народная медицина", color: "#8B5A3C" },
  { id: "health", icon: Hospital, label: "Здоровье", color: "#52B788" },
];

export default function HomePage() {
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : '';

  // ✅ ДОБАВЛЯЕМ ЭТОТ useEffect ДЛЯ ОБРАБОТКИ ЯКОРЯ
  useEffect(() => {
    // Проверяем флаг в sessionStorage (устанавливается в Header при клике на "О проекте")
    const shouldScrollToAbout = sessionStorage.getItem('scrollToAbout');

    if (shouldScrollToAbout === 'true') {
      // Удаляем флаг, чтобы не скроллить при обновлении страницы
      sessionStorage.removeItem('scrollToAbout');

      // Функция скролла
      const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      };

      // Проверяем, есть ли элемент уже в DOM
      if (document.getElementById('about')) {
        // Если есть - скроллим сразу
        setTimeout(scrollToAbout, 100);
      } else {
        // Если нет - ждем появления с MutationObserver
        const observer = new MutationObserver(() => {
          if (document.getElementById('about')) {
            observer.disconnect();
            scrollToAbout();
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true
        });

        // Таймаут на всякий случай (если элемент так и не появился)
        const timeout = setTimeout(() => {
          observer.disconnect();
          scrollToAbout();
        }, 3000);

        return () => {
          observer.disconnect();
          clearTimeout(timeout);
        };
      }
    }
  }, []);// Пустой массив зависимостей — запускается только один раз при монтировании

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">

      {/* Ссылка «Перейти к содержимому» для клавиатуры и скринридеров */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-white focus:font-semibold focus:shadow-lg"
      >
        Перейти к содержимому
      </a>

      {/* Входное окно про нарушения зрения (раз за сессию, только на главной) */}
      <VisionModal />

      {/* Вызываем нашу новую переиспользуемую шапку и передаем функцию открытия фильтров */}
      <Header onOpenFilters={() => setShowFilters(true)} />

      <main id="main-content">
        {/* Блок 2. Главный экран с фоновым изображением */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-12 lg:py-16">
          {/* Фоновое изображение */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('${basePath}/img/background_photo.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Затемнение — теплое бежевое */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(248, 246, 241, 0.6) 0%, rgba(237, 235, 229, 0.4) 50%, rgba(248, 246, 241, 0.6) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-8">

              {/* Левая часть — ФОТО */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 flex justify-center lg:justify-start w-full overflow-visible"
              >
                <div className="w-full max-w-[400px] lg:max-w-none flex justify-center items-center p-2">
                  <img
                    src={`${basePath}/img/cut_map.png`}
                    alt="Якутия"
                    className="max-w-full h-auto object-contain 
                             [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_85%)] 
                             [mask-image:linear-gradient(to_bottom,black_40%,transparent_85%)] 
                             lg:[-webkit-mask-image:none] lg:[mask-image:none] 
                             scale-100 lg:scale-125 origin-center"
                  />
                </div>
              </motion.div>

              {/* Правая часть — ТЕКСТ */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 text-center lg:text-right -mt-16 sm:-mt-24 lg:mt-0 relative z-10"
              >
                <h1
                  className="font-sangha font-bold leading-[1.05] tracking-wide text-green-dark"
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw + 1rem, 4.5rem)',
                    textShadow: '17px -7px 13.9px rgba(99, 84, 62, 0)',
                  }}
                >
                  УВЕРЕННЫЙ МАРШРУТ
                  <br />
                  <span className="text-accent-custom">НАЧИНАЕТСЯ ЗДЕСЬ</span>
                </h1>

                <p
                  className="mt-6 max-w-xl mx-auto lg:ml-auto lg:mr-0 text-brown-dark leading-relaxed"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
                >
                  Интерактивный навигатор для комфортного и доступного путешествия по Республике Саха.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end mt-8">
                  {/* Кнопка "Перейти на карту" */}
                  <Button
                    size="lg"
                    className="
    bg-accent-custom 
    hover:bg-[var(--color-accent-hover)] 
    text-[var(--color-text-white)] 
    px-8 py-6 md:py-7 
    rounded-xl shadow-lg 
    font-bold tracking-wide 
    border-2 border-transparent
    hover:border-[var(--color-accent-hover)]
    min-w-[220px]
  "
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
                    onClick={() => router.push('/map')}
                  >
                    <MapPin className="mr-2 size-5" />
                    Перейти на карту
                  </Button>

                  {/* Кнопка "Подобрать места" */}
                  <Button
                    size="lg"
                    variant="outline"
                    className="
    bg-[var(--color-button-primary-bg)] 
    text-[var(--color-button-primary-text)] 
    border-2 border-[var(--color-button-primary-border)]
    hover:bg-[var(--color-button-primary-hover)]
    hover:text-[var(--color-text-white)]
    hover:border-[var(--color-button-primary-hover)]
    px-8 py-6 md:py-7 
    rounded-xl shadow-lg 
    font-bold tracking-wide 
    transition-all duration-200
    min-w-[220px]
  "
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
                    onClick={() => setShowFilters(true)}
                  >
                    <Sparkles className="mr-2 size-5" />
                    Подобрать места
                  </Button>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Блок 3. Популярные категории */}
        <section className="py-16 lg:py-24 bg-[var(--color-bg-primary)]">
          <div className="container mx-auto px-4">
            <h2 className="font-bold text-center mb-12 text-[var(--color-text-primary)]"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
              Для кого мы создали этот сервис
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Card
                    key={cat.id}
                    className="p-6 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-[var(--color-accent)]/50 bg-[var(--color-bg-primary)] border-[var(--color-card-border)] dark-contrast:bg-gray-900 dark-contrast:border-gray-700"
                    onClick={() => {
                      localStorage.setItem("preferredLayers", JSON.stringify([cat.id === 'vision' ? 'vision_impaired' : cat.id === 'hearing' ? 'hearing_impaired' : cat.id]));
                      router.push('/map');
                    }}
                  >
                    <div
                      className="size-12 rounded-full flex items-center justify-center text-[var(--color-text-white)] mb-2 dark-contrast:bg-white"
                      style={{ backgroundColor: cat.color }}
                    >
                      <Icon className="size-6 dark-contrast:text-black" />
                    </div>
                    <span className="font-medium text-[clamp(0.875rem,1.5vw,1rem)] text-[var(--color-text-primary)] dark-contrast:text-white">{cat.label}</span>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Блок 4. Карусель с объектами */}
        <section className="relative py-16 lg:py-24 bg-[var(--color-bg-secondary)] dark-contrast:bg-black overflow-hidden">
          <img
            src={`${basePath}/img/events-pattern.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-4 right-0 h-[650px] w-auto opacity-40 dark-contrast:hidden"
          />
          <img
            src={`${basePath}/img/union.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-0 bottom-0 w-[40%] max-w-[700px] opacity-25 dark-contrast:hidden"
          />
          <div className="container relative mx-auto px-4">
            <div className="flex flex-wrap justify-between items-end gap-x-6 gap-y-2 mb-8">
              <h2 className="font-sangha"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#E38920' }}>
                ПОПУЛЯРНЫЕ МЕСТА
              </h2>
              <Link href="/map" className="text-[var(--color-accent)] font-medium hover:underline flex items-center text-[clamp(0.875rem,1.5vw,1rem)]">
                Смотреть все <ChevronRight className="size-4" />
              </Link>
            </div>

            <PopularPlaces />
          </div>
        </section>

        {/* Блок 5. Ближайшие события */}
        <section className="relative py-16 lg:py-24 bg-[var(--color-bg-primary)] overflow-hidden">
          <img
            src={`${basePath}/img/events-pattern.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-4 right-0 h-[750px] w-auto opacity-40 dark-contrast:hidden"
          />
          <img
            src={`${basePath}/img/union.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 w-[42%] max-w-[700px] opacity-30 dark-contrast:hidden"
          />
          <div className="container relative mx-auto px-4">
            <h2
              className="font-sangha text-center mb-12 text-[var(--color-title-events)]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              БЛИЖАЙШИЕ СОБЫТИЯ
            </h2>
            <UpcomingEvents />
          </div>
        </section>

        {/* Блок 6. О проекте */}
        {(() => {
          // Объявляем basePath прямо внутри компонента перед рендером
          const basePath = process.env.NODE_ENV === 'production' ? '/site-test-map' : '';

          return (
            <section
              id="about"
              className="pt-20 pb-36 lg:pt-32 lg:pb-56 bg-[var(--color-green-dark)] text-white dark-contrast:bg-gray-900 relative"
              style={{
                backgroundImage: `url('${basePath}/img/o_proekte.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom center',
                backgroundSize: 'contain'
              }}
            >
              <div className="container mx-auto px-4 text-center">
                {/* Заголовок без font-bold с фирменным акцентным шрифтом */}
                <h2 className="font-sangha mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  О проекте
                </h2>

                <p className="max-w-3xl mx-auto opacity-90 mb-8 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                  «Доступная Якутия» — это некоммерческий проект, созданный для того, чтобы сделать туризм в регионе доступным для каждого. Мы собираем информацию об объектах, проверяем их доступность и помогаем планировать комфортные маршруты.
                </p>


              </div>
            </section>
          );
        })()}
      </main>

      {/* Модальное окно фильтров */}
      <Dialog open={showFilters} onOpenChange={setShowFilters}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-[var(--color-bg-primary)] border-[var(--color-card-border)] dark-contrast:bg-black dark-contrast:text-white dark-contrast:border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[var(--color-text-primary)] dark-contrast:text-white">
              Что для вас важно?
            </DialogTitle>
            <DialogDescription className="text-base mt-2 text-[var(--color-text-secondary)] dark-contrast:text-gray-300">
              Отметьте критерии, которые важны при выборе места. Это поможет нам подобрать подходящие объекты на карте.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            {categories.slice(0, 6).map((need) => {
              const Icon = need.icon;
              return (
                <label
                  key={need.id}
                  className="flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all bg-[var(--color-bg-white)] border-[var(--color-card-border)] hover:border-[var(--color-accent)]/50 dark-contrast:border-gray-700 dark-contrast:hover:border-white"
                >
                  <Checkbox className="mt-1" />
                  <div className="size-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${need.color}20` }}>
                    <Icon className="size-5" style={{ color: need.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-[var(--color-text-primary)] dark-contrast:text-white">{need.label}</h3>
                  </div>
                </label>
              );
            })}
          </div>
          <DialogFooter className="mt-6 flex-col sm:flex-row gap-3">
            <Button
              onClick={() => {
                setShowFilters(false);
                router.push('/map');
              }}
              className="flex-1 bg-accent-custom hover:bg-[var(--color-accent-hover)] text-[var(--color-text-white)] py-6 text-lg rounded-lg font-bold"
            >
              Показать подходящие места
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}
```
