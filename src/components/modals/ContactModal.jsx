const ContactModal = (props) => {
  return (
    <div className="fixed inset-0 z-50 my-auto flex items-center justify-center backdrop-blur-sm bg-black/50">
    <div className="relative inset-0 w-[360px] bg-zinc-950/90 md:w-[800px] rounded-lg p-6">
      <div className="text-2xl text-center mb-4 text-white">Services</div>
      <hr className="border-gray-700 mb-4" />

      <div className="p-4">
        <p className="text-xs font-semibold italic md:text-sm text-gray-300">wdifvdn</p>
        <p className="text-sm font-bold md:text-base text-lime-400">fdgbfn</p>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={props?.onContactClose}
          className="w-full px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded"
        >
          Close
        </button>
      </div>
    </div>
  </div>
  )
}

export default ContactModal