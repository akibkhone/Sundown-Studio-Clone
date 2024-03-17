const scroll = new LocomotiveScroll({
	el: document.querySelector('main'),
	smooth: true,
});

function handleProjects() {
	const projectContainer = document.querySelector('#project-container');
	const projects = projectContainer.querySelectorAll('.project');
	const fixed = document.querySelector('#fixed-media');

	// Check if the screen width is greater than 480px
	if (window.innerWidth > 480) {
		projects.forEach((project) => {
			project.addEventListener('mouseenter', function () {
				fixed.style.display = 'block';
				const src = this.getAttribute('data-src');
				const fileType = src.split('.').pop(); // Get the file extension
				if (fileType === 'mp4') {
					fixed.innerHTML = `<video autoplay loop muted src="${src}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 1vh/1vw"></video>`;
				} else {
					fixed.style.backgroundImage = `url(${src})`;
					fixed.style.backgroundSize = 'cover';
					fixed.style.backgroundPosition = 'center';
				}
			});

			project.addEventListener('mouseleave', function () {
				fixed.style.display = 'none';
				fixed.innerHTML = '';
			});
		});

		fixed.addEventListener('mouseenter', function () {
			fixed.style.display = 'block';
		});

		fixed.addEventListener('mouseleave', function () {
			fixed.style.display = 'none';
		});
	}
}

function handleServices() {
	const serviceHead = document.querySelectorAll('.services-head h1');
	const servicesParagraph = document.querySelector('#service-paragraph');
	const servicesRightImg = document.querySelector('#services-right img');

	// Set the color of the first h1 to white by default
	serviceHead[0].style.color = 'white';
	serviceHead[0].style.borderLeft = '3px solid #FE330A';

	// Set the initial paragraph and image
	servicesParagraph.innerHTML = serviceHead[0].getAttribute('data-description');
	servicesRightImg.src = serviceHead[0].getAttribute('data-src');

	serviceHead.forEach((head) => {
		head.addEventListener('click', function () {
			const description = this.getAttribute('data-description');
			const imgSrc = this.getAttribute('data-src');

			// Reset the color of all h1 elements to the original color
			serviceHead.forEach((h) => {
				h.style.color = '#504a45';
				h.style.borderLeft = '3px solid #423c37';
			});

			// Change the color of the clicked h1 to white
			this.style.color = 'white';
			this.style.borderLeft = '3px solid #FE330A';

			servicesParagraph.innerHTML = `${description}`;
			servicesRightImg.src = `${imgSrc}`;
		});
	});
}

function handleSwiper() {
	var slidesPerView;

	// Adjust slides per view based on screen width
	if (window.innerWidth < 480) {
		slidesPerView = 2;
	} else if (window.innerWidth <= 768) {
		slidesPerView = 3;
	} else {
		slidesPerView = 4;
	}

	// Initialize swiper with updated options
	var swiper = new Swiper('.mySwiper', {
		direction: 'horizontal',
		slidesPerView: slidesPerView,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}

function handleMenu() {
	// Selecting the elements needed for menu functionality
	var menuOpen = document.querySelector('nav h6'); // Element to open the menu
	var menuClose = document.querySelector('.close-menu h6'); // Element to close the menu
	var full = document.querySelector('#fullScreen'); // Full-screen menu container
	var logo = document.querySelector('nav img'); // Logo element
	var flag = 0; // Flag to track menu state (0: closed, 1: open)

	// Adding click event listener to open the menu
	menuOpen.addEventListener('click', function () {
		if (flag == 0) {
			// If menu is closed
			full.style.top = 0; // Show the full-screen menu by setting its top position to 0
			logo.style.opacity = 0; // Hide the logo by setting its opacity to 0
			flag = 1; // Update flag to indicate menu is open
		} else {
			// If menu is open
			full.style.top = '-100%'; // Hide the full-screen menu by setting its top position to -100%
			logo.style.opacity = 1; // Show the logo by setting its opacity to 1
			flag = 0; // Update flag to indicate menu is closed
		}
	});

	menuClose.addEventListener('click', function () {
		if (flag == 1) {
			// If the menu is open
			full.style.top = '-100%'; // Hide the full-screen menu by setting its top position to -100%
			logo.style.opacity = 1; // Show the logo by setting its opacity to 1
			flag = 0; // Update flag to indicate menu is closed
		}
	});
}

function handleLoader() {
	var loader = document.querySelector('#loader');
	setTimeout(function () {
		loader.style.top = '-100%';
	}, 4200);
}

// Call the functions
handleProjects();
handleServices();
handleSwiper();
handleMenu();
handleLoader();
