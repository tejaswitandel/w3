import React from "react";

import {
  Column,
  Stack,
  Row,
  Img,
  Text,
  SelectBox,
  Input,
  Button,
  TextArea,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const ContactPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 items-center mx-[auto] w-[100%]">
        <Stack className="lg:h-[511px] xl:h-[584px] 2xl:h-[657px] 3xl:h-[788px] w-[100%]">
          <Column className="absolute bg-gradient  lg:pb-[157px] xl:pb-[180px] 2xl:pb-[203px] 3xl:pb-[243px] rounded-radius5 top-[0] w-[100%]">
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
            <Column className="xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[35%]">
              <Row className="font-poppins w-[31%]">
                <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  Home
                </Text>
                <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  /
                </Text>
                <Text className="font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[3px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  Contact
                </Text>
              </Row>
              <Text className="font-bold font-mada lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-white_A700 w-[auto]">
                Contact
              </Text>
              <Text className="font-normal font-poppins lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_100 w-[100%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
                ullamcorper.
              </Text>
            </Column>
          </Column>
          <Row className="absolute bottom-[0] inset-x-[0] items-center justify-center mx-[auto] w-[70%]">
            <Column className="bg-white_A700 lg:p-[29px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] shadow-bs1 w-[48%]">
              <Button
                className="flex lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center ml-[1px] mt-[2px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                shape="icbCircleBorder20"
                size="mdIcn"
                variant="icbFillIndigoA200"
              >
                <Img
                  src="images/img_location.svg"
                  className="flex items-center justify-center"
                  alt="location"
                />
              </Button>
              <Text className="font-bold font-mada ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                Location
              </Text>
              <Text className="font-normal font-poppins lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[100%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam.{" "}
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:p-[30px] xl:p-[34px] 2xl:p-[39px] 3xl:p-[46px] shadow-bs1 w-[48%]">
              <Button
                className="flex lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                shape="icbCircleBorder20"
                size="smIcn"
                variant="icbFillIndigoA200"
              >
                <Img
                  src="images/img_call.svg"
                  className="flex items-center justify-center lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                  alt="call"
                />
              </Button>
              <Text className="font-bold font-mada lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                Contact
              </Text>
              <Text className="font-normal font-poppins lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                T-shirt12@gmail.com
              </Text>
              <Text className="font-normal font-poppins lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                (021) 12345678
              </Text>
            </Column>
          </Row>
        </Stack>
        <Text className="font-bold font-mada 3xl:mt-[105px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 w-[auto]">
          Send a Message
        </Text>
        <Row className="font-poppins items-center justify-center lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[69%]">
          <Input
            className="font-normal not-italic p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_500 text-gray_500 w-[100%]"
            wrapClassName="w-[49%]"
            type="text"
            name="Group435"
            placeholder="Firs Name"
            size="sm"
            variant="OutlineGray500"
          ></Input>
          <Input
            className="font-normal not-italic p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_500 text-gray_500 w-[100%]"
            wrapClassName="2xl:ml-[24px] 3xl:ml-[28px] lg:ml-[18px] w-[49%] xl:ml-[21px]"
            type="text"
            name="Group434"
            placeholder="Last Name"
            size="sm"
            variant="OutlineGray500"
          ></Input>
        </Row>
        <Input
          className="font-normal font-poppins not-italic p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_500 text-gray_500 w-[100%]"
          wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] lg:mt-[18px] w-[69%] xl:mt-[21px]"
          type="email"
          name="Group433"
          placeholder="Your Email"
          size="sm"
          variant="OutlineGray500"
        ></Input>
        <TextArea
          className="font-normal font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_500 text-gray_500 w-[69%]"
          name="Group432"
          placeholder="Description"
        ></TextArea>
        <Button
          className="font-bold font-poppins lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[13%]"
          size="md"
          variant="OutlineBlack9000c"
        >
          Send
        </Button>
        <footer className="bg-gray_800 font-poppins 3xl:mt-[109px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[91px] w-[100%]">
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

export default ContactPage;
