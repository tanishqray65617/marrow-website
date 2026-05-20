<!DOCTYPE html><html class="light" lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600&amp;family=Courier+Prime:ital,wght@0,400;0,700;1,400&amp;family=JetBrains+Mono:wght@500&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<style>/* Custom "Sketchy" Effects */
.sketchy-border {
    border-style: solid;
    border-width: 2px;
    border-image: url("data:image/svg+xml,%3Csvg width='100' height='10' viewBox='0 0 100 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5C20 3 40 7 60 4C80 2 100 6 100 5' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") 1
    }
.sketchy-oval {
    position: relative
    }
.sketchy-oval::after {
    content: "";
    position: absolute;
    top: -10%;
    left: -5%;
    right: -5%;
    bottom: -10%;
    border: 2px solid currentColor;
    border-radius: 50% 45% 52% 48%/48% 52% 45% 50%;
    transform: rotate(-1deg);
    pointer-events: none
    }
.paper-texture {
    background-color: #fdf8f8;
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuC0tSJ76LoLDk8Z3ecq7sQ9nzzvdqZZlWpKzOY8kS-Mf2vLL5hEqr0G-2YWQkFZogrDOPIl2OsPCaZrXol6vs4DgrvPPOv6Go1j4R5yaxAbS4ftqK_Vq1_1VvVu_H3cbkHAZg45b6rZEtN8lbuOcSgJtXgZZgTgGOPWhPhJZr4_wZvUr__oKIqnKP4UkrGFr5SEJcuHeI1XxR-ZmtHoFbSm8lAcla3R2gWvoNt2eB6oY4cqqEmKJ7lcvraBrvGDIRXqWydM6v8Pjcg);
    background-repeat: repeat;
    background-size: 600px;
    background-attachment: fixed;
    }
.divider-sketch {
    height: 4px;
    background: url("data:image/svg+xml,%3Csvg width='1000' height='4' viewBox='0 0 1000 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 2C50 1 100 3 150 2C200 1 250 3 300 2C350 1.5 400 2.5 450 2C500 1 550 3 600 2C650 1 700 3 750 2C800 1.5 850 2.5 900 2C950 1 1000 3 1000 2' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E") repeat-x;
    width: 100%;
    opacity: 0.8
    }
.scribble-hover:hover {
    background-image: radial-gradient(circle, #000 1px, transparent 1px);
    background-size: 4px 4px;
    color: #fff
    }
/* Material Symbols Customization */
.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24;
    display: inline-block;
    vertical-align: middle
    }</style>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-error-container": "#93000a",
                    "error-container": "#ffdad6",
                    "primary-fixed-dim": "#c8c6c5",
                    "secondary-fixed-dim": "#c6c6c6",
                    "outline": "#747878",
                    "inverse-surface": "#313030",
                    "on-secondary-fixed": "#1a1c1c",
                    "outline-variant": "#c4c7c7",
                    "tertiary": "#000000",
                    "on-surface-variant": "#444748",
                    "tertiary-fixed-dim": "#cac6c4",
                    "error": "#ba1a1a",
                    "tertiary-container": "#1c1b1a",
                    "primary-container": "#1c1b1b",
                    "primary": "#000000",
                    "surface-container-high": "#ebe7e6",
                    "on-primary": "#ffffff",
                    "inverse-on-surface": "#f4f0ef",
                    "on-secondary": "#ffffff",
                    "on-background": "#1c1b1b",
                    "secondary-container": "#e2e2e2",
                    "surface": "#fdf8f8",
                    "secondary-fixed": "#e2e2e2",
                    "inverse-primary": "#c8c6c5",
                    "on-tertiary": "#ffffff",
                    "secondary": "#5d5e5f",
                    "surface-container-low": "#f7f3f2",
                    "surface-bright": "#fdf8f8",
                    "surface-container-lowest": "#ffffff",
                    "on-primary-fixed-variant": "#474746",
                    "primary-fixed": "#e5e2e1",
                    "surface-container-highest": "#e5e2e1",
                    "surface-variant": "#e5e2e1",
                    "surface-dim": "#ddd9d8",
                    "on-tertiary-container": "#868382",
                    "on-secondary-fixed-variant": "#454747",
                    "surface-container": "#f1edec",
                    "surface-tint": "#5f5e5e",
                    "on-tertiary-fixed-variant": "#484645",
                    "on-error": "#ffffff",
                    "on-tertiary-fixed": "#1c1b1a",
                    "background": "#fdf8f8",
                    "tertiary-fixed": "#e6e2df",
                    "on-secondary-container": "#636465",
                    "on-primary-container": "#858383",
                    "on-surface": "#1c1b1b",
                    "on-primary-fixed": "#1c1b1b"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "gutter": "24px",
                    "container-max": "1280px",
                    "margin-mobile": "20px",
                    "margin-desktop": "64px",
                    "unit": "4px"
            },
            "fontFamily": {
                    "headline-xl": ["Bricolage Grotesque"],
                    "label-sm": ["JetBrains Mono"],
                    "display-lg": ["Bricolage Grotesque"],
                    "headline-xl-mobile": ["Bricolage Grotesque"],
                    "body-md": ["Courier Prime"],
                    "body-lg": ["Courier Prime"]
            },
            "fontSize": {
                    "headline-xl": ["40px", {"lineHeight": "1.2", "fontWeight": "500"}],
                    "label-sm": ["12px", {"lineHeight": "1.4", "fontWeight": "500"}],
                    "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "600"}],
                    "headline-xl-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "500"}],
                    "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>/* Custom "Sketchy" Effects */
.sketchy-border {
    border-style: solid;
    border-width: 2px;
    border-image: url("data:image/svg+xml,%3Csvg width='100' height='10' viewBox='0 0 100 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5C20 3 40 7 60 4C80 2 100 6 100 5' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") 1
    }
.sketchy-oval {
    position: relative
    }
.sketchy-oval::after {
    content: "";
    position: absolute;
    top: -10%;
    left: -5%;
    right: -5%;
    bottom: -10%;
    border: 2px solid currentColor;
    border-radius: 50% 45% 52% 48%/48% 52% 45% 50%;
    transform: rotate(-1deg);
    pointer-events: none
    }
.paper-texture {
    background-color: #fdf8f8;
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuC0tSJ76LoLDk8Z3ecq7sQ9nzzvdqZZlWpKzOY8kS-Mf2vLL5hEqr0G-2YWQkFZogrDOPIl2OsPCaZrXol6vs4DgrvPPOv6Go1j4R5yaxAbS4ftqK_Vq1_1VvVu_H3cbkHAZg45b6rZEtN8lbuOcSgJtXgZZgTgGOPWhPhJZr4_wZvUr__oKIqnKP4UkrGFr5SEJcuHeI1XxR-ZmtHoFbSm8lAcla3R2gWvoNt2eB6oY4cqqEmKJ7lcvraBrvGDIRXqWydM6v8Pjcg);
    background-repeat: repeat;
    background-size: 600px;
    background-attachment: fixed;
    }
.divider-sketch {
    height: 4px;
    background: url("data:image/svg+xml,%3Csvg width='1000' height='4' viewBox='0 0 1000 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 2C50 1 100 3 150 2C200 1 250 3 300 2C350 1.5 400 2.5 450 2C500 1 550 3 600 2C650 1 700 3 750 2C800 1.5 850 2.5 900 2C950 1 1000 3 1000 2' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E") repeat-x;
    width: 100%;
    opacity: 0.8
    }
.scribble-hover:hover {
    background-image: radial-gradient(circle, #000 1px, transparent 1px);
    background-size: 4px 4px;
    color: #fff
    }
/* Material Symbols Customization */
.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24;
    display: inline-block;
    vertical-align: middle
    }</style></head>
<body class="paper-texture text-on-surface selection:bg-primary-container selection:text-on-primary-container">
<!-- TopNavBar -->
<header class="w-full top-0 border-b-2 border-outline skew-y-1 bg-surface flex justify-between items-center px-margin-desktop py-6 w-full max-w-container-max mx-auto z-50">
<div class="font-headline-xl text-headline-xl italic text-primary uppercase tracking-tighter">MARGIELA</div>
<nav class="hidden md:flex gap-12">
<a class="font-body-md text-body-md uppercase tracking-widest text-primary font-bold underline decoration-wavy hover:italic hover:tracking-tighter transition-all" href="#">ARCHIVE</a>
<a class="font-body-md text-body-md uppercase tracking-widest text-secondary hover:italic hover:tracking-tighter transition-all" href="#">COLLECTIONS</a>
<a class="font-body-md text-body-md uppercase tracking-widest text-secondary hover:italic hover:tracking-tighter transition-all" href="#">STUDY</a>
</nav>
<button class="active:opacity-70 active:scale-95 transition-transform">
<span class="material-symbols-outlined text-3xl" data-icon="menu">menu</span>
</button>
</header>
<main class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
<!-- Hero Section -->
<section class="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24 items-end">
<div class="md:col-span-8 relative">
<div class="absolute -top-4 -left-4 font-label-sm text-label-sm text-outline z-10">FIG. 01 // OVERVIEW</div>
<div class="border-2 border-black p-1 transform -rotate-1 bg-white">
<img alt="Editorial Close Up" class="w-full h-auto grayscale contrast-125" src="https://lh3.googleusercontent.com/aida/ADBb0ugOa2vB3vvSnFm_OzNGfKawV6vaEGiGz1ruMFkXGeUrwov86_ipIceh6dQstgVE8q_lx2RcbH-bVMYkAfseVxR5zzi_wzm0bx8N5iWnWXHGF21YZr_uHL0GiTKkXn2KaREiz_zDFrBSRQxhPSqyty5NBCBiexxmMHLI9e9ySxk-QkmBMFB9lIWgKoLg1gY3KQHVH-qzESC2YIIOXOq96v-gt3qVYiK7SQ_FeAJ7q9PyZb-EV8uSQr5D6VI">
</div>
</div>
<div class="md:col-span-4 flex flex-col justify-end space-y-6">
<div class="sketchy-oval inline-block w-fit mb-8">
<h1 class="font-headline-xl text-headline-xl uppercase italic">WHO IS</h1>
</div>
<h2 class="font-display-lg text-display-lg uppercase leading-none mb-4">MARTIN<br>MARGIELA</h2>
<div class="divider-sketch mb-6" style="background-position-x: 3.48438px;"></div>
<p class="font-body-lg text-body-lg text-on-surface-variant italic leading-relaxed">
                    "FASHION IS AN ART FORM, BUT IT IS ALSO A BUSINESS. I NEVER WANTED TO BE A STAR, I WANTED TO BE A DESIGNER."
                </p>
<div class="flex gap-4 items-center">
<span class="material-symbols-outlined text-4xl" data-icon="edit_note" style="font-variation-settings: &quot;FILL&quot; 0;">edit_note</span>
<span class="font-label-sm text-label-sm border-b border-black">ARCHIVAL NOTES 1989-2009</span>
</div>
</div>
</section>
<!-- Divider -->
<div class="divider-sketch my-20" style="background-position-x: 3.48438px;"></div>
<!-- The Man Section (Asymmetric) -->
<section class="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-32">
<div class="md:col-span-5 order-2 md:order-1 flex flex-col justify-center">
<h3 class="font-headline-xl text-headline-xl mb-8 flex items-center gap-4">
<span class="material-symbols-outlined" data-icon="circle">circle</span>
                    THE MAN
                </h3>
<div class="space-y-8 font-body-md text-body-md text-on-surface-variant max-w-md">
<p class="relative">
<span class="absolute -left-8 top-0 text-2xl font-bold opacity-30">“</span>
                        Invisible, yet ever-present. Martin Margiela redefined the silhouette of the late 20th century without ever showing his face. 
                    </p>
<p class="">
                        He challenged the excess of the 80s with deconstruction, exposed seams, and the transformative power of the "Replica."
                    </p>
<div class="p-6 border-2 border-dashed border-outline-variant bg-surface-container-low rotate-1">
<p class="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-2">Technical Analysis:</p>
<p class="italic text-sm">The 4-stitch signature was originally intended to be easily removed, rendering the garment truly anonymous.</p>
</div>
</div>
</div>
<div class="md:col-span-7 order-1 md:order-2">
<div class="relative w-full aspect-[4/5] bg-surface-container-highest border-2 border-black overflow-hidden">
<img class="w-full h-full object-cover grayscale opacity-90 contrast-150" data-alt="A moody, high-contrast black and white portrait of a person wearing a white lab coat, seen from the back in a dimly lit studio. The lighting is dramatic and directional, casting long, sketchy shadows against a textured plaster wall. The overall aesthetic is one of mystery, anonymity, and archival fashion photography, using deep blacks and stark whites." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjUyapURb83sOW528r7yweOrIo7q0_jobYSV7YJ-53S-bAu9xgzwZeWvWhdHgkndwbnQDyR6R9GRwHaKAYeBsbNaKnFdu0ZGNBHI-SshtxvWBNbPBcGDSJ0NblyMc3IURJgr1MKY7L_3lNEZ3JrNwZSK4g_jaQWQIpMptsU5jLFOqSrvWhClBkJzzz1qoLB2fNVvTwt7vpGrbVoGZnJ2EvUmuP1LEnUpZ1MzbgfjxbtnlrlP1imPYFwV-hOBUvb8kwnkSHN16DNf8">
<div class="absolute bottom-4 left-4 bg-white/80 backdrop-blur px-4 py-2 border border-black font-label-sm text-label-sm italic">
                        REPLICA / 2024 STUDY
                    </div>
</div>
</div>
</section>
<!-- Bento Sketch Grid -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
<div class="p-8 border-2 border-black flex flex-col justify-between hover:bg-primary hover:text-on-primary transition-colors cursor-pointer group">
<div class="flex justify-between items-start">
<span class="material-symbols-outlined text-4xl" data-icon="ink_pen">ink_pen</span>
<span class="font-label-sm text-label-sm">01 / 03</span>
</div>
<div>
<h4 class="font-headline-xl-mobile text-headline-xl-mobile uppercase mb-4">DECONSTRUCT</h4>
<p class="font-body-md text-body-md opacity-80 group-hover:opacity-100">Exposing the internal structure of the garment as a final aesthetic choice.</p>
</div>
</div>
<div class="p-8 border-2 border-black flex flex-col justify-between rotate-1 bg-white hover:bg-primary hover:text-on-primary transition-colors cursor-pointer group">
<div class="flex justify-between items-start">
<span class="material-symbols-outlined text-4xl" data-icon="texture">texture</span>
<span class="font-label-sm text-label-sm">02 / 03</span>
</div>
<div>
<h4 class="font-headline-xl-mobile text-headline-xl-mobile uppercase mb-4">WHITE WASH</h4>
<p class="font-body-md text-body-md opacity-80 group-hover:opacity-100">The use of white paint to unify disparate objects and textures into a singular vision.</p>
</div>
</div>
<div class="p-8 border-2 border-black flex flex-col justify-between -rotate-1 hover:bg-primary hover:text-on-primary transition-colors cursor-pointer group">
<div class="flex justify-between items-start">
<span class="material-symbols-outlined text-4xl" data-icon="gesture">gesture</span>
<span class="font-label-sm text-label-sm">03 / 03</span>
</div>
<div>
<h4 class="font-headline-xl-mobile text-headline-xl-mobile uppercase mb-4">ANONYMITY</h4>
<p class="font-body-md text-body-md opacity-80 group-hover:opacity-100">Shifting the focus from the celebrity of the designer to the craft of the clothing.</p>
</div>
</div>
</section>
<!-- Interactive Sketch Area -->
<section class="mb-32">
<div class="border-4 border-double border-black p-12 bg-white relative overflow-hidden">
<div class="absolute top-0 right-0 p-4 opacity-10">
<span class="material-symbols-outlined text-[200px]" data-icon="fingerprint">fingerprint</span>
</div>
<div class="max-w-2xl relative z-10">
<h5 class="font-display-lg text-display-lg mb-8">JOIN THE STUDY</h5>
<p class="font-body-lg text-body-lg mb-12 italic">Receive archival updates, process sketches, and collection deep-dives directly in your inbox.</p>
<form class="space-y-12">
<div class="relative">
<label class="font-label-sm text-label-sm uppercase text-outline block mb-2">Identifier (Email)</label>
<input class="w-full bg-transparent border-t-0 border-x-0 border-b-2 border-black focus:ring-0 focus:border-primary font-body-md text-body-md py-4" placeholder="USER@DOMAIN.XYZ" type="email">
</div>
<button class="px-12 py-6 border-2 border-black font-headline-xl-mobile text-headline-xl-mobile uppercase transition-all scribble-hover hover:scale-105 active:scale-95">
                            TRANSMIT
                        </button>
</form>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full border-t-4 border-double border-outline bg-surface-container flex flex-col md:flex-row justify-between items-center px-margin-desktop py-12 w-full">
<div class="font-headline-xl-mobile text-headline-xl-mobile text-on-surface mb-8 md:mb-0 italic uppercase tracking-tighter">MAISON MARGIELA</div>
<div class="flex flex-col items-center md:items-end gap-6">
<div class="flex gap-8">
<a class="font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors" href="#">LEGAL</a>
<a class="font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors" href="#">CONTACT</a>
<a class="font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors" href="#">INDEX</a>
</div>
<div class="flex gap-4">
<!-- Social Sketch Icons -->
<a class="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all" href="#">
<span class="material-symbols-outlined" data-icon="share">share</span>
</a>
<a class="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all" href="#">
<span class="material-symbols-outlined" data-icon="star" style="font-variation-settings: &quot;FILL&quot; 0;">star</span>
</a>
<a class="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all" href="#">
<span class="material-symbols-outlined" data-icon="mail">mail</span>
</a>
</div>
<p class="font-label-sm text-label-sm uppercase opacity-50">MAISON MARGIELA ARCHIVAL STUDY © 2024</p>
</div>
</footer>
<script>
        // Subtle Mouse Interaction for "Sketchy" lines
        document.addEventListener('mousemove', (e) => {
            const lines = document.querySelectorAll('.divider-sketch');
            const mouseX = e.clientX / window.innerWidth;
            lines.forEach(line => {
                line.style.backgroundPositionX = `${mouseX * 20}px`;
            });
        });

        // Add random slight rotation to some elements for the "notebook" look
        document.querySelectorAll('.bento-card').forEach(card => {
            const rot = (Math.random() - 0.5) * 2;
            card.style.transform = `rotate(${rot}deg)`;
        });
    </script>


</body></html>