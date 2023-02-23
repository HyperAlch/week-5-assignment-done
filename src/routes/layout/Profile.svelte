<script>
    let hide = true;
    let mouseInMenu = false;

    let menuItems = [
      {name: "Your Profile", href: "/profile", id: 1},
      {name: "Settings", href: "/settings", id: 2},
      {name: "Sign Out", href: "/logout", id: 3},
    ];
</script>

<div class="relative ml-3">
    <div>
      <button
      type="button"
      on:click={() => hide = !hide }
      on:blur={() => { if (!mouseInMenu) hide = true } }
      class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
        <span class="sr-only">Open user menu</span>
        <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      </button>
    </div>

    <div
    class:hide
    on:mouseenter={() => mouseInMenu = true}
    on:mouseleave={() => mouseInMenu = false}
    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
      {#each menuItems as item (item.id)}
        <a 
          on:click={() => hide = true } href="{item.href}" 
          class="block px-4 py-2 text-sm text-gray-700" 
          role="menuitem" tabindex="-1" 
          id="user-menu-item-{item.id}">
            {item.name}
        </a>
      {/each}
    </div>
  </div>

<style>
    .hide {
        display: none;
    }
</style>                    