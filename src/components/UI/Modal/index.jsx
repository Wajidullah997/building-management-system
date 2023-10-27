// import React from "react";

// //components
// import { SubtitleText } from "../Typography";

// //packages
// import clsx from "clsx";

// //mui
// import { DialogContent, DialogTitle, Dialog } from "@mui/material";

// //mui icons
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";

// export const Modal = ({ className, open, children, onClose, title }) => {
//   return (
//     <Dialog
//       onClose={onClose}
//       fullWidth
//       open={open}
//       maxWidth={"sm"}
//       PaperProps={{
//         sx: {
//           "&::-webkit-scrollbar": {
//             width: "10px",
//           },
//           p: 1,
//           "&::-webkit-scrollbar-thumb": {
//             backgroundColor: "#F8F8F8",
//             borderRadius: "4px",
//           },
//           borderRadius: "12px",
//           overflow: "hidden",
//         },
//       }}
//     >
//       <DialogTitle>
//         <SubtitleText
//           className={"w-[50%] text-[#0D4041] !text-[14px] !font-bold"}
//         >
//           {title}
//         </SubtitleText>
//         <IconButton
//           onClick={onClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon color="#6F7B7B" />
//         </IconButton>
//       </DialogTitle>
//       <DialogContent className={clsx("w-auto", className)}>
//         {children}
//       </DialogContent>
//     </Dialog>
//   );
// };


import React from "react";

//components
import { SubtitleText } from "../Typography";

//packages
import clsx from "clsx";

//mui
import { DialogContent, DialogTitle, Dialog } from "@mui/material";

//mui icons
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const Modal = ({ className, open, children, onClose, title }) => {
  return (
    <Dialog
      onClose={onClose}
      fullWidth
      open={open}
      maxWidth={"xs"}
      PaperProps={{
        sx: {
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#F8F8F8", // Change the background color of the scrollbar thumb
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#FFFFFF", // Change the background color of the scrollbar track
            borderRadius: "4px",
          },
          p: 1,
          borderRadius: "12px",
          overflow: "hidden",
        },
      }}
    >
      <DialogTitle>
        <SubtitleText
          className={"w-[50%] h-[10px] text-[#0D4041] !text-[14px] !font-bold"}
        >
          {title}
        </SubtitleText>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon color="#6F7B7B" />
        </IconButton>
      </DialogTitle>
      <DialogContent className={clsx("w-auto", className)}>
        {children}
      </DialogContent>
    </Dialog>
  );
};
