
const Footer = () => {
  return (
    <footer className="bg-secondary relative flex min-h-[560px] flex-col justify-between gap-20 overflow-hidden px-4 py-14 md:p-14">
      
      <div className="relative z-20 flex flex-col-reverse gap-20 md:grid md:grid-cols-2 md:gap-12">
        
          <p className="text-tertiary-content flex flex-col self-end text-right text-xs md:text-center">
            <span>© 2025 — Copyright</span>
            <span>All Rights reserved</span>
          </p>
       
        <div className="flex flex-col justify-between gap-[200px] md:flex-row md:gap-8">
          <div className="space-y-10 md:self-end">
            <div className="flex flex-col">
              <h5 className="text-neutral mb-4 text-lg font-medium">Contact Us</h5>
              <a
                href="mailto:gsdsuryashree@gmail.com"
                className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300">
                gsdsuryashree@gmail.com
              </a>
              <a
                href="tel:+91 9360496252"
                className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300">
                +91 9360496252
              </a>
            </div>
           
          </div>

          
        </div>
      </div>

     
    </footer>
  )
}

export default Footer
