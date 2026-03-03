$(document).ready(function () {
    // Attempt to load the XML file automatically
    $.ajax({
        type: "GET",
        url: "data/curriculo.xml",
        dataType: "xml",
        success: function (xml) {
            parseLattesXML(xml);
        },
        error: function (xhr, status, error) {
            console.warn("Could not load curriculo.xml automatically (likely CORS). Showing manual upload.");
            $("#lattes-fallback").show();
            // Hide spinners
            $(".spinner-border").parent().remove();
            $("#research-container").html('<p class="text-muted text-center">Aguardando arquivo XML...</p>');
            $("#extension-container").html('<p class="text-muted text-center">Aguardando arquivo XML...</p>');
        }
    });

    // Handle manual file upload
    $("#lattes-file-input").change(function (event) {
        console.log("File input changed");
        var file = event.target.files[0];
        if (file) {
            console.log("File selected:", file.name);
            var reader = new FileReader();
            reader.onload = function (e) {
                console.log("File read successfully");
                var xmlContent = e.target.result;
                // Parse the string into an XML document
                try {
                    var parser = new DOMParser();
                    var xmlDoc = parser.parseFromString(xmlContent, "text/xml");

                    // Check for parsing errors
                    var parserError = xmlDoc.getElementsByTagName("parsererror");
                    if (parserError.length > 0) {
                        console.error("XML Parsing Error:", parserError[0].textContent);
                        alert("Erro ao ler o arquivo XML. Verifique se é um XML válido.");
                        return;
                    }

                    console.log("XML parsed successfully, structure:", xmlDoc.documentElement.nodeName);
                    parseLattesXML(xmlDoc);
                    // Hide fallback after success
                    $("#lattes-fallback").hide();
                } catch (err) {
                    console.error("Javascript Error during parsing:", err);
                }
            };
            reader.readAsText(file);
        }
    });
});

function parseLattesXML(xml) {
    parseResearchProjects(xml);
    parseExtensionProjects(xml);
}

function parseResearchProjects(xml) {
    var container = $("#research-container");
    container.empty(); // Clear existing content (like "coming soon" text)

    var projects = $(xml).find("PROJETO-DE-PESQUISA");

    if (projects.length > 0) {
        var row = $('<div class="row"></div>');

        projects.each(function () {
            var name = $(this).attr("NOME-DO-PROJETO");
            var startYear = $(this).attr("ANO-INICIO");
            var endYear = $(this).attr("ANO-FIM") || "Atual";
            var descElement = $(this).find("DESCRICAO-DO-PROJETO");
            var description = descElement.length ? descElement.attr("DESCRICAO-DO-PROJETO") : "Sem descrição.";

            // Limit description length if too long
            if (description.length > 150) {
                description = description.substring(0, 150) + "...";
            }

            var cardHtml = `
                <div class="col-md-6 mb-4">
                    <div class="card h-100 border-info">
                        <div class="card-body">
                            <h5 class="card-title text-info">${name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${startYear} - ${endYear}</h6>
                            <p class="card-text">${description}</p>
                        </div>
                    </div>
                </div>
            `;
            row.append(cardHtml);
        });

        container.append(row);
    } else {
        container.html('<p>Nenhum projeto de pesquisa encontrado no XML.</p>');
    }
}

function parseExtensionProjects(xml) {
    var container = $("#extension-container");
    container.empty();

    var projects = $(xml).find("PROJETO-DE-EXTENSAO");

    if (projects.length > 0) {
        var row = $('<div class="row"></div>');

        projects.each(function () {
            var name = $(this).attr("NOME-DO-PROJETO");
            var startYear = $(this).attr("ANO-INICIO");
            var endYear = $(this).attr("ANO-FIM") || "Atual";
            var descElement = $(this).find("DESCRICAO-DO-PROJETO");
            var description = descElement.length ? descElement.attr("DESCRICAO-DO-PROJETO") : "Sem descrição.";

            // Limit description
            if (description.length > 150) {
                description = description.substring(0, 150) + "...";
            }

            var cardHtml = `
                <div class="col-md-6 mb-4">
                    <div class="card h-100 border-success">
                        <div class="card-body">
                            <h5 class="card-title text-success">${name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${startYear} - ${endYear}</h6>
                            <p class="card-text">${description}</p>
                        </div>
                    </div>
                </div>
            `;
            row.append(cardHtml);
        });

        container.append(row);
    } else {
        container.html('<p>Nenhum projeto de extensão encontrado no XML.</p>');
    }
}
