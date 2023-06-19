import { For, type Component } from "solid-js"

import { cn } from "@/lib/utils"

import data from "./data.json"

const App: Component = () => {
  return (
    <main class="grid min-h-screen place-items-center text-lg">
      <div class="flex min-h-screen w-full flex-col shadow-lg sm:min-h-0 sm:w-min sm:flex-row sm:rounded-[2rem]">
        <div class="from-gradients-light-slate-blue to-gradients-light-royal-blue flex w-full flex-col justify-between gap-4 rounded-b-[2rem] bg-gradient-to-b p-7 text-center text-white sm:max-w-[23rem] sm:rounded-t-[2rem] sm:px-14 sm:py-10">
          <h2 class="text-2xl opacity-60">Your Result!</h2>
          <div class="grid place-items-center">
            <div class="from-gradients-violet-blue to-gradients-persian-blue grid aspect-square w-32 place-items-center gap-0 rounded-full bg-gradient-to-b p-6 sm:w-48 sm:p-8">
              <div>
                <h3 class="text-5xl font-bold sm:text-7xl">76</h3>
                <span class="opacity-40">of 100</span>
              </div>
            </div>
          </div>
          <h2 class="text-3xl">Great</h2>
          <p class="text-lg leading-6 opacity-60">
            You scored higher than 65% of the people who have taken these tests
          </p>
        </div>
        <div class="flex flex-col justify-between p-5 sm:p-10">
          <div class="flex flex-col">
            <h2 class="text-2xl font-semibold">Summary</h2>
            <div class="flex flex-col items-stretch justify-center space-y-4 py-6">
              <For each={data}>
                {(item) => (
                  <div
                    class={cn(
                      "flex justify-between gap-4 rounded-xl p-4",
                      item.category === "Reaction" &&
                        "text-primary-light-red bg-primary-light-red/5",
                      item.category === "Memory" &&
                        "text-primary-orangey-yellow bg-primary-orangey-yellow/5",
                      item.category === "Verbal" &&
                        "text-primary-green-teal bg-primary-green-teal/5",
                      item.category === "Visual" &&
                        "text-primary-cobalt-blue bg-primary-cobalt-blue/5"
                    )}
                  >
                    <div class="flex items-center justify-center">
                      <img src={item.icon} alt={item.category} class="inline" />
                      &nbsp;
                      <span>{item.category}</span>
                    </div>
                    <div class="font-bold">
                      <span class="text-neutral-dark-gray-blue">
                        {item.score}
                      </span>
                      &nbsp;
                      <span class="text-neutral-dark-gray-blue/50">/ 100</span>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>
          <button class="bg-neutral-dark-gray-blue hover:from-gradients-light-slate-blue hover:to-gradients-light-royal-blue w-full rounded-full py-3 text-center text-white transition-all duration-1000 hover:bg-gradient-to-b sm:w-72">
            Continue
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
