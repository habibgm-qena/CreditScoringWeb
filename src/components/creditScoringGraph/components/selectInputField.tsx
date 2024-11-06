'use client'

import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface SelectInputFieldProps {
  values: Array<{ value: string, placeholder: string }>
  placeholder: string
  onvalueChange: (value: string) => void
}

export function SelectInputField({ values, placeholder, onvalueChange }: SelectInputFieldProps) {
  return (
    <div className="w-full">
      <Select onValueChange={onvalueChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {values.map((value, index) => (
              <SelectItem key={index} value={value.value}>
                {value.placeholder}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
