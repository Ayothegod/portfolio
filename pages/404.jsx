import Footer from "@/components/Footer"


export default function Custom404() {
  return (
    <div className="px-4 bg-black text-[#999] py-1 min-h-screen">
        <section className="max-w-[60rem] mx-auto mt-4">

        Not found
        </section>
    <section className="fixed bottom-0 w-full backdrop-blur-2xl">
        <Footer />
      </section>
    </div>
  )
}