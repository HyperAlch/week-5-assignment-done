<script>
    import { mobileMenuActive } from "../../../layout-stores";

    function closeMobileMenu() {
        mobileMenuActive.update(n => false);
    }
</script>
<div class="absolute top-0 right-0 -mr-12 pt-2">
    <button on:click={closeMobileMenu} type="button" class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <span class="sr-only">Close sidebar</span>
        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
</div>                    