use anchor_lang::prelude::*;
use crate::instructions::{ICoordinates};

#[derive(Accounts)]
pub struct IntegrateThirdPartyController<'info> {
    #[account(mut)]
    pub signer:Signer<'info>,
    pub coordinates: Account<'info, ICoordinates>,
    pub system_program:Program<'info,System>,
}

pub(crate) fn handler(ctx: Context<IntegrateThirdPartyController>) -> Result<()> {
    msg!("{}",ctx.accounts.coordinates.owner);
    msg!("{}",ctx.accounts.coordinates.website);
    msg!("{}",ctx.accounts.coordinates.email);
    Ok(())
}
