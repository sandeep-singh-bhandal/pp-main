import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <section className="my-20">
        <div className="flex justify-center gap-10 max-sm:overflow-hidden">
          <Image src={"/clients/1.png"} width={200} height={200} alt="client" />
          <Image src={"/clients/2.png"} width={200} height={200} alt="client" />
          <Image src={"/clients/3.png"} width={200} height={200} alt="client" />
          <Image src={"/clients/4.png"} width={200} height={200} alt="client" />
          <Image src={"/clients/5.png"} width={200} height={200} alt="client" />
        </div>
      </section>
  )
}

export default Clients
