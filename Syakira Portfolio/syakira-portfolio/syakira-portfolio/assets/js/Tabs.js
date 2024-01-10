const CompanyInfo = {
  RepublicPolytechnic: {
    name: "Internship in TRD Singapore",
    date: "October 2021 - January 2022",
    desc: `<ul>

    <li>
    In my role within a manufacturing and technical environment, I operated with a strong emphasis on safety and cleanliness, recognizing their crucial importance. My responsibilities extended to the setup and maintenance of diverse devices, systems, and peripherals.
    </li>
    <li>
    Assembling technical systems was a critical aspect of my job, requiring meticulous attention to detail. I played a key role in inspecting incoming components and materials, ensuring that only top-quality items entered the production process.
    </li>
    <li>
    Additionally, I took charge of managing stock and inventory in a warehouse or storage facility, contributing to efficient logistics and operations. My involvement in the preparation and production of technical systems showcased my commitment to precision and excellence in a dynamic work setting.
    </li>
  </ul>`,
  },
  Secondary: {
    name: "Republic Polytechic (Current)",
    date: "April 2019 ",
    desc: `<ul>
    <li>
      I learned about designing user experiences and interfaces
      and programming, particularly in web development.
    </li>
    <li>
      I engaged in diverse projects, creating modern, performant,
      and maintainable code.
    </li>
    <li>
      I gained practical experience using Adobe tools such as
      Photoshop, Illustrator, and XD. I utilized Photoshop for
      image editing and manipulation, learning how to enhance and
      refine visual elements. Illustrator became my go-to for
      vector graphics, where I honed my skills in creating
      scalable and precise illustrations.
    </li>
  </ul>`,
  },
  ITE: {
    name: "ITE",
    date: "2020 - 2022 ",
    desc: `<ul>
    <li>
    During my time at ITE studying Electronics Engineering, I learned C++ programming, honed my soldering skills, and gained practical experience in communication and networking. This hands-on education equipped me with the ability to code for electronic systems, perform precise soldering, and effectively communicate technical concepts—a foundation for success in the electronics field.
    </li>
  </ul>`,
  },
};

let Tabs = document.querySelectorAll(".tabs li");

Tabs.forEach((EachTab) => {
  EachTab.addEventListener("click", (e) => {
    let elementid = e.target.id;

    console.log(elementid);
    let GetActiveElement = e.target.parentNode.querySelector(".active");
    let GrabCompanyName =
      e.target.parentNode.nextElementSibling.querySelector(".company-name");
    let GrabCompanyDate =
      e.target.parentNode.nextElementSibling.querySelector(".company-date");

    GrabCompanyName.textContent = CompanyInfo[elementid].name;
    GrabCompanyDate.textContent = CompanyInfo[elementid].date;
    GrabCompanyDate.nextElementSibling.remove();
    GrabCompanyDate.insertAdjacentHTML("afterend", CompanyInfo[elementid].desc);
    GetActiveElement.classList.remove("active");
    e.target.classList.add("active");
  });
});
