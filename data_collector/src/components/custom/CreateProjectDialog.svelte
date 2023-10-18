<script>
    import { XIcon } from "svelte-feather-icons";
    import { createProject } from "$lib/file-handler";
    export let closeMethod = () => {};

    let projectName = "";

    async function _createProject() {
        let dir_handle = await window.showDirectoryPicker()
        let project = createProject(projectName, dir_handle)
        closeMethod()
    }
</script>

<main class="p-2 bg-white rounded">
    <header class="flex justify-between py-2 px-1">
        <span class="font-semibold text-slate-800"> New Project </span>
        <button on:click={closeMethod}>
            <XIcon size="1.2x" />
        </button>
    </header>
    <div class="py-2">
        <input
            class="p-2 rounded bg-slate-200 focus:bg-slate-100 focus:ring-2"
            placeholder="Name"
            bind:value={projectName}
        />
        <button class="p-2 bg-blue-500 text-white font-semibold rounded" on:click={_createProject}>
            Create
        </button>
    </div>
</main>
