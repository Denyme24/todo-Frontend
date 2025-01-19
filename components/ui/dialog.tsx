import * as React from "react"

export const Dialog = ({ children, open}: { children: React.ReactNode, open: boolean, onOpenChange: (open: boolean) => void }) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        {children}
      </div>
    </div>
  )
}

export const DialogContent = ({ children }: { children: React.ReactNode }) => <div>{children}</div>
export const DialogHeader = ({ children }: { children: React.ReactNode }) => <div className="mb-4">{children}</div>
export const DialogTitle = ({ children }: { children: React.ReactNode }) => <h2 className="text-lg font-semibold">{children}</h2>
export const DialogFooter = ({ children }: { children: React.ReactNode }) => <div className="mt-4 flex justify-end space-x-2">{children}</div>

