<script>
    import { mobileMenuActive } from "../../../layout-stores";

    function toggleMobileMenu() {
        mobileMenuActive.update(n => !n);
    }
</script>

<button on:click={toggleMobileMenu} type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
    <span class="sr-only">Open sidebar</span>
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
    </svg>
</button>                    