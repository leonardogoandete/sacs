import { Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsPersonFillGear } from "react-icons/bs"
import { HiOutlineLogout, HiMoon } from "react-icons/hi"
function MyAvatar() {
  return (
    <Menu>
      <MenuButton as={Avatar} bg="white" name="Foto de Perfil" src="https://joesch.moe/api/v1/random" mr={5} />
      <MenuList maxW="200px" minW="200px">
        <MenuItem icon={<BsPersonFillGear/>}>Perfil</MenuItem>
        <MenuItem icon={<HiMoon/>}>Modo Noturno</MenuItem>
        <MenuItem icon={<HiOutlineLogout/>}>Sair</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MyAvatar;