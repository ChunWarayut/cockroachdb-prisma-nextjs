

export function ArrowRight() {
    return <div class="flex-1 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z" /></svg>
    </div>;
}

export function StepComponent({ name, description, icon, step, nextStep }) {
    return <div class="w-1/3 text-center px-6">
        {nextStep ?
            <div
                class={`bg-gray-300 rounded-lg items-center justify-center border border-gray-200 flex flex-col`}
            >
                <div
                    class={`w-3/3 bg-transparent h-10 flex items-center justify-center icon-step text-gray-600`}
                >
                    {icon}
                </div>
                <div
                    class={`w-3/3 bg-gray-200 h-24 w-full flex flex-col items-center justify-center px-1 body-step rounded-b-lg`}
                >
                    <h2 class={`font-bold text-sm`}>{name}</h2>
                    <p class={`text-xs text-gray-600`}>
                        ({description})
                    </p>
                </div>
            </div>
            :
            <div
                class={`${!step ? 'bg-cyan-700' : 'bg-cyan-500'} rounded-lg items-center justify-center border ${!step ? 'border-cyan-500' : 'border-cyan-200'} flex flex-col`}
            >
                <div
                    class={`w-3/3 bg-transparent h-10 flex items-center justify-center icon-step ${!step ? 'text-white' : 'text-gray-600'}`}
                >
                    {icon}
                </div>
                <div
                    class={`w-3/3 ${!step ? 'bg-cyan-500' : 'bg-cyan-200'} h-24 w-full flex flex-col items-center justify-center px-1 body-step rounded-b-lg`}
                >
                    <h2 class={`font-bold text-sm ${!step ? 'text-white' : 'text-gray-600'}`}>{name}</h2>
                    <p class={`text-xs ${!step ? 'text-white' : 'text-gray-600'}`}>
                        ({description})
                    </p>
                </div>
            </div>}
    </div>;
}
