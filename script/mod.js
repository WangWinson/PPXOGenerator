import paypalCodeGen from "./paypalCodeGen.js";

const sdkSrc = paypalCodeGen.sdkSrcGen();
const SPBImplementCode = paypalCodeGen.SPBRenderCodeGen();
const SPBImplement = paypalCodeGen.SPBRenderGen();

export const SPBCode = `
    <div id="dlgcontent">
      <script src="${sdkSrc}"></script>
      <script>
        ${SPBImplementCode}
      </script>
    </div>
`;

export const SPB = `
<div class="modal is-active" id="modal" style="zIndex: 1000;">
  <div class="modal-background" id="modBg">
    <div class="modal-content" with="1000px">
      <script src="${sdkSrc}"></script>
      <script>
        ${SPBImplement}
      </script>
    </div>
  </div>
</div>
`;
