$(document).ready(function() {
    $('#video-add').on('click', function() {
        var cantidad = $('.link_video').length;
        const nuevaFila = document.createElement("div");
        nuevaFila.innerHTML = `
			<div class="link_video">
				<label for="link_${cantidad}" class="title-field mb-2">Video</label>
				<div class="center-x flex-nowrap w-100 pe-0 me-0">
				    <input  type="text" class="form-control" name="link_${cantidad}" id="link_${cantidad}" required>
				    <button data-link="link_${cantidad}" class="btn-base delete_video red ms-2 px-4">X</button>
			    </div>
			</div>
        `;
        const formRows = document.querySelectorAll(".link_video");
        const formRowLast = formRows[formRows.length - 1];
        formRowLast.parentNode.insertBefore(nuevaFila, formRowLast.nextSibling);
    });

    $('.ct-links').on('click', '.delete_video', function() {
        $(this).closest('.link_video').remove();
    });
});