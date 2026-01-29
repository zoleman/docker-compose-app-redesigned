export default function ProductComparison({handleSubmit}){

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="py-16 sm:py-20 lg:py-24">
                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:gap-12">
                        <div className="lg:col-span-2">
                            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                                Hasonlítsd össze az{" "}
                                <span className="text-green-600">élelmiszer árakat</span>{" "}
                                egy helyen
                            </h1>

                            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                                Keress rá bármilyen termékre és találd meg a legjobb árat a
                                legnagyobb magyar áruházak kínálatából.
                            </p>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                <button
                                    type="button"
                                    className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                                    onClick={() => {handleSubmit()
                                    }}
                                >
                                    Összes termék megjelenítése
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}