import paypalCodeGen from "./paypalCodeGen.js";

const sdkSrc = paypalCodeGen.sdkSrcGen();
const SPBImplementCode = paypalCodeGen.SPBRenderCodeGen();

export const SPBCode = `
    <div id="dlgcontent">
      <script src="${sdkSrc}"></script>
      <script>
        ${SPBImplementCode}
      </script>
    </div>
`;
