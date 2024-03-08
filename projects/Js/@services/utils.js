export function createAlert({ title = 'Alert', description = 'Modal Description', btnText = 'close', onClose = () => { } }) {
    //prevent clicking outside modal
    const canvas = document.createElement("div");
    canvas.style.position = 'absolute';
    canvas.style.zIndex = '999';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    document.body.style.overflow = "hidden";
    document.body.appendChild(canvas);
    // Create the modal element
    const modal = document.createElement('div');
    modal.classList.add('custom-alert');
    modal.style.position = 'absolute';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = 'white';
    modal.style.padding = '20px';
    modal.style.zIndex = '1000';
    modal.style.boxShadow = '0 0 300px 100vw rgba(163,163,163,.5)';
    modal.style.borderRadius = '15px';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.gap = '1rem';
    // Add title
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    titleElement.style.textAlign = 'center'
    modal.appendChild(titleElement);

    // Add description
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    descriptionElement.style.color = 'gray';
    modal.appendChild(descriptionElement);

    // Close button
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.textContent = btnText;
    closeButton.style.cursor = 'pointer';
    closeButton.style.border = '0';
    closeButton.style.padding = '3% 5%';
    closeButton.style.borderRadius = '10px';
    closeButton.style.transition = '250ms ease';
    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.scale = '1.05';
    })
    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.scale = '1';
    })
    closeButton.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = "";
        canvas.remove();
        modal.remove();
        onClose();
    };
    modal.appendChild(closeButton);

    // Append modal to the body
    document.body.appendChild(modal);

}