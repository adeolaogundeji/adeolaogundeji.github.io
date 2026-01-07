import * as React from "react"

const Button = React.forwardRef(({ className, variant, asChild = false, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : "button"
  
  const variantStyles = {
    secondary: "bg-slate-700 hover:bg-slate-600 text-white",
    outline: "border border-slate-600 hover:bg-slate-800 text-white"
  }
  
  const styles = variantStyles[variant] || "bg-slate-800 hover:bg-slate-700 text-white"
  
  if (asChild) {
    return React.cloneElement(props.children, {
      className: `inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${styles} ${className || ''}`,
      ref
    })
  }
  
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${styles} ${className || ''}`}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }