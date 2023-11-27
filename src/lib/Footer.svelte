<script lang="ts">
  import { getToastStore, type ToastSettings } from "@skeletonlabs/skeleton";

  let enteremail: string = "";
  let showEmailBox: boolean = true;
  const toastStore = getToastStore();
  async function addemail() {
    // Fetching the IP address of the user
    const ipResponse = await fetch("https://api.ipify.org?format=json");
    const { ip } = await ipResponse.json();

    // Creating the payload
    const payload = {
      email: enteremail,
      ip: ip,
    };
    console.log(payload);
    // Making the API call
    const response = await fetch(
      "https://hook.us1.make.com/yq77q6rkzy7cbmlxu1bikfolcxl2njuo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (response.ok) {
      // Handle successful API call
      showEmailBox = false;

      const t: ToastSettings = {
        message: "Email added successfully !",
        autohide: false,
        background: "variant-filled-success",
      };
      toastStore.trigger(t);
      console.log("Email added successfully");
    } else {
      // Handle error
      const t: ToastSettings = {
        message: "Problem with the results list...",
        autohide: false,
        background: "variant-filled-error",
      };
      toastStore.trigger(t);
      console.log("Failed to send request");
    }
  }
</script>

<footer class="bg-primary-500 z-index[0]">
  <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md text-center">
      <strong
        class="block text-center text-l font-bold text-white h4 sm:text-xl"
      >
        Get Exclusive Early Access!
      </strong>
      <strong class="block text-center text-l font-bold text-white sm:text-l">
        Provide Your Email for Exclusive Early Access to Our Beta Releases
      </strong>{#if showEmailBox}
        <form class="mt-6 mb-2">
          <div class="relative max-w-lg">
            <div
              class="emaildiv mt-8 flex flex-col space-y-8 sm:space-y-0 sm:space-x-4 sm:flex-row sm:justify-center"
            >
              <label class="sr-only" for="email"> Email </label>
              <input
                id="email"
                type="text"
                class="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium0"
                placeholder="john@doe.com"
                bind:value={enteremail}
              />
              <button
                on:click|preventDefault={addemail}
                class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-secondary-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-secondary-400"
                >I am in</button
              >
            </div>
          </div>
        </form>
      {:else}
        <p class="">We'll be in touch!</p>
      {/if}
      <span class="text-sm text-secondary-300"
        >We Value Your Privacy. Get early access and updates about our tools
      </span>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
      <div class="mx-auto max-w-sm lg:max-w-none lg:col-span-8">
        <p class="mt-4 text-center text-tertiary-500 lg:text-left">
          LLorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>

      <div
        class="grid grid-cols-2 gap-2 text-center lg:grid-cols-2 lg:text-left lg:col-span-4"
      >
        <div>
          <strong class="font-bold text-tertiary-200"> Quick </strong>

          <ul class="mt-3 space-y-1">
            <li>
              <a
                class="text-tertiary-600 transition hover:text-secondary-100"
                href="/"
              >
                Home
              </a>
            </li>

            <li>
              <a
                class="text-tertiary-600 transition hover:text-secondary-100"
                href="/"
              >
                New Case
              </a>
            </li>

            <li>
              <a
                class="text-tertiary-600 transition hover:text-secondary-100"
                href="/"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <strong class="font-bold text-tertiary-200"> Support </strong>

          <ul class="mt-3 space-y-1">
            <li>
              <a
                class="text-tertiary-600 transition hover:text-secondary-100"
                href="/"
              >
                FAQs
              </a>
            </li>

            <li>
              <a
                class="text-tertiary-600 transition hover:text-secondary-100"
                href="/"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                class="text-tertiary-600 transition hover:text-secondary-100"
                href="/"
              >
                Live Chat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-16 border-t border-gray-100 pt-8">
      <p class="text-center text-xs/relaxed text-gray-200">
        © FROOMS 2023. All rights reserved.
      </p>
    </div>
  </div>
</footer>
