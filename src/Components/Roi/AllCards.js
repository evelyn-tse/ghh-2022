import React from "react";
import InfoCard from "./InfoCard.js";
import MainCard from "./MainCard.js";
import image1 from "./image1.jpeg";
import savings from "./savings.jpg";
import big3 from "./big3.jpg";
import big1 from "./big1.jpg";
import big2 from "./big2.png";
import rothIra from "./rothira.jpg";
import mutual from "./mutualfund.jpg";
import bond from "./bond.jpg";
import four from "./401k.png";
import cd from "./cd.jpeg";
import "./AllCards.css";

const AllCards = () => {
  return (
    <div>
        <div className="MainCards">
            <MainCard image={big2} imageText={"big2"} title={"What Is Investing?"} content={"'Investing, broadly, is putting money to work for a period of time in some sort of project or undertaking in order to generate positive returns (i.e., profits that exceed the amount of the initial investment). It is the act of allocating resources, usually capital (i.e., money), with the expectation of generating an income, profit, or gains.' - Elvis Picardo, Investopedia"} />
            <MainCard image={big1} imageText={"big1"} title={"Why Should You Invest?"} content={"Investing will help you achieve financial independence. Overtime, the value of money decreases due to inflation, but investing will help you maintain your purchasing power and protect the value of your money as the cost of living rises. Investing helps you create wealth with passive income, plan for retirement, and overcome inflation."}/>
            <MainCard image={big3} imageText={"big3"} title={"Where Do I Start?"} content={"Before starting, you should designate a small percentage of your monthly income for investing. One investment strategy does not fit all, so it is important to research various investment strategies and find one that works for your short and long term goals. Common ways to invest is through Roth IRAs, Mutual Funds, High Yield Savings Accounts, Bonds, Certificates of Deposit, and 401k Plans."}/>
        </div>
        <div className="InfoCards">
            <InfoCard image={rothIra} title={'Roth IRA'} content={"'A Roth IRA is an Individual Retirement Account to which you contribute after-tax dollars. While there are no current-year tax benefits, your contributions and earnings can grow tax-free, and you can withdraw them tax- and penalty-free after age 59.5 and once the account has been open for five years.' - Charles Schwab"}/>
            <InfoCard image={mutual} title={'Mutual Funds'} content={"'A mutual fund is a financial vehicle that pools assets from shareholders to invest in securities like stocks, bonds, money market instruments, and other assets. Mutual funds are operated by professional money managers, who allocate the fund's assets and attempt to produce capital gains.' - Investopedia"}/>
            <InfoCard image={savings} title={'High Yield Savings Account'} content={"'A high-yield savings account is a type of savings account that typically pays 20 to 25 times the national average of a standard savings account.' - Investopedia.  'They can earn around 1.50% Annual Percentage Yield. By comparison, the national savings average is 0.17% Annual Percent Yield.' - Nerd Wallet"}/>
        </div>
        <div className="InfoCards">
            <InfoCard image={bond} title={'Bonds'} content={"Bonds represent a loan from the buyer (you) to the issuer of the bond. They can be issued by companies or governments and generally pay a stated interest rate. The market value of a bond changes over time as it becomes more or less attractive to potenial buyers. Interest rates vary by quality and maturity date.' - Investor Vanguard"}/>
            <InfoCard image={cd} title={'Certificates of Deposit'} content={"A certificate of deposit is a type of savings account with a fixed rate and term. They can have higher rates than regular savings accounts, but don't allow easy access to your money until a terms ends. However, they have guaranteed returns without much risk and is a place for savings earmarked for future use.' - Nerd Wallet"}/>
            <InfoCard image={four} title={'401(k)'} content={"'A 401(k) is a retirement savings plan that allows employees to contribute a portion of their pre-tax, employees choose the percentage, income to the plan. The contributions are invested in mutual funds, and the earnings grow tax-free until they are withdrawn from the investment account.' - Annuity Expert Advice"}/>
        </div>
    </div>
  );
};

export default AllCards;