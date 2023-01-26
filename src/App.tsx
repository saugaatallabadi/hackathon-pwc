import { Text, Button, Stack, Navbar } from "@mantine/core";
import { AppShellDemo } from "./AppShellDemo";
import { DoubleNavbar } from "./DoubleNavbar";
import { ThemeProvider } from "./ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <AppShellDemo />
    </ThemeProvider>
  );
}


// import { MantineProvider, Text } from '@mantine/core';

// export default function App() {
//   return (
//     <MantineProvider withGlobalStyles withNormalizeCSS>
//       <Text>Welcome to Mantine!</Text>
//     </MantineProvider>
//   );
// }