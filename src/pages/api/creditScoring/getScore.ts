import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const {
        anualIncome,
        currentCapital,
        anualProfit,
        totalCredit,
        totalDebit,
        netAMT,
        totalRate,
        gender,
      } = req.body

      const data = {
        transaction_info: {
          total_credit: totalCredit,
          total_debit: totalDebit,
          total_net_amt: netAMT,
          credit_mean: 230,
          debit_mean: 220,
          total_rate: totalRate,
          sd_credit: 20.4,
          sd_debit: 15.3,
          total_txn_count: 25,
          zero_txn: 2,
          volatility: 25.6,
          log_balance: 94.5,
          unique_source_inflow: 4,
          unique_source_outflow: 5,
        },
        business_info: {
          business_region: 'addis_ababa',
          business_level: 'startup',
          business_number_of_employees: 3,
          business_source_of_initial_capital: 'own',
          business_sector: 'building_and_construction',
          business_annual_income: anualIncome,
          business_association_type: 'own',
          business_starting_capital: 100000,
          business_current_capital: currentCapital,
          business_annual_profit: anualProfit,
          business_establishment_year: '2015',
          customer_age: 25,
          customer_level_of_education: 'bachelors',
          customer_gender: gender,
        },
        psycometric_info: {
          gender,
          age: 23,
          question_map_id_1: 2,
          question_map_id_2: 3,
          question_map_id_3: 4,
          question_map_id_4: 5,
          question_map_id_5: 1,
          question_map_id_6: 2,
          question_map_id_7: 3,
          question_map_id_8: 4,
          question_map_id_9: 1,
          question_map_id_10: 2,
          question_map_id_11: 3,
          question_map_id_12: 4,
        },
      }

      const response = await axios.post(
        'https://ylhvjbhauhq7t24lzw7flkswte0nztsh.lambda-url.us-east-1.on.aws/',
        data,
      )

      res.status(200).json(response.data)
    }
    catch (error) {
      console.error('Error posting data to external API:', error)
      res.status(500).json({ message: 'Error posting data to external API' })
    }
  }
  else {
    res.status(405).end()
  }
}
