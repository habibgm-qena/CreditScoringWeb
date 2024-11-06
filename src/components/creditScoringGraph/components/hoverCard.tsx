import { InfoCircledIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

interface HoverDescriptionProps {
  title: string
  description: string
}

export function HoverDescription({ title, description }: HoverDescriptionProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className="p-0 m-0">
        <Button variant="link"><InfoCircledIcon fontSize={10} style={{ color: 'GrayText' }} /></Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">

        <div className="space-y-1">
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="text-sm font-thin">
            {description}
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
