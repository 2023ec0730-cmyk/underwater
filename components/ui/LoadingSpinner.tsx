import { Spinner } from "@/components/ui/spinner"

export function LoadingSpinner() {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <Spinner className="h-12 w-12 text-primary" />
    </div>
  )
}
