import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <img 
            src="/assets/images/eventhublogo1.png"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p>2024 EventHub. All Rights reserved by Yan.</p>
      </div>
    </footer>
  )
}

export default Footer