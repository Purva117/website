---
layout: landing
title: Professional Profile
description: Synthesizing Theoretical Knowledge and Practical Proficiency
image: assets/images/laptop.jpg
nav-menu: true
---

<!-- Main -->
<div id="main" class="alt">
<!-- One -->
<section id="one">
	<div class="inner">

<!-- Content -->
<h2 id="content">In Pursuit of Excellence: Academic and Professional Narrative</h2>
<p>Welcome to my professional profile! I am a diligent and driven Data Science enthusiast, committed to excelling in both the academic and professional arenas. With a proven track record of harmonizing scholastic achievement and real-world application, I've meticulously honed my skills and expertise to consistently deliver exceptional results and drive success.</p>
<div class="row">
	<div class="6u 12u$(small)">
		<h3>Academia</h3>
		<h4>M.S. - <a href="https://tu-dresden.de/ing/informatik/studium/studienangebot/master-studiengaenge/computational-modeling-and-simulation"><u>Computational Modeling and Simulation</u></a></h4>
		<p>October 2020 - Present, TU Dresden</p>
		<p>Track: <strong>Computational Engineering</strong></p>
		<p>Key subjects of study:<ul>
			<li>Machine Learning</li>
			<li>Statistics, Stochastics and Probablility</li>
			<li>Digitization, Data Analytics and Data Visualization</li>
			<li>Applied Bioinformatics</li>
			<li>Numerical and Particle Methods</li>
		</ul></p>
		<h4>B.Tech. - <a href="http://sot.pdpu.ac.in/mech-dept.html"><u>Mechanical Engineering</u></a></h4>
		<p>July 2015 - June 2019, Gandhinagar, India</p>
		<p>Final Grade: <strong>9.09</strong> out of 10.0 CPI (German equivalent: 1.46)</p>
		<p>Key subjects of study:<ul>
			<li>Numerical Methods and Optimization Techniques</li>
			<li>Finite Element Methods</li>
			<li>Robotics and Automation</li>
			<li>Thermal Engineering</li>
		</ul></p>
	</div>
	<div class="6u$ 12u$(small)">
		<h3>Professional Experience</h3>
		<h4>University Research Assistant</h4>
		<p>May 2023 - Present, TU Dresden, Physics of Life - <a href="https://physics-of-life.tu-dresden.de/research/core-groups/doyle">Doyle Lab</a></p>
		<p>Key responsibilities: </p>
		<h4>Student Research Assistant</h4>
		<p>May 2022 - October 2022, TU Dresden, Physics of Life - <a href="https://physics-of-life.tu-dresden.de/research/core-groups/doyle">Doyle Lab</a></p>
		<p>Key responsibilities:<ul>
			<li>Improve upon the existing quantitative model by exploring non-linear relationships between variables</li>
			<li>Database generation for processing with non-linear regression model</li>
			<li>Benchmarking machine learning models for insights in the generated new database</li>
			<li>Python packages: <strong>pandas, scipy, matplotlib</strong></li>
		</ul>
		</p>
	</div>
	<!-- Break -->	
</div>

<!-- Content -->
<h2 id="content">Skills</h2>

<!-- Radar Plot Container - First Plot (3 Skills) -->
<div class="radar-container">
    <canvas id="radar-chart-1"></canvas>
</div>

<!-- Radar Plot Container - Second Plot (6 Skills) -->
<div class="radar-container">
    <canvas id="radar-chart-2"></canvas>
</div>

<!-- Radar Plot Container - Third Plot (7 Skills) -->
<div class="radar-container">
    <canvas id="radar-chart-3"></canvas>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
<script>
    // Radar Chart Data - First Plot (3 Skills)
    var radarData1 = {
	labels: ["English", "German", "Hindi"],
	datasets: [
	    {
		data: [100, 20, 100],
		backgroundColor: "rgba(127, 255, 212, 0.6)",
		borderColor: "rgba(127, 255, 212, 1)",
	    },
	],
    };

    // Radar Chart Options - First Plot (3 Skills)
    var radarOptions1 = {
	plugins: {
	    legend: {
		display: false, // Remove legend
	    },
	},
	scales: {
	    r: {
		min: 0, // Set minimum scale value
		max: 100, // Set maximum scale value
		ticks: {
                            display: false, // Remove ticks
                            stepSize: 25, // Set step size for inner grid lines
                        },
		grid: {
		    color: "rgba(255, 255, 255, 0.25)", // Set grid color to white
		},
	    },
	},
	interaction: {
	    mode: "nearest",
	},
	maintainAspectRatio: false,
	elements: {
	    point: {
		radius: 0, // Remove point markers
	    },
	},
    };

    // Create the Radar Chart - First Plot (3 Skills)
    var ctx1 = document.getElementById("radar-chart-1").getContext("2d");
    var radarChart1 = new Chart(ctx1, {
	type: "radar",
	data: radarData1,
	options: radarOptions1,
    });

    // Radar Chart Data - Second Plot (6 Skills)
    var radarData2 = {
	labels: ["Python", "HTML", "MATLAB", "GitHub", "ImageJ(FIJI)", "Tableau"],
	datasets: [
	    {
		data: [80, 15, 45, 60, 75, 50],
		backgroundColor: "rgba(127, 255, 212, 0.6)",
		borderColor: "rgba(127, 255, 212, 1)",
	    },
	],
    };

    // Radar Chart Options - Second Plot (6 Skills)
    var radarOptions2 = {
	plugins: {
	    legend: {
		display: false, // Remove legend
	    },
	},
	scales: {
	    r: {
		min: 0, // Set minimum scale value
		max: 100, // Set maximum scale value
		ticks: {
                            display: false, // Remove ticks
                            stepSize: 25, // Set step size for inner grid lines
                        },
		grid: {
		    color: "rgba(255, 255, 255, 0.25)", // Set grid color to white
		},
	    },
	},
	interaction: {
	    mode: "nearest",
	},
	maintainAspectRatio: false,
	elements: {
	    point: {
		radius: 0, // Remove point markers
	    },
	},
    };

    // Create the Radar Chart - Second Plot (6 Skills)
    var ctx2 = document.getElementById("radar-chart-2").getContext("2d");
    var radarChart2 = new Chart(ctx2, {
	type: "radar",
	data: radarData2,
	options: radarOptions2,
    });

// Radar Chart Data - Third Plot (7 Skills)
    var radarData3 = {
	labels: ["Pandas", "Numpy", "Scipy", "Matplotlib", "Seaborn", "NetworkX", "Plotly"],
	datasets: [
	    {
		data: [85, 75, 80, 80, 60, 45, 40],
		backgroundColor: "rgba(127, 255, 212, 0.6)",
		borderColor: "rgba(127, 255, 212, 1)",
	    },
	],
    };

    // Radar Chart Options - Third Plot (7 Skills)
    var radarOptions3 = {
	plugins: {
	    legend: {
		display: false, // Remove legend
	    },
	},
	scales: {
	    r: {
		min: 0, // Set minimum scale value
		max: 100, // Set maximum scale value
		ticks: {
                            display: false, // Remove ticks
                            stepSize: 25, // Set step size for inner grid lines
                        },
		grid: {
		    color: "rgba(255, 255, 255, 0.25)", // Set grid color to white
		},
	    },
	},
	interaction: {
	    mode: "nearest",
	},
	maintainAspectRatio: false,
	elements: {
	    point: {
		radius: 0, // Remove point markers
	    },
	},
    };

    // Create the Radar Chart - Third Plot (7 Skills)
    var ctx3 = document.getElementById("radar-chart-3").getContext("2d");
    var radarChart3 = new Chart(ctx3, {
	type: "radar",
	data: radarData3,
	options: radarOptions3,
    });

</script>

<style>
/* Style for the radar chart containers */
.radar-container {
    max-width: 370px;
    margin: 0 10px; /* Add margin between plots */
    display: inline-block; /* Display plots side by side */
}

/* Adjust the canvas size for responsiveness */
canvas {
    max-width: 100%;
}
/* Style for skill labels */
.radar-container p {
    font-weight: bold !important; /* Make the skill labels bold */
    opacity: 1.0 !important; /* Set the font opacity for the skill labels */
}
</style>

<hr class="major" />


</div>
</section>

</div>
