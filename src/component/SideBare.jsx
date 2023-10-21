import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Card,
	CardBody,
	CardHeader,
	Button,
	CardFooter,
} from "@nextui-org/react";
import React from "react";

const SideBare = () => {
	return (
		<>
			<div className='fixed rounded-2xl my-2  py-0 w-[250]  h-[700px]  '>
				<Card className='h-[700px] my-2  '>
					<CardBody className='px-0 mt-5'>
						<Navbar>
							<NavbarContent className='flex flex-col space-y-3'>
								
								<NavbarItem>
                                    <NavbarBrand>brahim</NavbarBrand>
								</NavbarItem>
								<NavbarItem>
									<Button className="w-full h-[50px] " size='lg' color="secondary"  as={Link}>
										Statistique
									</Button>
								</NavbarItem>
								<NavbarItem>
									<Button size='lg' as={Link}>
										brahim
									</Button>
								</NavbarItem>
								<NavbarItem>
									<Button size='lg' as={Link}>
										brahim
									</Button>
								</NavbarItem>
								<NavbarItem>
									<Button size='lg' as={Link}>
										brahim
									</Button>
								</NavbarItem>
								<NavbarItem>
									<Button size='lg' as={Link}>
										brahim
									</Button>
								</NavbarItem>
								<NavbarItem>
									<Button  size='lg' as={Link}>
										brahim
									</Button>
								</NavbarItem>
							</NavbarContent>
						</Navbar>
					</CardBody>
					<CardFooter className=''>
						<Button className='ms-4'>sign OUT</Button>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default SideBare;
