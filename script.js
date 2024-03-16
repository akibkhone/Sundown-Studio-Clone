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
	var swiperOptions = {
		direction: 'horizontal',
		slidesPerView: 4,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	};

	// Check if the screen width is greater than 480px
	if (window.innerWidth < 480) {
		swiperOptions.mousewheel = true;
		swiperOptions.slidesPerView = 2; // Adjust slides per view for larger screens
	}

	var swiper = new Swiper('.mySwiper', swiperOptions);
}

// Call the functions
handleProjects();
handleServices();
handleSwiper();
