var modal = document.querySelector("[data-modal]")

function openModal() {
    modal.showModal()
}

modal.addEventListener("click", () => {
    modal.close()
})