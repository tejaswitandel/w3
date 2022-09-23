import React from "react";

import { handleSectionNavigation } from "util";
import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Stack,
  Input,
  RatingBar,
  Button,
  Line,
  Grid,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const DetailProductPage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/shop");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 items-center mx-[auto] w-[100%]">
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
        <Column className="font-poppins lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] xl:px-[106px] 2xl:px-[120px] 3xl:px-[144px] lg:px-[93px] w-[100%]">
          <Row className="w-[25%]">
            <Text
              className="common-pointer font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]"
              onClick={handleNavigate3}
            >
              Home
            </Text>
            <Text className="font-normal mb-[3px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
              /
            </Text>
            <Text
              className="common-pointer font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]"
              onClick={() => {
                handleSectionNavigation("block2");
              }}
            >
              Shope
            </Text>
            <Text className="font-normal mb-[3px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
              /
            </Text>
            <Text
              className="common-pointer font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]"
              onClick={() => {
                handleSectionNavigation("block1");
              }}
            >
              Smart T-Shirt
            </Text>
          </Row>
        </Column>
        <Row className="items-center lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[83%]">
          <Column className="w-[52%]">
            <Img
              src="images/img_unsplashacn5er.png"
              className="lg:h-[312px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] w-[94%]"
              alt="unsplashacn5ER"
            />
            <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[94%]">
              <Img
                src="images/img_unsplash9ugeeq.png"
                className="lg:h-[140px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] lg:w-[140px] xl:w-[160px] 2xl:w-[180px] 3xl:w-[216px]"
                alt="unsplash9ugEeq"
              />
              <Img
                src="images/img_unsplashq0zoxq.png"
                className="lg:h-[140px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:w-[140px] xl:w-[160px] 2xl:w-[180px] 3xl:w-[216px]"
                alt="unsplashQ0zoxQ"
              />
              <Img
                src="images/img_unsplashgeupir.png"
                className="lg:h-[140px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:w-[140px] xl:w-[160px] 2xl:w-[180px] 3xl:w-[216px]"
                alt="unsplashgEupiR"
              />
            </Row>
          </Column>
          <Column className="w-[48%]">
            <Text className="font-bold font-mada lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 w-[auto]">
              Smart T-Shirt
            </Text>
            <Text className="font-normal font-poppins lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[98%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
              gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
              ullamcorper.
            </Text>
            <Row className="font-poppins justify-evenly lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
              <Column className="lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] w-[83%]">
                <Row className="font-mada items-center rounded-radius05 w-[35%]">
                  <Row className="items-center justify-evenly rounded-radius05 w-[73%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_A200)"
                      size={((window.innerWidth - 15) * 18) / 1440}
                    ></RatingBar>
                  </Row>
                  <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                    ( 2k )
                  </Text>
                </Row>
                <Text className="font-bold font-poppins lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  Color
                </Text>
                <Img
                  src="images/img_group2035.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[14%]"
                  alt="Group2035"
                />
              </Column>
              <Column className="lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[17%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  Stoct
                </Text>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                    ( 1234 )
                  </Text>
                  <Img
                    src="images/img_cart.svg"
                    className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] w-[22%]"
                    alt="cart"
                  />
                </Row>
              </Column>
            </Row>
            <Text className="font-bold font-poppins lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
              Size
            </Text>
            <Row className="font-poppins items-center lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[23%]">
              <Text className="bg-indigo_A200 flex font-bold items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius50 lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[24px]">
                S
              </Text>
              <Text className="bg-gray_100 flex font-normal items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] rounded-radius50 lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[24px]">
                M
              </Text>
              <Text className="bg-gray_100 flex font-normal items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic 3xl:px-[10px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[24px]">
                L
              </Text>
              <Text className="bg-gray_100 flex font-normal items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic pl-[4px] rounded-radius50 lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[24px]">
                XL
              </Text>
            </Row>
            <Row className="items-end justify-evenly lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]">
              <Column className="font-poppins w-[74%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  Quantity
                </Text>
                <Row
                  className="bg-white_A700 border border-gray_500 border-solid font-mada items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] w-[33%]"
                  id="block2"
                >
                  <Img
                    src="images/img_vector36.svg"
                    className="xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] ml-[1px] w-[13%]"
                    alt="VectorThirtySix"
                  />
                  <Text className="font-bold lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    1
                  </Text>
                  <Img
                    src="images/img_plus.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                    alt="plus"
                  />
                </Row>
              </Column>
              <Text className="font-bold font-mada mb-[4px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 w-[auto]">
                $40 USD
              </Text>
            </Row>
            <Row className="font-poppins items-center justify-between lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]">
              <Button
                className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[89%]"
                id="block1"
                size="md"
                variant="OutlineBlack90019"
              >
                Checkout
              </Button>
              <Button
                className="flex lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                size="mdIcn"
                variant="icbGradientIndigoA100DeeppurpleA200"
              >
                <Img
                  src="images/img_bag_48X48.svg"
                  className="flex items-center justify-center"
                  alt="bag One"
                />
              </Button>
            </Row>
          </Column>
        </Row>
        <Column className="bg-gray_100 font-poppins lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] lg:p-[33px] xl:p-[38px] 2xl:p-[43px] 3xl:p-[51px] w-[100%]">
          <Column className="lg:ml-[396px] xl:ml-[453px] 2xl:ml-[510px] 3xl:ml-[612px] w-[24%]">
            <Row className="justify-between ml-[4px] w-[99%]">
              <Text className="font-bold mt-[3px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-indigo_A200 w-[auto]">
                Desciption
              </Text>
              <Text className="font-normal mb-[1px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_500 w-[auto]">
                Reviews ( 5 )
              </Text>
            </Row>
            <Line className="bg-indigo_A200 h-[2px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] rounded-radius1 w-[43%]" />
          </Column>
          <Text className="font-bold lg:ml-[59px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
            Detail Product
          </Text>
          <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] mb-[1px] 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] lg:mr-[584px] xl:mr-[668px] 2xl:mr-[752px] 3xl:mr-[902px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[38%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Column>
        <Text className="font-bold font-mada 3xl:mt-[100px] lg:mt-[65px] xl:mt-[74px] 2xl:mt-[84px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 w-[auto]">
          Same Product
        </Text>
        <Grid className="font-poppins lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-4 lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[82%]">
          <Column className="items-center shadow-bs w-[100%]">
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
              src="images/img_unsplashjskqei.png"
              className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
              alt="unsplashJskqEI One"
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
        </Grid>
        <Button
          className="font-bold font-poppins lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[13%]"
          size="md"
          variant="OutlineBlack90019"
        >
          See More
        </Button>
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

export default DetailProductPage;
