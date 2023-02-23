<script>
    import "../app.css";
    import MobileMenu from "./layout/dashboard/mobile/Menu.svelte";
    import DesktopMenu from "./layout/dashboard/desktop/Menu.svelte";
    import MenuToggle from "./layout/dashboard/mobile/MenuToggle.svelte";
    import Profile from "./layout/Profile.svelte";
    import SearchBar from "./layout/SearchBar.svelte";
    import Notifications from "./layout/Notifications.svelte";
    import Content from "./layout/main/Content.svelte";
</script>
<div>
    <MobileMenu />
    <DesktopMenu />
    <div class="flex flex-col md:pl-64">
      <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
        <MenuToggle />
        <div class="flex flex-1 justify-between px-4">
          <SearchBar />
          <div class="ml-4 flex items-center md:ml-6">
            <Notifications />
            <Profile />
          </div>
        </div>
      </div>
  
      <main class="flex-1">
        <div class="py-6">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <Content>
                <slot></slot>
            </Content>
          </div>
        </div>
      </main>
    </div>
  </div>                    