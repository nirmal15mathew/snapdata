<script>
    import { fade } from "svelte/transition";
    export let dialogState = false;
</script>

{#if dialogState}
    <div
        class="fixed w-screen h-screen bg-neutral-400/75 top-0 flex items-center justify-center"
        transition:fade={{ duration: 200 }}
    >
        <slot />
    </div>
{/if}
