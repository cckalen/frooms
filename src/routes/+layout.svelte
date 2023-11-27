<!-- src/routes/layout.svelte -->

<script lang="ts">
  import "../app.postcss";
  import { AppShell, AppBar, Toast, Avatar } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";
  import "../global.css";
  import { initializeStores } from "@skeletonlabs/skeleton";
  import { onNavigate } from "$app/navigation";
  import { afterNavigate } from "$app/navigation";
  import { hideTopBar } from "$lib/store";
  import Footer from "$lib/Footer.svelte";
  import type { AfterNavigate } from "@sveltejs/kit";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject({ mode: dev ? "development" : "production" });

  initializeStores();
  let pageRoute = $page.route.id || "";
  let isOnPostPage = pageRoute.trim() === "/";
  if (isOnPostPage) {
    $hideTopBar = true;
  }

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  afterNavigate((params: AfterNavigate) => {
    const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
    const elemPage = document.querySelector("#page");
    if (isNewPage && elemPage !== null) {
      elemPage.scrollTop = 0;
    }
  });
</script>

<Toast />
<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <div
      class:off-screen={$hideTopBar}
      class="headerdiv bg-secondary-500 transition-all duration-500 ease-in"
    >
      <AppBar>
        <svelte:fragment slot="lead">
          <Icon
            icon="simple-icons:circle"
            class="min-h-[35px] min-w-[35px]  mr-1"
          />
          <strong class="text-xl h3">Frooms</strong>
        </svelte:fragment>
        <svelte:fragment slot="trail">
          <a class="btn btn-sm variant-filled-primary" href="/" target="_blank">
            <Icon
              icon="carbon:dashboard"
              class="min-h-[15px] min-w-[15px]  mr-1"
            />Dashboard
          </a>
          <a class="btn btn-sm variant-filled-primary" href="/" target="_blank">
            <Icon
              icon="fluent:patient-24-filled"
              class="min-h-[15px] min-w-[15px]  mr-1"
            />New Case
          </a>
          <button type="button" class="py-1 px-3 btn variant-filled-primary">
            <Avatar
              src="https://avatars.mds.yandex.net/get-ydo/2375918/2a00000172ccb1550aac12c61181eca92883/320x320"
              width="w-6"
              rounded="rounded-full"
            /><span class="text-sm">Sofia S </span><svg
              class="w-3 h-3 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path></svg
            ></button
          >
        </svelte:fragment>
      </AppBar>
    </div>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
  <svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>

<style>
  @keyframes headerSlideIn {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes headerSlideOut {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100%);
    }
  }

  :root::view-transition-old(header) {
    animation: 300ms ease-out both headerSlideOut;
  }

  :root::view-transition-new(header) {
    animation: 300ms ease-in both headerSlideIn;
  }

  .headerdiv.off-screen {
    position: absolute; /* Take the header out of the document flow */
    transform: translateY(-100%); /* Moves the header above the viewport */
    width: 100%; /* Ensure it spans the full width */
    top: 0; /* Position it at the very top */
    view-transition-name: header;
  }

  /* Final on-screen position */
  .headerdiv {
    position: relative;
    transform: translateY(0);
    view-transition-name: header;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }
  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }
  @keyframes slide-from-right {
    from {
      transform: translateX(300px);
    }
  }
  @keyframes slide-to-left {
    to {
      transform: translateX(-300px);
    }
  }

  :root::view-transition-old(root) {
    animation:
      90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
  }

  :root::view-transition-new(root) {
    animation:
      210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
  }
</style>
