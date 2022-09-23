import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Stack,
  Input,
  CheckBox,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const SignUpPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] w-[100%]">
        <Column
          className="bg-cover bg-repeat items-center w-[100%]"
          style={{ backgroundImage: "url('images/img_group429.png')" }}
        >
          <Column className="bg-gradient1  lg:pb-[62px] xl:pb-[71px] 2xl:pb-[80px] 3xl:pb-[96px] w-[100%]">
            <header className="w-[100%]">
              <Column className="items-center shadow-bs2 w-[100%]">
                <Row className="bg-white_A700 items-center justify-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
                  <Img
                    src="images/img_clock.svg"
                    className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] w-[2%]"
                    alt="clock"
                  />
                  <Text className="font-bold font-roboto lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    mangcoding Store
                  </Text>
                  <Column className="font-mada lg:ml-[210px] xl:ml-[241px] 2xl:ml-[271px] 3xl:ml-[325px] pt-[1px] w-[24%]">
                    <Row className="justify-between w-[100%]">
                      <Text className="cursor-pointer hover:font-bold font-bold my-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_A200 w-[auto]">
                        Home
                      </Text>
                      <Text className="cursor-pointer hover:font-bold font-normal mt-[2px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 hover:text-indigo_A200 w-[auto]">
                        Shop
                      </Text>
                      <SelectBox
                        className="font-normal mb-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[21%]"
                        placeholderClassName=""
                        name="AboutUs"
                        placeholder=""
                        isSearchable={false}
                        isMulti={true}
                      ></SelectBox>
                      <Text className="cursor-pointer hover:font-bold font-normal my-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 hover:text-indigo_A200 w-[auto]">
                        Contact
                      </Text>
                    </Row>
                    <div className="bg-indigo_A200 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                  </Column>
                  <Stack className="font-poppins lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] w-[2%]">
                    <Img
                      src="images/img_bag.svg"
                      className="absolute bottom-[0] lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] left-[0] w-[67%]"
                      alt="bag"
                    />
                    <Text className="absolute bg-red_A100 flex font-normal items-center not-italic pl-[4px] right-[0] rounded-radius50 xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 top-[0] w-[16px]">
                      3
                    </Text>
                  </Stack>
                  <Img
                    src="images/img_favorite.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[1%]"
                    alt="favorite"
                  />
                  <Img
                    src="images/img_user.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] w-[1%]"
                    alt="user"
                  />
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-mada font-normal not-italic p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_300 text-gray_300 w-[100%]"
                    wrapClassName="2xl:ml-[29px] 2xl:mr-[104px] 3xl:ml-[34px] 3xl:mr-[124px] flex lg:ml-[22px] lg:mr-[80px] mt-[2px] w-[18%] xl:ml-[25px] xl:mr-[92px]"
                    name="FrameNine"
                    placeholder="Search"
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[10px] lg:h-[11px] lg:ml-[27px] lg:mr-[3px] xl:w-[11px] xl:h-[12px] xl:ml-[31px] xl:mr-[4px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[35px] 2xl:mr-[5px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[42px] 3xl:mr-[6px] my-[auto]"
                          onClick={() => setInputvalue("")}
                          color="#dddddd"
                        />
                      ) : (
                        <Img
                          src="images/img_search.svg"
                          className="cursor-pointer lg:w-[10px] lg:h-[11px] lg:ml-[27px] lg:mr-[3px] xl:w-[11px] xl:h-[12px] xl:ml-[31px] xl:mr-[4px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[35px] 2xl:mr-[5px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[42px] 3xl:mr-[6px] my-[auto]"
                          alt="search"
                        />
                      )
                    }
                    shape="srcRoundedBorder10"
                    size="smSrc"
                    variant="srcOutlineGray500"
                  ></Input>
                </Row>
              </Column>
            </header>
            <Column className="xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[41%]">
              <Row className="font-poppins w-[31%]">
                <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  Home
                </Text>
                <Text className="font-normal mb-[3px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  /
                </Text>
                <Text className="font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  My Account
                </Text>
              </Row>
              <Text className="font-bold font-mada ml-[3px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-white_A700 w-[auto]">
                My Account
              </Text>
              <Text className="font-bold font-mada lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-white_A700 w-[auto]">
                Sign Up
              </Text>
              <Text className="font-normal font-poppins lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                <span className="text-white_A700">You have accout ?</span>
                <span className="text-black_900"> </span>
                <span className="text-white_A700 font-bold">Login</span>
              </Text>
              <Row className="font-poppins items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[65%]">
                <Input
                  className="font-normal not-italic p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                  wrapClassName="flex w-[47%]"
                  name="Group1915"
                  placeholder="Google"
                  prefix={
                    <Img
                      src="images/img_google.svg"
                      className="lg:w-[11px] lg:ml-[17px] lg:mr-[18px] xl:w-[13px] xl:ml-[19px] xl:mr-[21px] 2xl:w-[15px] 2xl:ml-[22px] 2xl:mr-[24px] 3xl:w-[18px] 3xl:ml-[26px] 3xl:mr-[28px] my-[auto]"
                      alt="google"
                    />
                  }
                  size="sm"
                  variant="FillWhiteA700"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                  wrapClassName="2xl:ml-[24px] 3xl:ml-[28px] flex lg:ml-[18px] w-[47%] xl:ml-[21px]"
                  name="Group1916"
                  placeholder="Facebook"
                  prefix={
                    <Img
                      src="images/img_facebook.svg"
                      className="lg:w-[6px] lg:ml-[15px] lg:mr-[21px] xl:w-[7px] xl:ml-[17px] xl:mr-[24px] 2xl:w-[8px] 2xl:ml-[20px] 2xl:mr-[27px] 3xl:w-[9px] 3xl:ml-[24px] 3xl:mr-[32px] my-[auto]"
                      alt="facebook"
                    />
                  }
                  size="sm"
                  variant="FillWhiteA700"
                ></Input>
              </Row>
              <Row className="font-poppins items-center justify-evenly lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[100%]">
                <Column className="w-[52%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                    First Name
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-red_600 text-red_600 w-[100%]"
                    wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[11px] w-[92%] xl:mt-[13px]"
                    type="text"
                    name="Group1940"
                    placeholder="First Name"
                    size="sm"
                    variant="FillWhiteA700"
                  ></Input>
                </Column>
                <Column className="w-[48%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                    Last Name
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-red_400 text-red_400 w-[100%]"
                    wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[10px] w-[100%] xl:mt-[12px]"
                    type="text"
                    name="Group2009"
                    placeholder="Last Name"
                    size="sm"
                    variant="FillWhiteA700"
                  ></Input>
                </Column>
              </Row>
              <Text className="font-bold font-poppins lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Email
              </Text>
              <Input
                className="font-normal font-poppins not-italic p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-red_300 text-red_300 w-[100%]"
                wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[11px] w-[100%] xl:mt-[13px]"
                type="email"
                name="Group426"
                placeholder="Email"
                size="sm"
                variant="FillWhiteA700"
              ></Input>
              <Text className="font-bold font-poppins lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Password
              </Text>
              <Input
                className="font-normal font-poppins not-italic p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-red_401 text-red_401 w-[100%]"
                wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] flex lg:mt-[10px] w-[100%] xl:mt-[12px]"
                type="password"
                name="Group428"
                placeholder="Password"
                suffix={
                  <Img
                    src="images/img_eye.svg"
                    className="lg:w-[14px] lg:ml-[27px] lg:mr-[7px] xl:w-[16px] xl:ml-[31px] xl:mr-[8px] 2xl:w-[19px] 2xl:ml-[35px] 2xl:mr-[10px] 3xl:w-[22px] 3xl:ml-[42px] 3xl:mr-[12px] my-[auto]"
                    alt="eye"
                  />
                }
                size="sm"
                variant="FillWhiteA700"
              ></Input>
              <Text className="font-bold font-poppins lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Entry Keyword Again
              </Text>
              <Input
                className="font-normal font-poppins not-italic p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-red_402 text-red_402 w-[100%]"
                wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[9px] w-[100%] xl:mt-[10px]"
                name="Group427"
                placeholder="Enter keyword again"
                suffix={
                  <Img
                    src="images/img_eye.svg"
                    className="lg:w-[14px] lg:ml-[27px] lg:mr-[7px] xl:w-[16px] xl:ml-[31px] xl:mr-[8px] 2xl:w-[19px] 2xl:ml-[35px] 2xl:mr-[10px] 3xl:w-[22px] 3xl:ml-[42px] 3xl:mr-[12px] my-[auto]"
                    alt="eye"
                  />
                }
                size="sm"
                variant="FillWhiteA700"
              ></Input>
              <CheckBox
                className="font-bold font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_100"
                inputClassName="h-[24px] mr-[5px] w-[24px]"
                name="RememberMe"
                label="Remember Me"
              ></CheckBox>
              <Button
                className="font-bold font-poppins lg:ml-[317px] xl:ml-[362px] 2xl:ml-[408px] 3xl:ml-[489px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[31%]"
                size="md"
                variant="OutlineBlack9000c1_2"
              >
                Sign Up
              </Button>
            </Column>
          </Column>
        </Column>
        <footer className="bg-gray_800 w-[100%]">
          <Row className="3xl:mb-[109px] lg:mb-[70px] xl:mb-[80px] 2xl:mb-[91px] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] mx-[auto] w-[83%]">
            <Column className="w-[46%]">
              <Row className="font-roboto items-center ml-[1px] w-[29%]">
                <Img
                  src="images/img_clock.svg"
                  className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] w-[22%]"
                  alt="clock One"
                />
                <Text className="font-bold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  mangcoding Store
                </Text>
              </Row>
              <Text className="font-normal font-poppins lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_100 w-[77%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                mollis, justo nec porttitor auctor, erat sapien faucibus lectus,
                vel tempor dolor augue et lectus.{" "}
              </Text>
              <Button
                className="font-bold font-poppins ml-[1px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[33%]"
                size="md"
                variant="OutlineBlack900191_2"
              >
                Login Now
              </Button>
            </Column>
            <Column className="mt-[4px] w-[13%]">
              <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Home
              </Text>
              <Text className="font-normal lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_100 w-[auto]">
                Product
              </Text>
              <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_100 w-[auto]">
                Categories
              </Text>
              <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_100 w-[auto]">
                Shop
              </Text>
              <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_100 w-[auto]">
                Log in
              </Text>
            </Column>
            <Column className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[11%]">
              <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Shop
              </Text>
              <Text className="font-normal lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_100 w-[auto]">
                T-Shirt
              </Text>
              <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_100 w-[auto]">
                Jacket
              </Text>
              <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_100 w-[auto]">
                Shirt
              </Text>
              <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_100 w-[auto]">
                Jens
              </Text>
            </Column>
            <Column className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[15%]">
              <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Categories
              </Text>
              <Text className="font-normal lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_100 w-[auto]">
                Men
              </Text>
              <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_100 w-[auto]">
                Children
              </Text>
              <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_100 w-[auto]">
                Woman
              </Text>
            </Column>
            <Column className="mt-[4px] w-[15%]">
              <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Contact
              </Text>
              <Text className="font-normal lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_100 w-[auto]">
                mangcoding@gmail.com
              </Text>
              <Img
                src="images/img_group2000.svg"
                className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[97%]"
                alt="Group2000"
              />
            </Column>
          </Row>
        </footer>
      </Column>
    </>
  );
};

export default SignUpPage;
