const ProjectModal = (props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="relative w-[360px] bg-zinc-950/90 md:w-[800px] rounded-lg p-6">
            <div className="text-2xl text-center mb-4">Services</div>

            <hr className="border-gray-700" />

            <div className="p-4">
              <p className="text-xsm font-semibold italic md:text-sm">wdifvdn</p>
              <p className="text-sm font-bolxd md:text-base text-lime-400">fdgbfn</p>
            </div>

            <div className="mt-4 flex justify-center">
              <button
                onClick={props?.onClose}
                className="w-full px-4 py-2 text-white bg-red-500 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
  )
}

export default ProjectModal