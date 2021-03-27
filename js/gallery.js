            var photos = []; 
            var fileNames = [];
            var imageList = [];
            var image;
            var openList1 = "<li id='photo";
            var openList2 = "'>";
            var closeList = "</li>";
            var openCaption = "<p class='caption'>";
            var closeCaption = "</p>";
            var captionText = [
                "Dwelling", 
                "Auto",
                "Workers' Compnasation",
                "EPLI",
                "Cyber",
                "Umbrella",
                "Flood",
                "Earth Quake",
                "Commercial",
                "Builder's risk",
            ];

            var openDesc = "<div id='desc' class='description' onClick='displayInfo(";
            var openDescClose = ")'>";
            var closeDesc = "</div>";
            var descText = [
                "All type of Personal Properties",
                "Personal & Commercial Auto",
                "Employee Injuries",
                "Employment Practices Liability Insurance",
                "Cyber and Privacy Insurance",
                "Personal & Commercial Umbrella/Excess",
                "Protects against Floods",
                "Covers against Earth Quake",
                "Commerical Property & Liability",
                "Builder's & Renovation Risks",
            ]

            var openLink = "<a href='#";
            var openLinkClose = "'>";
            var closeLink = "</a>";
            var infoText = [
                "<p>Dwelling coverage is the part of a homeowners insurance policy that may help pay to rebuild or repair the physical structure of your home if it's damaged by a covered hazard</p>",
                "<p>Protects you against financial loss in the event of an accident or theft.</p>",
                "<p>Workers' compensation insurance is a type of business insurance that provides benefits to employees who suffer work-related injuries or illnesses. Specifically, this insurance helps pay for medical care, wages from lost work time and more./p>",
                "<p>Employment Practices Liability Insurance (EPLI) — a type of liability insurance covering wrongful acts arising from the employment process.</p>",
                "<p>Cyber insurance can be essential in helping your company recover after a data breach, with costs that can include business disruption, revenue loss, equipment damages, legal fees, public relations expenses, forensic analysis and costs associated with legally mandated notifications.</p>",
                "<p>Umbrella insurance is extra insurance that provides protection beyond existing limits and coverages of other policies.</p>",
                "<p>Flood insurance is a type of property insurance that covers a dwelling for losses sustained by water damage specifically due to flooding caused by heavy or prolonged rain, melting snow, coastal storm surges, blocked storm drainage systems, or levee dam failure.</p>",
                "<p>Earthquake insurance is a form of property insurance that pays the policyholder in the event of an earthquake that causes damage to the property.</p>",
                "<p>Combine coverage for multiple perils, such as liability and property risk. A commercial package policy allows a business to take a flexible approach to obtain insurance coverage</p>",
                "<p>Covers a contractor's property, material and equipment relating to a building or project under construction. It can be used to cover ground-up new structures or the renovation of existing structures.</p>",
            ]
            var infoCloseText = "Click this to close";


            for (var i=0; i<10; i++) {
                fileNames.push("insurance"+(i+1));
                photos.push("<img src='gallery/"+fileNames[i]+".jpg'>");


                image = openList1 + (i+1) + openList2 + photos[i] + "</br>" + openCaption + captionText[i] + closeCaption + openDesc + i + openDescClose + descText[i] + closeList;
                imageList.push(image);
            }


            document.getElementById("album").innerHTML = imageList.join(" ");




            var closeinfo = document.getElementById("closeInfo");
            closeinfo.addEventListener("click", hideInfo);


            function displayInfo(which) {
                document.getElementById("info_box").style.visibility="visible";
                document.getElementById("info_title").innerHTML = captionText[which];
                document.getElementById("info").innerHTML = infoText[which];
                document.getElementById("closeInfo").innerHTML = infoCloseText;
            }


            function hideInfo() {
                document.getElementById("info_box").style.visibility="hidden";
            }