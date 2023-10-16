    <script>
    import FAB from "../components/FAB.svelte";
    import DialogBox from "../components/DialogBox.svelte";
    import { PlusIcon } from "svelte-feather-icons";
    import CreateProjectDialog from "../components/custom/CreateProjectDialog.svelte";
    import ProjectListItem from "../components/custom/ProjectListItem.svelte";

    let show_dialog = false;
    /**
     * @type {{title: string, dateOfCreation: Date}[]}
     */
    let projects = [];
    let projectsEmpty = projects.length < 1;

    function launchCreateDialog() {
        show_dialog = true;
    }
    function closeDialog() {
        show_dialog = false;
    }
</script>

<main class="flex flex-col">
    <!-- Render projects -->
    {#if projectsEmpty}
        <span class="text-slate-600 text-lg m-auto font-semibold">
            No projects yet...
        </span>
        {:else}
        <div>
            <ul>
                {#each projects as project}
                <ProjectListItem title={project.title} creation={project.dateOfCreation} />
                {/each}
            </ul>
        </div>

    {/if}

    <!-- Create projects button -->
    <button on:click={launchCreateDialog}>
        <FAB>
            <span class="text-slate-800">
                <PlusIcon size="1.5x" ></PlusIcon>
            </span>
        </FAB>
    </button>

    <!-- Dialog Box to create button -->
    <DialogBox dialogState={show_dialog}>
        <CreateProjectDialog closeMethod={closeDialog}/>
    </DialogBox>
</main>
<svelte:head>
    <title>Home</title>
</svelte:head>
