#[macro_use]
extern crate strum_macros;
extern crate strum;
use crate::instructions::*;
use anchor_lang::prelude::*;

pub mod instructions;
declare_id!("3GGuze1KGb4k2Uueokw6dRRwmei2zBjmq88o25fCDG1j");

#[program]
pub mod icoordinates_third_party_solana {
    use super::*;

    pub fn integrate_third_party(ctx: Context<IntegrateThirdPartyController>) -> Result<()> {
        integrate_third_party_controller::handler(ctx)
    }
}
