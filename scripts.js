// Tab functionality
document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", () => {
        const tabName = button.getAttribute("data-tab");

        // Hide all tab content
        document.querySelectorAll(".tab-content").forEach(tab => {
            tab.classList.add("hidden");
        });

        // Show the selected tab content
        document.getElementById(tabName).classList.remove("hidden");
    });
});

// Automatically open the Resources tab when the page loads
document.addEventListener("DOMContentLoaded", () => {
    // Hide all other tabs except Resources
    document.querySelectorAll(".tab-content").forEach(tab => {
        if (tab.id !== "resources") {
            tab.classList.add("hidden");
        }
    });
});

// Resource data (example)
const resources = {
    8: [{ title: "Year 8 Maths Similar Triangle Word Problems", file: "Year-8/Year-8-Maths-Similar-Triangles.pdf", image: "Year-8/Year-8-Maths-Similar-Triangles.png" }],
    9: [{ title: "Year 9 Maths Pythagoras Theorem", file: "Year-9/Year-9-Maths-Pythagoras-Theorem.pdf", image: "Year-9/Year-9-Maths-Pythagoras-Theorem.png" }],
    10: [{ title: "Year 10 Maths Bearings", file: "Year-10/Year-10-Maths-Bearings.pdf", image: "Year-10/Year-10-Maths-Bearings.png" }],
    11: [{ title: "Year 11 Maths Specialist Trigonometry", file: "Year-11/Year-11-Maths-Specialist-Trigonometry.pdf", image: "Year-11/Year-11-Maths-Specialist-Trigonometry.png" }],
    12: [{ title: "Year 12 Maths Specialist 2D Vectors", file: "Year-12/Year-12-Maths-Specialist-2D-Vectors.pdf", image: "Year-12/Year-12-Maths-Specialist-2D-Vectors.png" }]
};

// Load resources dynamically when a year is clicked
document.querySelectorAll(".year-button").forEach(button => {
    button.addEventListener("click", () => {
        const year = button.getAttribute("data-year");
        const content = document.getElementById("resource-content");
        content.innerHTML = ""; // Clear content

        if (resources[year].length === 0) {
            content.innerHTML = `<p>No resources available for Year ${year}.</p>`;
        } else {
            resources[year].forEach(resource => {
                const div = document.createElement("div");
                div.className = "resource-item";
                div.innerHTML = `
                    <img src="${resource.image}" alt="${resource.title}">
                    <p>${resource.title}</p>
                    <a href="${resource.file}" target="_blank">View PDF</a>
                `;
                content.appendChild(div);
            });
        }
    });
});
