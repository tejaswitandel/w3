import React from "react";

import {
  Column,
  Slider,
  Row,
  Img,
  Text,
  SelectBox,
  Stack,
  Input,
  Button,
  Line,
  Grid,
  RatingBar,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const ShopPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);
  const [inputvalue2, setInputvalue2] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-mada items-center mx-[auto] w-[100%]">
        <Slider
          autoPlay
          autoPlayInterval={2000}
          slidesToShow={2}
          activeIndex={sliderState}
          onSlideChanged={(e) => {
            setsliderState(e?.item);
          }}
          activeSlideCSS="scale-[0.06]"
          magnifiedIndex={1}
          centerMode
          ref={sliderRef}
          className="w-[100%]"
          items={[...Array(6)].map(() => (
            <React.Fragment key={Math.random()}>
              <Column className="bg-gradient  2xl:pb-[103px] 3xl:pb-[123px] lg:pb-[80px] xl:pb-[91px] rounded-radius5 w-[100%]">
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
                        value={inputvalue2}
                        onChange={(e) => setInputvalue2(e?.target?.value)}
                        className="font-mada font-normal not-italic p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_300 text-gray_300 w-[100%]"
                        wrapClassName="2xl:ml-[29px] 2xl:mr-[104px] 3xl:ml-[34px] 3xl:mr-[124px] flex lg:ml-[22px] lg:mr-[80px] mt-[2px] w-[18%] xl:ml-[25px] xl:mr-[92px]"
                        name="FrameNine"
                        placeholder="Search"
                        suffix={
                          inputvalue2?.length > 0 ? (
                            <CloseSVG
                              className="cursor-pointer lg:w-[10px] lg:h-[11px] lg:ml-[27px] lg:mr-[6px] xl:w-[11px] xl:h-[12px] xl:ml-[31px] xl:mr-[7px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[35px] 2xl:mr-[8px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[42px] 3xl:mr-[9px] my-[auto]"
                              onClick={() => setInputvalue2("")}
                              color="#dddddd"
                            />
                          ) : (
                            <Img
                              src="images/img_search.svg"
                              className="cursor-pointer lg:w-[10px] lg:h-[11px] lg:ml-[27px] lg:mr-[6px] xl:w-[11px] xl:h-[12px] xl:ml-[31px] xl:mr-[7px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[35px] 2xl:mr-[8px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[42px] 3xl:mr-[9px] my-[auto]"
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
                <Row className="lg:ml-[342px] xl:ml-[391px] 2xl:ml-[440px] 3xl:ml-[528px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] pb-[2px] w-[33%]">
                  <Button
                    className="flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    size="smIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_arrowleft.svg"
                      className="flex items-center justify-center"
                      alt="arrowleft"
                    />
                  </Button>
                  <Column className="items-center mb-[1px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] w-[17%]">
                    <Img
                      src="images/img_unsplashjddw6i.png"
                      className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius50 w-[100%]"
                      alt="unsplashjddw6i"
                    />
                    <Text className="font-bold lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                      Jacket
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[17%]">
                    <Img
                      src="images/img_unsplashpfanx.png"
                      className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius50 w-[100%]"
                      alt="unsplashPFanx"
                    />
                    <Text className="font-bold lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                      Shirt
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[17%]">
                    <Img
                      src="images/img_unsplashdmd8hv.png"
                      className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius50 w-[100%]"
                      alt="unsplashDmD8HV"
                    />
                    <Text className="font-bold lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                      Jeans
                    </Text>
                  </Column>
                  <Button
                    className="flex lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    size="smIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_arrowleft.svg"
                      className="flex items-center justify-center"
                      alt="arrowleft One"
                    />
                  </Button>
                </Row>
              </Column>
            </React.Fragment>
          ))}
        />
        <Column className="lg:mt-[64px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] xl:px-[106px] 2xl:px-[120px] 3xl:px-[144px] lg:px-[93px] w-[100%]">
          <Text className="font-bold lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 w-[auto]">
            T - Shirt
          </Text>
        </Column>
        <Row className="font-poppins lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[83%]">
          <Column className="mt-[4px] w-[27%]">
            <Row className="w-[29%]">
              <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                Filter
              </Text>
              <Img
                src="images/img_settings.svg"
                className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[4px] w-[18%]"
                alt="settings"
              />
            </Row>
            <Row className="lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[86%]">
              <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                Categories
              </Text>
              <Img
                src="images/img_arrowleft_gray_500.svg"
                className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[129px] xl:ml-[148px] 2xl:ml-[167px] 3xl:ml-[200px] mt-[4px] w-[4%]"
                alt="arrowleft Two"
              />
            </Row>
            <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[86%]">
              <Button
                className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[22%]"
                size="sm"
                variant="FillIndigoA200"
              >
                Men
              </Button>
              <Button
                className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[33%]"
                size="sm"
                variant="OutlineGray300"
              >
                Woman
              </Button>
              <Button
                className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                size="sm"
                variant="OutlineGray300"
              >
                Children
              </Button>
            </Row>
            <Line className="bg-gray_300 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[87%]" />
            <Row className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[86%]">
              <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                Price
              </Text>
              <Img
                src="images/img_arrowleft_gray_500.svg"
                className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[173px] xl:ml-[198px] 2xl:ml-[223px] 3xl:ml-[267px] w-[4%]"
                alt="arrowleft Three"
              />
            </Row>
            <Column className="items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[86%]">
              <Img
                src="images/img_group131.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[95%]"
                alt="Group131"
              />
              <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  <span className="text-gray_900 font-poppins font-bold">
                    ${" "}
                  </span>
                  <span className="text-gray_900 font-poppins font-extrabold">
                    40
                  </span>
                </Text>
                <Text className="font-normal mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  $ 500
                </Text>
              </Row>
            </Column>
            <Line className="bg-gray_300 h-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[87%]" />
            <Row className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[86%]">
              <Column className="w-[96%]">
                <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  Color
                </Text>
                <Row className="items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[36%]">
                  <div className="bg-green_900 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius50 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
                  <div className="bg-yellow_900 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] rounded-radius50 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
                  <div className="bg-red_700 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] rounded-radius50 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
                  <div className="bg-blue_A200 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] rounded-radius50 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
                </Row>
              </Column>
              <Img
                src="images/img_arrowleft_gray_500.svg"
                className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[4%]"
                alt="arrowleft Four"
              />
            </Row>
            <Line className="bg-gray_300 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[87%]" />
            <Row className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[86%]">
              <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                Size
              </Text>
              <Img
                src="images/img_arrowleft_gray_900.svg"
                className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[180px] xl:ml-[206px] 2xl:ml-[232px] 3xl:ml-[278px] w-[4%]"
                alt="arrowleft Five"
              />
            </Row>
            <Row className="items-center lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[64%]">
              <Column className="w-[22%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                  S
                </Text>
                <div className="bg-indigo_A200 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
              </Column>
              <Column className="mt-[1px] w-[24%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                  M
                </Text>
                <div className="bg-gray_400 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] ml-[2px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
              </Column>
              <Column className="mt-[1px] w-[22%]">
                <Text className="font-normal ml-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                  L
                </Text>
                <div className="bg-gray_400 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
              </Column>
              <Column className="mt-[1px] w-[21%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                  XL
                </Text>
                <div className="bg-gray_400 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] ml-[3px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
              </Column>
              <Column className="items-center mt-[1px] w-[12%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                  XXL
                </Text>
                <div className="bg-gray_400 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
              </Column>
            </Row>
            <Line className="bg-gray_300 h-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[87%]" />
          </Column>
          <Grid className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-3 w-[73%]">
            <Column className="items-center shadow-bs w-[100%]">
              <Img
                src="images/img_unsplashtvg4wv.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplashtvG4Wv"
              />
              <Column className="bg-white_A700 justify-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Row className="justify-between mt-[2px] w-[97%]">
                  <Text className="font-bold font-poppins mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Smart T-Shirt
                  </Text>
                  <Text className="font-bold font-signika lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    40$
                  </Text>
                </Row>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Best quality
                </Text>
                <Row className="font-signika lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[73%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_A200)"
                      size={((window.innerWidth - 15) * 18) / 1440}
                    ></RatingBar>
                  </Row>
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center shadow-bs w-[100%]">
              <Img
                src="images/img_unsplash7cernd.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplash7cERnd"
              />
              <Column className="bg-white_A700 justify-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Row className="justify-between mt-[2px] w-[97%]">
                  <Text className="font-bold font-poppins mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Smart T-Shirt
                  </Text>
                  <Text className="font-bold font-signika lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    40$
                  </Text>
                </Row>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Best quality
                </Text>
                <Row className="font-signika lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[73%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_A200)"
                      size={((window.innerWidth - 15) * 18) / 1440}
                    ></RatingBar>
                  </Row>
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center shadow-bs w-[100%]">
              <Img
                src="images/img_unsplashgeupir_248X265.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplashgEupiR"
              />
              <Column className="bg-white_A700 justify-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Row className="justify-between mt-[2px] w-[97%]">
                  <Text className="font-bold font-poppins mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Smart T-Shirt
                  </Text>
                  <Text className="font-bold font-signika lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    40$
                  </Text>
                </Row>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Best quality
                </Text>
                <Row className="font-signika lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[73%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_A200)"
                      size={((window.innerWidth - 15) * 18) / 1440}
                    ></RatingBar>
                  </Row>
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center shadow-bs w-[100%]">
              <Img
                src="images/img_unsplashtvg4wv.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplashtvG4Wv One"
              />
              <Column className="bg-white_A700 justify-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Row className="justify-between mt-[2px] w-[97%]">
                  <Text className="font-bold font-poppins mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Smart T-Shirt
                  </Text>
                  <Text className="font-bold font-signika lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    40$
                  </Text>
                </Row>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Best quality
                </Text>
                <Row className="font-signika lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[73%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_A200)"
                      size={((window.innerWidth - 15) * 18) / 1440}
                    ></RatingBar>
                  </Row>
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center shadow-bs w-[100%]">
              <Img
                src="images/img_unsplash7cernd.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplash7cERnd One"
              />
              <Column className="bg-white_A700 justify-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Row className="justify-between mt-[2px] w-[97%]">
                  <Text className="font-bold font-poppins mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Smart T-Shirt
                  </Text>
                  <Text className="font-bold font-signika lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    40$
                  </Text>
                </Row>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Best quality
                </Text>
                <Row className="font-signika lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[73%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_A200)"
                      size={((window.innerWidth - 15) * 18) / 1440}
                    ></RatingBar>
                  </Row>
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center shadow-bs w-[100%]">
              <Img
                src="images/img_unsplashgeupir_248X265.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplashgEupiR One"
              />
              <Column className="bg-white_A700 justify-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Row className="justify-between mt-[2px] w-[97%]">
                  <Text className="font-bold font-poppins mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Smart T-Shirt
                  </Text>
                  <Text className="font-bold font-signika lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    40$
                  </Text>
                </Row>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Best quality
                </Text>
                <Row className="font-signika lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[73%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_A200)"
                      size={((window.innerWidth - 15) * 18) / 1440}
                    ></RatingBar>
                  </Row>
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center shadow-bs w-[100%]">
              <Img
                src="images/img_unsplashtvg4wv.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplashtvG4Wv Two"
              />
              <Column className="bg-white_A700 justify-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Row className="justify-between mt-[2px] w-[97%]">
                  <Text className="font-bold font-poppins mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Smart T-Shirt
                  </Text>
                  <Text className="font-bold font-signika lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    40$
                  </Text>
                </Row>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Best quality
                </Text>
                <Row className="font-signika lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[73%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_A200)"
                      size={((window.innerWidth - 15) * 18) / 1440}
                    ></RatingBar>
                  </Row>
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center shadow-bs w-[100%]">
              <Img
                src="images/img_unsplash7cernd.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplash7cERnd Two"
              />
              <Column className="bg-white_A700 justify-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Row className="justify-between mt-[2px] w-[97%]">
                  <Text className="font-bold font-poppins mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Smart T-Shirt
                  </Text>
                  <Text className="font-bold font-signika lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    40$
                  </Text>
                </Row>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Best quality
                </Text>
                <Row className="font-signika lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[73%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_A200)"
                      size={((window.innerWidth - 15) * 18) / 1440}
                    ></RatingBar>
                  </Row>
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center shadow-bs w-[100%]">
              <Img
                src="images/img_unsplashgeupir_248X265.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplashgEupiR Two"
              />
              <Column className="bg-white_A700 justify-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Row className="justify-between mt-[2px] w-[97%]">
                  <Text className="font-bold font-poppins mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Smart T-Shirt
                  </Text>
                  <Text className="font-bold font-signika lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    40$
                  </Text>
                </Row>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Best quality
                </Text>
                <Row className="font-signika lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[73%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_A200)"
                      size={((window.innerWidth - 15) * 18) / 1440}
                    ></RatingBar>
                  </Row>
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center shadow-bs w-[100%]">
              <Img
                src="images/img_unsplashtvg4wv.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplashtvG4Wv Three"
              />
              <Column className="bg-white_A700 justify-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Row className="justify-between mt-[2px] w-[97%]">
                  <Text className="font-bold font-poppins mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Smart T-Shirt
                  </Text>
                  <Text className="font-bold font-signika lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    40$
                  </Text>
                </Row>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Best quality
                </Text>
                <Row className="font-signika lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[73%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_A200)"
                      size={((window.innerWidth - 15) * 18) / 1440}
                    ></RatingBar>
                  </Row>
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center shadow-bs w-[100%]">
              <Img
                src="images/img_unsplash7cernd.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplash7cERnd Three"
              />
              <Column className="bg-white_A700 justify-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Row className="justify-between mt-[2px] w-[97%]">
                  <Text className="font-bold font-poppins mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Smart T-Shirt
                  </Text>
                  <Text className="font-bold font-signika lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    40$
                  </Text>
                </Row>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Best quality
                </Text>
                <Row className="font-signika lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[73%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_A200)"
                      size={((window.innerWidth - 15) * 18) / 1440}
                    ></RatingBar>
                  </Row>
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center shadow-bs w-[100%]">
              <Img
                src="images/img_unsplashgeupir_248X265.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplashgEupiR Three"
              />
              <Column className="bg-white_A700 justify-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Row className="justify-between mt-[2px] w-[97%]">
                  <Text className="font-bold font-poppins mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Smart T-Shirt
                  </Text>
                  <Text className="font-bold font-signika lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    40$
                  </Text>
                </Row>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Best quality
                </Text>
                <Row className="font-signika lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[73%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_A200)"
                      size={((window.innerWidth - 15) * 18) / 1440}
                    ></RatingBar>
                  </Row>
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
          </Grid>
        </Row>
        <Column className="font-poppins items-end lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:px-[363px] xl:px-[415px] 2xl:px-[467px] 3xl:px-[560px] w-[100%]">
          <Button
            className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[36%]"
            size="md"
            variant="OutlineBlack9000c"
          >
            Load More
          </Button>
        </Column>
        <Text className="font-normal 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] 2xl:mt-[93px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
          Recommend Product
        </Text>
        <Row className="font-poppins items-center lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[85%]">
          <Stack className="lg:h-[285px] xl:h-[326px] 2xl:h-[367px] 3xl:h-[440px] w-[23%]">
            <Column className="absolute items-center right-[0] shadow-bs w-[93%]">
              <Img
                src="images/img_unsplashjskqei.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplashJskqEI"
              />
              <Column className="bg-white_A700 justify-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Row className="justify-between mt-[2px] w-[97%]">
                  <Text className="font-bold font-poppins mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Smart T-Shirt
                  </Text>
                  <Text className="font-bold font-signika lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    40$
                  </Text>
                </Row>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Best quality
                </Text>
                <Row className="font-signika lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[73%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_A200)"
                      size={((window.innerWidth - 15) * 18) / 1440}
                    ></RatingBar>
                  </Row>
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
            <Button
              className="absolute flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] inset-y-[0] items-center justify-center left-[0] my-[auto] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
              size="mdIcn"
              variant="icbOutline"
            >
              <Img
                src="images/img_arrowleft_white_A700.svg"
                className="flex items-center justify-center"
                alt="arrowleft Six"
              />
            </Button>
          </Stack>
          <List
            className="font-signika lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-2 min-h-[auto] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[47%]"
            orientation="horizontal"
          >
            <Column className="items-center shadow-bs w-[100%]">
              <Img
                src="images/img_unsplashtvg4wv.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplashtvG4Wv Four"
              />
              <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Row className="justify-between mt-[2px] w-[97%]">
                  <Text className="font-bold font-poppins mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Smart T-Shirt
                  </Text>
                  <Text className="font-bold font-signika lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    40$
                  </Text>
                </Row>
                <Row className="lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[42%]">
                    <Img
                      src="images/img_star1.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius05 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      alt="StarOne"
                    />
                    <Img
                      src="images/img_star2.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius05 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      alt="StarTwo"
                    />
                    <Img
                      src="images/img_star3.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius05 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      alt="StarThree"
                    />
                  </Row>
                  <Text className="font-normal lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="font-poppins items-center shadow-bs w-[100%]">
              <Img
                src="images/img_unsplash7cernd.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplash7cERnd Four"
              />
              <Column className="bg-white_A700 justify-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Text className="font-bold mt-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                  Smart T-Shirt
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Best quality
                </Text>
                <Row className="font-signika lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[58%]">
                    <Img
                      src="images/img_star1_18X18.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius05 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      alt="StarOne One"
                    />
                    <Img
                      src="images/img_star2_18X18.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius05 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      alt="StarTwo One"
                    />
                    <Img
                      src="images/img_star3_18X18.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius05 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      alt="StarThree One"
                    />
                    <Img
                      src="images/img_star4.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius05 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      alt="StarFour"
                    />
                  </Row>
                  <Text className="font-normal lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
          </List>
          <Stack className="font-poppins lg:h-[285px] xl:h-[326px] 2xl:h-[367px] 3xl:h-[440px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[23%]">
            <Column className="absolute items-center left-[0] shadow-bs w-[93%]">
              <Img
                src="images/img_unsplashgeupir_248X265.png"
                className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                alt="unsplashgEupiR Four"
              />
              <Column className="bg-white_A700 justify-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Row className="justify-between mt-[2px] w-[97%]">
                  <Text className="font-bold font-poppins mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                    Smart T-Shirt
                  </Text>
                  <Text className="font-bold font-signika lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    40$
                  </Text>
                </Row>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Best quality
                </Text>
                <Row className="font-signika lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[73%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_A200)"
                      size={((window.innerWidth - 15) * 18) / 1440}
                    ></RatingBar>
                  </Row>
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    ( 1k )
                  </Text>
                </Row>
              </Column>
            </Column>
            <div className="absolute bg-white_A700 lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] inset-y-[0] my-[auto] right-[0] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
          </Stack>
        </Row>
        <footer className="bg-gray_800 font-poppins lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
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

export default ShopPage;
